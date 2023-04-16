import { Route, Routes } from 'react-router-dom';
import React, { useState } from "react";
import './App.css';
import BecomeSeller from './routes/BecomeSeller';
import Home from './routes/Home';
import RequestSketch from './routes/RequestSketch';
import Categories from './routes/Categories';
import Navbar from "./components/Navbar";
import Login from './components/LogIn';
import Register from './components/Register';

function App() {
  
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //     setCurrentForm(formName);
  // }
  return (
    <div className="App">
     
      <Navbar></Navbar>
      {/* {
                currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      } */}
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Become Seller' element={<BecomeSeller/>}/>
        <Route path='/Request a sketch' element={<RequestSketch/>}/>
        <Route path='/Categories' element={<Categories/>}/>
        {/* <Route path='/Login' element={<Login/>}/>  */}
        <Route path='/Register' element={<Register/>}/>
      </Routes>

    </div>
  );
}

export default App;
