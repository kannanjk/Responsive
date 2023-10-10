import { } from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Auth/Register';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/auth' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
