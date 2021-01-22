const DB = require("./../../database");
const Mail = require("./../helpers/Mail");

const mailTo = process.env.MAIL_TO;

exports.store = async (req, res) => {
  try {
    const from = req.sanitize(req.body.from);
    const email = req.sanitize(req.body.email);
    const time = req.sanitize(req.body.time);
    const body = req.sanitize(req.body.body);

    if (!from || !time || !email || !body)
      return res.status(422).json({ error: "Please provide all fields" });

    const mailOptions = {
      // from: from,
      to: mailTo,
      subject: `${from} - Contact Form`,
      text: `From: ${email}, \nTime: ${time}, \nMessage: ${body}`,
    };
    new DB.Contact({
      from,
      email,
      time,
      body,
    }).save();

    Mail.send(mailOptions)
      .then(() => {
        res.status(200).json({ msg: "Email has been send!" });
      })
      .catch(e => {
        console.log(e);
        res.status(500).json("Server error");
      });
  } catch (err) {
    console.log(err);
    res.status(500).json("Server error");
  }
};
