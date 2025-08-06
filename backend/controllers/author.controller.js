const Author = require('../models/Author');  // import model này để sử dụng trong controller, ta có thể sử dụng các phương thức của model này để tương tác với dữ liệu trong collection 'authors'

const getAllAuthors = async (req, res) => { // hàm này lấy ra nên req không có, chỉ có res để trả về kết quả
    try {
        const authors = await Author.find();// nó trả về một Promise nên dùng await
        res.status(200).json(authors);// trả về trạng thái và ta chuyển từ JSON sang object javascript để gửi về client
    } catch (error) {
        console.error('Error fetching authors:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const createAuthor = async (req, res) => { // hàm này dùng để tạo mới nên req có body chứa dữ liệu cần tạo, res để trả về kết quả, dữ liệu trong req.body được lấy từ client qua form hoặc http request ở postman
    try {
        const newAuthor = await Author.create(req.body); // req.body lúc này là obj js ( lúc đầu nó gửi từ form hay postman ở dạng json, nhờ express.json() nên nó sẽ tự động chuyển sang object javascript, sau đó ta dùng phương thức create của model Author để tạo mới)
        res.status(201).json(newAuthor);
    }
    catch(error) {
        console.error('Error creating author:', error);
        res.status(400).json({ message: 'Bad request' });
    }
};

module.exports = {
    getAllAuthors,
    createAuthor
};
