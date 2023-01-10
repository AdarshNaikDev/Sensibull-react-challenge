import './App.css';
import Navbar from './Components/Navbar';
import Stock from './Components/Stock';
import React,{useState} from 'react';

function App() {
  const[searchTerm, setSearchTerm] = useState();
  return (
    <>
   <Navbar/>
   <Stock/>
    </>
  );
}

export default App;
