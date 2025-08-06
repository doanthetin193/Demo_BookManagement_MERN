const express = require('express'); // dùng express để có thể tạo server, express là một framework cho Node.js giúp xây dựng ứng dụng web và API một cách dễ dàng
const cors = require('cors');// dùng cors để cho phép các yêu cầu từ các nguồn khác nhau, cors là một middleware giúp xử lý vấn đề bảo mật khi ứng dụng web gửi yêu cầu đến một nguồn khác (cross-origin requests)
const mongoose = require('mongoose'); // dùng mongoose để kết nối và tương tác với MongoDB  
const connectDB = require('./config/db'); // import hàm connectDB để kết nối đến MongoDB, hàm này sẽ được định nghĩa trong file config/db.js
require('dotenv').config(); // gọi 1 lần để nó nạp vào biến process.env, biến này sẽ chứa các biến môi trường được định nghĩa trong file .env

const app = express();// tạo một ứng dụng express mới, ứng dụng này sẽ là nơi xử lý các yêu cầu từ client và trả về phản hồi

app.use(cors()); // sử dụng middleware cors để cho phép các yêu cầu từ các nguồn khác nhau, middleware này sẽ được áp dụng cho tất cả các yêu cầu đến ứng dụng
app.use(express.json()); // sử dụng middleware express.json() để phân tích dữ liệu JSON trong yêu cầu, middleware này sẽ giúp ứng dụng có thể đọc dữ liệu JSON từ req.body, thường được sử dụng trong các yêu cầu POST hoặc PUT

// Connect to MongoDB
connectDB();

// Import routes
const authorRoutes = require('./routes/author.routes');
const bookRoutes = require('./routes/book.routes');

// Use routes
app.use('/api/authors', authorRoutes);
app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
