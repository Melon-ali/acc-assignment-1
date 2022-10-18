const fs = require("fs");

const bulkUpdate = (req, res) => {
  const error = req.error;
  const updateData = req.body;
  if (!error) {
        fs.readFile("./fakedata/fakedata.json", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: "internal error" });
        } else {
            let allUser = JSON.parse(data);
            for (const updateInfo of updateData) {
            const updateIndex = allUser?.findIndex(
                (user) => user.id == updateInfo.id
            );
            const updateDataIndex = updateData?.findIndex(
                (user) => user.id == updateInfo.id
            );
            if (updateIndex > -1) {
                allUser[updateIndex] = {
                ...allUser[updateIndex],
                ...updateData[updateDataIndex],
                };
                fs.writeFile(
                "./fakedata/fakedata.json",
                JSON.stringify(allUser),
                (error) => {
                    if (error) {
                    res.status(500).json({ message: "Internal Error" });
                    } else {
                    res.status(201).json({ message: "Users Updated" });
                    }
                }
                );
            } else {
                res.status(400).json({ error: "Provide info" });
            }
            console.log(allUser);
            }
        }
        if (error) {
            res.status(400).json({ error: "please provide info" });
        }
        });
    }
};

module.exports = bulkUpdate;
