import { useEffect, useState } from 'react';
import { getBooks, deleteBook } from './bookService';

const BookList = () => {
  const [books, setBooks] = useState([]);

  const load = () => getBooks().then(setBooks);

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id) => {
    await deleteBook(id);
    load();
  };

  return (
    <ul>
      {books.map((b) => (
        <li key={b._id}>
          {b.title} — {b.author?.name}{' '}
          <button onClick={() => handleDelete(b._id)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
