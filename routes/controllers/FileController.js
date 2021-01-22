const slug = require("slug");
const shortid = require("shortid");

const AWS = require("aws-sdk");
const DB = require("@db");

const { DOMAIN, AWS_BUCKET, AWS_ENDPOINT, AWS_KEY, AWS_SECRET } = process.env;

const space = new AWS.S3({
  //Get the endpoint from the DO website for your space
  endpoint: AWS_ENDPOINT,
  //Create a credential using DO Spaces API key (https://cloud.digitalocean.com/account/api/tokens)
  credentials: new AWS.Credentials(AWS_KEY, AWS_SECRET, null),
});

exports.store = async (req, res, next) => {
  const slugy = slug(`${req.file.originalname} ${shortid.generate()}`);

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

    const image = new DB.Image({
      slugy,
      longCDN: data.Location,
      shortCDN: `${DOMAIN}${data.Key}`,
    });
    await image.save();

    res.sendStatus(200);
  });
};
