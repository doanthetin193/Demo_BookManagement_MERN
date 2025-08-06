import { useState } from 'react';
import { createAuthor } from './authorService';

const AddAuthorForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    await createAuthor({ name });
    setName('');
    window.location.reload(); // hoặc dùng state để update UI
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Author name"
      />
      <button type="submit">Add Author</button>
    </form>
  );
};

export default AddAuthorForm;
