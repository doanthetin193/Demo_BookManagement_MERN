import BookList from '../features/books/BookList';
import AddBookForm from '../features/books/AddBookForm';

const BooksPage = () => (
  <div style={{ padding: '20px' }}>
    <h2>Books</h2>
    <AddBookForm />
    <BookList />
  </div>
);

export default BooksPage;
