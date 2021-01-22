const jwt = require("jsonwebtoken");
const db = require("@db/");

const { BadRequest, ServerError, Forbidden } = require("@helpers/Errors");
const { JWT_SECRET } = process.env;

exports.login = async (req, res, next) => {
  let { email, password } = req.body;
  try {
    if (!password || !email) throw new BadRequest("Please fill in all fields correctly.");

    let foundUser = await db.User.findOne({
      email: email.toLowerCase(),
    });

    if (!foundUser) {
      throw new Forbidden("Unauthorized.");
    }

    let auth = await foundUser.comparePassword(password);

    if (!auth) {
      throw new Forbidden("Unauthorized.");
    }

    let token = await jwt.sign(
      {
        id: foundUser._id,
        name: foundUser.name,
      },
      JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    const user = await db.User.findById(foundUser.id).select("_id roles name email createdAt");

    res.status(200).json({
      token,
      user,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.getUserByToken = (req, res, next) => {
  try {
    let token =
      req.headers["x-access-token"] ||
      req.headers["authorization"] ||
      req.query.bearer ||
      req.query.authorization;
    if (token) {
      if (token.startsWith("Bearer ")) {
        token = token.slice(7, token.length);
      }
      jwt.verify(token, JWT_SECRET, async (err, decoded) => {
        if (err) {
          throw new Forbidden("Token is malformed or expired.");
        }

        const user = await db.User.findById(decoded.id).select("_id roles name email createdAt");

        if (!user) throw new Forbidden("Token has expired.");
        return res.json(user);
      });
    } else {
      throw new Forbidden("Token is malformed or expired.");
    }
  } catch (err) {
    next(err);
  }
};
