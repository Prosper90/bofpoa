import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Header from './components/header/Header';

function App() {
  return (
    <div className="">
     
      <div className="containerapp">
         
          <Header />

          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>

      </div>


    </div>
  );
}

export default App;
