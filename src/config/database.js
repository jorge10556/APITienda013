const mongoose = require('mongoose');
require('dotenv').config();

const URI = `mongodb+srv://${process.env.USERDB}:${process.env.PASSDB}@adso2903013.6r2k9.mongodb.net/${process.env.BD}`

mongoose.connect(URI)

module.exports = mongoose;