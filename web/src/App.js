import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Home/Navbar";
import Home from "./Home/Home";
import Tg from "./TG/Tg";
import Table from "./Dealer/Table";
import Udata from "./User/Udata";

//function App() {
//  return (
//    <Router>
//      <Navbar />
//      {/* <Home/> */}
//      <Routes>
//        <Route path="/" element={<Home />} />
//        <Route path="/tollplaza" element={<Tg />} />
//        <Route path="/User-data" element={<Udata />} />
//        <Route path="/getdb" element={<Table />} />
//        <Route path="/Udata" element={<Udata />} />
//      </Routes>
//    </Router>
//  );
//}

//export default App;



// App.jsx

//import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Navbar from './Navbar';
//import Home from './Home/Home';
//import Tg from './TG/Tg';
//import Table from './Dealer/Table';
//import Udata from './User/Udata';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tollplaza" element={<Tg />} />
        <Route path="/User-data" element={<Udata />} />
        <Route path="/getdb" element={<Table />} />
        <Route path="/Udata" element={<Udata />} />
      </Routes>
    </Router>
  );
}

export default App;

