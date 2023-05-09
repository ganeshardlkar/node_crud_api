const mongoose = require('mongoose');
const { MONGODB_URL } = require('./serverConfig');

const connect = async() => {
    await mongoose.connect(MONGODB_URL);
    console.log('Connected to mongodb');
}

module.exports = connect;