const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const con = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        process.exit();
    }
}

module.exports = con;
