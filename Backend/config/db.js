const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const con = async () => {
    try {
        let url = `mongodb://${process.env.DB_HOST}:${process.env.MONGOPORT}/${process.env.DB_NAME}`;

        await mongoose.connect(url, {
            useNewUrlParser : true,
        });
        console.log(`connect to mongoDB database : ${process.env.DB_NAME} `);
    } catch (error) {
        console.error(error.message);
        process.exit();
    }
}

module.exports = con;