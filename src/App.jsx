import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Tools from './components/Tools';
import ContactMe from './components/ContactMe';

const App = () =>  {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Update the count (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route element={<Home/>} path='/' exact />
        <Route element={<Tools/>} path='/tools' />
        {/* <Route element={<SinglePost/>} path='/post/:slug' /> */}
        <Route element={<ContactMe/>} path='/contact' />
        <Route element={<Projects/>} path='/projects' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;