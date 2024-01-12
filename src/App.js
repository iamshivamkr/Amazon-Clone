import "./App.css";
import CheckOut from "./components/CheckOut";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        {/* Put the header outsite bcz we dont want to repeat it as route uses */}
        <Routes>
          <Route path="/login" element={"LOgIn"}></Route>
          <Route path="/checkout" element={<CheckOut />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
