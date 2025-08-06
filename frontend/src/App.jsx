import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
