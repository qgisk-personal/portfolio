const validUrl = require("valid-url");
const shortid = require("shortid");

const DB = require("@db");

exports.index = async (req, res) => {
  try {
    const url = await DB.Url.findOne({ urlCode: req.params.code });

    if (url) {
      return res.redirect(url.longUrl);
    }

    return res.status(404).json("No url found");
  } catch (err) {
    res.status(500).json("Server error");
  }
};

exports.store = async (req, res) => {
  try {
    const { longUrl, shortUrl } = req.body;

    if (!validUrl.isUri(`${req.protocol}://${req.get("host")}`)) {
      return res.status(401).json("Invalid base url");
    }

    const urlCode = !shortUrl ? shortid.generate() : shortUrl;

    if (validUrl.isUri(longUrl)) {
      let url = await DB.Url.findOne({
        longUrl,
      });

      if (url) {
        return res.json(url);
      }

      const shortUrl = `${req.protocol}://${req.get("host")}/api/r/${urlCode}`;

      url = new DB.Url({
        longUrl,
        shortUrl,
        urlCode,
        date: new Date(),
      });

      await url.save();

      return res.json(url);
    }
    res.status(401).json("Invalid long url");
  } catch (err) {
    console.log(err);
    res.status(500).json("Server error");
  }
};
