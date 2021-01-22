const slug = require("slug");
const shortid = require("shortid");

const AWS = require("aws-sdk");
const path = require("path");

const DB = require("@db");
const { DOMAIN, AWS_BUCKET, AWS_ENDPOINT, AWS_KEY, AWS_SECRET } = process.env;

const space = new AWS.S3({
  //Get the endpoint from the DO website for your space
  endpoint: AWS_ENDPOINT,
  //Create a credential using DO Spaces API key (https://cloud.digitalocean.com/account/api/tokens)
  credentials: new AWS.Credentials(AWS_KEY, AWS_SECRET, null),
});

exports.index = async (req, res, next) => {
  space.listObjects({ Bucket: AWS_BUCKET }, async (error, data) => {
    if (error) {
      console.error(error);
      return res.sendStatus(500);
    }
    const files = await DB.File.find({});
    res.json({ files, data });
  });
};

exports.store = async (req, res, next) => {
  let slugy = slug(`${req.file.originalname} ${shortid.generate()}`);
  slugy += path.extname(req.file.originalname);
  const uploadParameters = {
    Bucket: AWS_BUCKET,
    ContentType: req.file.mimetype,
    Body: req.file.buffer,
    ACL: req.query.acl,
    Key: slugy,
  };

  space.upload(uploadParameters, async (error, data) => {
    if (error) {
      console.error(error);
      return res.sendStatus(500);
    }

    const File = new DB.File({
      slugy,
      longCDN: data.Location,
      shortCDN: `${DOMAIN}${data.Key}`,
      type: path.extname(req.file.originalname),
    });
    await File.save();

    res.sendStatus(200);
  });
};

exports.show = async (req, res, next) => {
  space.getObject({ Bucket: AWS_BUCKET, Key: req.params.slug }, (error, data) => {
    if (error) {
      console.error(error);
      return res.sendStatus(500);
    }
    res.json({ data });
  });
};
