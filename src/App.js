import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/places" element={<Places/>}></Route>
          <Route path="/places/new" element={<PlaceForm/>}></Route>
          <Route path="/places/:id" element={<Place/>}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
