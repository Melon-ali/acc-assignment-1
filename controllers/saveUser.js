const fs = require("fs");

const saveUser = (req, res) => {
  const newData = req.body;
  const error = req.error;
  if (error) {
    res.send("error");
  } else {
    fs.readFile("./fakedata/fakedata.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Error" });
      } else {
        const myData = JSON.stringify([...JSON.parse(data), newData]);
        fs.writeFile("./fakedata/fakedata.json", myData, (error) => {
          if (error) {
            res.status(500).json({ message: "Internal Error" });
          } else {
            res.status(201).json({ message: "User Created" });
          }
        });
      }
    });
  }
};

module.exports = saveUser;
