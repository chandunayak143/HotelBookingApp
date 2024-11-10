import Home from './Components/Home/Home'
import './App.css';
import BookRoom from './Components/BookRoom/BookRoom';
import OrderComplete  from './Components/OrderComplete/OrderComplete'

import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/book" element={<BookRoom />} />
       <Route path="/order" element={<OrderComplete />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
