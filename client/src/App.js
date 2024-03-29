import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Hotel from './pages/hotel/hotel';
import List from './pages/list/list';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
