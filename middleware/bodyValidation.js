const fs = require("fs");

const bodyValidation = (req, res, next) => {
    const userData = req.body;

    if (userData.length === 0 || !userData) {
        req.error = "error";
        console.log("error");
        res.status(400).json({ error: "Provide User Information"});
        next();
    }

    userData?.map((user) => {
        if(!user.id) {
            req.error = "error";
            res.status(400).json({error: "Provide User Id"});
            next();
        }
        if (
            !user.name &&
            !user.gender &&
            !user.contact &&
            !user.address &&
            !user.photoUrl 
        ) {
            req.error = "error";
            res.status(400).json({error: "Provide User Information"});
            next();
        }
    });

    if (!req.error) {
        next();
    }
}

module.exports = bodyValidation;