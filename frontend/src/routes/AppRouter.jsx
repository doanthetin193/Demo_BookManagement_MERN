import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import BooksPage from '../pages/BooksPage';
import AuthorsPage from '../pages/AuthorsPage';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/books" element={<BooksPage />} />
    <Route path="/authors" element={<AuthorsPage />} />
  </Routes>
);

export default AppRouter;
