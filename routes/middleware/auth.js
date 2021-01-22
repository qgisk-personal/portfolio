const DB = require("@db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

exports.ensureAuthenticated = async (req, res, next) => {
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
          return res.send("Page not found").status("404");
        }
        const user = await DB.User.findById(decoded.id);

        if (!user) return res.send("Page not found").status("404");

        req.user = user;
        next();
      });
    } else {
      return res.send("Page not found").status("404");
    }
  } catch (err) {
    next(err);
  }
};
exports.hasPerm = perm => {
  return function (req, res, next) {
    if (!req.user.permissions[perm]) return res.send("Page not found").status("404");
    else next();
  };
};
