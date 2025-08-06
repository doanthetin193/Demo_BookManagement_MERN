const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');

router.get('/', bookController.getAllBooks);
router.post('/', bookController.createBook);
router.delete('/:id', bookController.deleteBook);// req.params.id là id của sách cần xóa, được lấy từ URL
// khi có yêu cầu DELETE đến đường dẫn này, hàm deleteBook trong bookController sẽ

module.exports = router;
