import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Poster from './pages/poster';
import Bidder from './pages/bidder';
import './App.css';
import './index.css';
import BidNow from './pages/bidNow';
import BidderDetail from './pages/bidderDetail';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poster" element={<Poster />} />
        <Route path="/bidder" element={<Bidder />} />
        <Route path="/bidDetail" element={<BidderDetail />} />
        <Route path="/bid" element={<BidNow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
