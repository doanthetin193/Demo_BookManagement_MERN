import { useEffect, useState } from 'react';
import { createBook } from './bookService';
import { getAuthors } from '../authors/authorService';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then(setAuthors);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !authorId) return;
    await createBook({ title, author: authorId });
    setTitle('');
    setAuthorId('');
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Book title"
      />
      <select value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
        <option value="">Select Author</option>
        {authors.map((a) => (
          <option key={a._id} value={a._id}>
            {a.name}
          </option>
        ))}
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
