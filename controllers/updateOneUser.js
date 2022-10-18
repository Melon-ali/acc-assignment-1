const fs = require("fs");

const updateOneUser = (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  const { error, user } = req || {};
  if (error) {
    res.status(500).json({ error: "internal server error" });
  } else {
    const newUser = { ...user, ...newData };
    fs.readFile("./fakedata/fakedata.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: "internal error" });
      } else {
        const allUser = JSON.parse(data);
        const newUserArr = allUser.filter((user) => user.id != id);
        const updatedUser = JSON.stringify([...newUserArr, newUser]);
        fs.writeFile("./fakedata/fakedata.json", updatedUser, (error) => {
          if (error) {
            res.status(500).json({ message: "internal error" });
          } else {
            res.status(201).json({ message: "user updated" });
          }
        });
      }
    });
  }
};

module.exports = updateOneUser;
