const fs = require("fs");

const randomUser = (req, res) => {
  fs.readFile("./fakedata/fakedata.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "internal error" });
    } else {
      const myData = JSON.parse(data);
      if (myData.length === 0) {
        res.status(200).json({ message: "no data found" });
      } else {
        const dataCount = myData.length;
        const randomUserIndex = Math.floor(Math.random() * dataCount);
        res.status(200).send(myData[randomUserIndex]);
      }
    }
  });
};

module.exports = randomUser;
