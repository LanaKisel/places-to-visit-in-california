import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Places from "./Places"
import Navigation from './Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/places" element={<Places />}></Route>
          {/* <Route path="/places/new" element={<PlaceForm/>}></Route>
          <Route path="/places/:id" element={<Place/>}></Route> */}
        </Routes>
      </div>
    </Router>

  );
}

export default App;
