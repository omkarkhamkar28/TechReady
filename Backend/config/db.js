const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const con = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected To Mongodb database ${conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        console.log("Database connecting error.")
        process.exit();
    }
}

module.exports = con;
