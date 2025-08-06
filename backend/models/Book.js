const mongoose = require('mongoose'); // dùng để tạo schema và model

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,//Trong trường hợp này, author sẽ lưu _id của một document trong collection authors ;Nghĩa là trong books, mỗi book có một trường author, và giá trị của author là _id của một author (ví dụ: 650fd91a3402ee7b12345678)
        ref: 'Author',
        required: true
    }
}); //schema là cấu trúc của dữ liệu, định nghĩa các trường và kiểu dữ liệu của chúng nhưng không thể thực hiện lưu trữ dữ liệu trực tiếp

const Book = mongoose.model('Book', bookSchema);// tạo model từ schema, model là đại diện cho một collection trong MongoDB, và có thể thực hiện các thao tác CRUD trên collection đó

module.exports = Book; // xuất model để sử dụng ở nơi khác trong ứng dụng
// ví dụ: trong controller, ta có thể sử dụng Book để truy vấn dữ liệu từ
// nó gồm các phương thức như find (lấy tất cả), findById (lấy theo id), create (tạo mới), update (cập nhật), delete (xóa), findOne (lấy một bản ghi theo điều kiện),....
// và các phương thức khác để tương tác với dữ liệu trong collection 'books'
