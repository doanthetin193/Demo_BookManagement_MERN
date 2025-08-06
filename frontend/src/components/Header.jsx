import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{ padding: '10px', background: '#eee' }}>
    <h2>📚 Book Management</h2>
    <nav>
      <Link to="/">Home</Link> | <Link to="/books">Books</Link> | <Link to="/authors">Authors</Link>
    </nav>
  </header>
);

export default Header;
