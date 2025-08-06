const Book = require('../models/Book');

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().populate('author', 'name'); // ở đây ta lấy tất cả sách và sử dụng populate để lấy thông tin tác giả từ ObjectId
        // 'author' là trường trong schema Book, 'name' là trường trong schema Author
        res.status(200).json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const createBook = async (req, res) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        console.error('Error creating book:', error);
        res.status(400).json({ message: 'Bad request' });
    }
};

const deleteBook = async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id); // req.params.id là id của sách cần xóa, được lấy từ URL
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getAllBooks,
    createBook,
    deleteBook
};
