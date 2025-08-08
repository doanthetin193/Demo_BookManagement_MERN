import AuthorList from '../features/authors/AuthorList';
import AddAuthorForm from '../features/authors/AddAuthorForm';
import { useEffect,useState } from 'react';
import { getAuthors, createAuthor } from '../features/authors/authorService';
const AuthorsPage = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      const authorsList = await getAuthors();
      setAuthors(authorsList);
    };
    fetchAuthors();
  }, []);

  const handleAddAuthor = async (authorData) => {
    const newAuthor = await createAuthor(authorData);
    setAuthors((prevAuthors) => [...prevAuthors, newAuthor]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Authors</h2>
      <AddAuthorForm onAddAuthor={handleAddAuthor} />
      <AuthorList authors={authors} />
    </div>
  );
};

export default AuthorsPage;
