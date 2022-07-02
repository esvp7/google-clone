import './App.css';
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import ImagesPage from "./components/ImagesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
  <Router>
    <div className="App">
    <Routes>
      <Route path="/images" element={<ImagesPage />}/>
      <Route path="/search" element={<SearchPage />}/>
      <Route path="/" element={<Home />}/>
    </Routes>
    </div>
  </Router>
  );
}

export default App;
