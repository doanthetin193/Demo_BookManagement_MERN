import { useEffect, useState } from 'react';
import { getAuthors } from './authorService';

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then(setAuthors);
  }, []);

  return (
    <ul>
      {authors.map((a) => (
        <li key={a._id}>{a.name}</li>
      ))}
    </ul>
  );
};

export default AuthorList;
