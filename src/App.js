import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/checkout" element={<h1>This is the checkout!</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
