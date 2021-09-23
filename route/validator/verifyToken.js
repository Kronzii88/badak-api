const jwt = require("jsonwebtoken");

// verifying for customer
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

// verifying for organizer
const verifyTokenOrganizer = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.user_type == "organizer" || "admin") {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

// verifying for admin

const verifyTokenAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.user_type == "admin") {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenOrganizer,
  verifyTokenAdmin,
};
