const validateUser = (req, res, next) => {
  const { id, gender, name, contact, address, photoUrl } = req.body || {};

  if (id && gender && name && contact && address && photoUrl) {
    next();
  } else {
    if (!id) {
      res.status(406).json({ error: "Please Enter User Id" });
    }

    if (!gender) {
      res.status(406).json({ error: "Please Enter User Gender" });
    }

    if (!name) {
      res.status(406).json({ error: "Please Enter User Name" });
    }

    if (!contact) {
      res.status(406).json({ error: "Please Enter User Contact" });
    }

    if (!address) {
      res.status(406).json({ error: "Please Enter User Address" });
    }

    if (!photoUrl) {
      res.status(406).json({ error: "Please Enter User PhotoUrl" });
    }
    req.error = "error";
    next();
  }
};

module.exports = validateUser;
