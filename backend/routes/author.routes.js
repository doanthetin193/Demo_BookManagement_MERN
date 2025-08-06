const express = require('express'); // trong file này dùng express để tạo router, router là một phần của express dùng để định nghĩa các route cho ứng dụng
const router = express.Router(); // tạo một router mới, router này sẽ chứa các route liên quan đến author
const authorController = require('../controllers/author.controller'); // import controller để xử lý các yêu cầu liên quan đến author, controller này sẽ chứa các hàm xử lý logic cho các route liên quan đến author

router.get('/', authorController.getAllAuthors); // định nghĩa route GET để lấy tất cả tác giả, khi có yêu cầu GET đến đường dẫn này, hàm getAllAuthors trong authorController sẽ được gọi
// hàm này sẽ truy vấn dữ liệu từ database và trả về danh sách tác giả
router.post('/', authorController.createAuthor); // định nghĩa route POST để tạo mới một tác giả, khi có yêu cầu POST đến đường dẫn này, hàm createAuthor trong authorController sẽ được gọi
// hàm này sẽ nhận dữ liệu từ client (thông qua req.body), tạo mới một tác giả trong database và trả về thông tin của tác giả vừa tạo
// req.body chứa dữ liệu được gửi từ client, thường là một đối tượng JSON chứa thông
module.exports = router;// xuất router để sử dụng trong ứng dụng, router này sẽ được import vào file server.js hoặc app.js để sử dụng
// khi ứng dụng khởi động, router này sẽ được đăng ký với một đường dẫn cụ
