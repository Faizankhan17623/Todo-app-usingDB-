const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_LINK, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log("Database connection successful");
        })
        .catch((err) => {
            console.error("Error connecting to database:", err);
        });
};

module.exports = dbConnect;