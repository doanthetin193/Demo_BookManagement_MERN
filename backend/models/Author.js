const mongoose = require('mongoose'); // dùng để tạo schema và model

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}); //schema là cấu trúc của dữ liệu, định nghĩa các trường và kiểu dữ liệu của chúng nhưng không thể lưu trữ dữ liệu trực tiếp

const Author = mongoose.model('Author', authorSchema); // tạo model từ schema, model là đại diện cho một collection trong MongoDB, và có thể thực hiện các thao tác CRUD trên collection đó

module.exports = Author;// xuất model để sử dụng ở nơi khác trong ứng dụng
// ví dụ: trong controller, ta có thể sử dụng Author để truy vấn dữ liệu từ
// nó gồm các phương thức như find (lấy tất cả), findById (lấy theo id), create (tạo mới), update (cập nhật), delete (xóa), findOne (lấy một bản ghi theo điều kiện),....
// và các phương thức khác để tương tác với dữ liệu trong collection 'authors'