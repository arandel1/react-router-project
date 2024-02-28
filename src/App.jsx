import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/Home';
import Orange from './components/Orange';

function App() {

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to = '/'>Home</Link>
          <Link to = '/'>Red</Link>
          <Link to = '/'>Orange</Link>
          <Link to = '/'>Blue</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path = '/blue' element = {<Blue/>} />
            <Route path = '/red' element = {<Red/>} />
            <Route path = '/orange' element = {<Orange/>} />
            <Route path = '/home' element = {<Home/>} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
