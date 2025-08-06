const mongoose = require('mongoose');
require('dotenv').config();//gọi 1 lần để nó nạp vào biến process.env

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); // cái này nó trả về Promise nên dùng await
        console.log('MongoDB connected successfully');
    }
    catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); // 0 là thành công, 1 là thất bại
    }
};

module.exports = connectDB;
