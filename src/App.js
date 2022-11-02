
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
      </Routes>
    </div>
  );
}

export default App;
