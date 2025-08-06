import AuthorList from '../features/authors/AuthorList';
import AddAuthorForm from '../features/authors/AddAuthorForm';

const AuthorsPage = () => (
  <div style={{ padding: '20px' }}>
    <h2>Authors</h2>
    <AddAuthorForm />
    <AuthorList />
  </div>
);

export default AuthorsPage;
