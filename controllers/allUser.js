const fs = require("fs");
const allUser = (req, res) => {
    const query = req.query;
    fs.readFile("./fakedata/fakedata.json", "utf-8",(err, data) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: "Internal Error" });
        } else {
            const myData = JSON.parse(data);
            let page, limit;
            if (query.page && query.limit) {
                page = query.page;
                limit = query.limit;
            } else {
                page = 1;
                limit = myData.length;
            }
            const allUser = myData.slice((page - 1) * limit, limit * page);
            if (allUser.length !== 0) {
                res.status(200).send(allUser);
            } else {
                res.status(200).json({ message: "No Data Found" });
            }
        }
    })
};

module.exports = allUser;