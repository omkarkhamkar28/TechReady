const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const con = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://omkarkhamkar2004:DmYLdgWN1EuFVZkf@cluster0.aaljinb.mongodb.net/TechReady")
        console.log(`connected To Mongodb database ${conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        console.log("Database connecting error.")
        process.exit();
    }
}

module.exports = con;
