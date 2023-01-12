import './App.css';
import Navbar from './Components/Navbar';
import Stock from './Components/Stock';
import React,{useState} from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate } from "react-router-dom"
import Quote from './Components/Quote';


function App() {
  const[searchTerm, setSearchTerm] = useState("");
  const[stockData, setStockData ] = useState();
  const[searchResults, setSearchResults] = useState();
  const[quoteData, setQuoteData] = useState([]);
  const[symbolstate, setSymbolstate] = useState("");
  const routeTo = useNavigate();

  const getStockData = async()=>{
    try{
        const response = await axios.get("https://prototype.sbulltech.com/api/v2/instruments")
        let arr = (response.data).split("\n")
        let arr3 = new Array();
        let newArr = new Array();
        let apiResponse = new Array();
        
        for(let i=0; i< arr.length; i++)
        {
            if(arr[i].split(",") != '')
            {
                arr3 = arr[i].split(",")
                newArr.push(arr3)
            }
           
            
        }
         for(let j=0; j <newArr.length; j++)
         {
           
             let obj = {
                 symbol : newArr[j][0],
                 company: newArr[j][1],
                 sector: newArr[j][2],
                
            }
          
            apiResponse.push(obj)
         }
         apiResponse.shift();
         //console.log(apiResponse)
         setStockData(apiResponse)
         setSearchResults(apiResponse)
    }
    catch(error)
    {
        console.log(error)
    }
}

const searchHandler = (event)=>{
//console.log(event.target.value)
setSearchTerm(event.target.value)

if(searchTerm == null)
{
  setSearchResults(stockData)
}

if(searchTerm !=="" )
{
  const newStockData = stockData.filter((item ) =>{
    return Object.values(item).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
    
    
  })
  setSearchResults(newStockData)
  //console.log(newStockData)
}
else
{
  setSearchResults(stockData)
}
}

const ShowQuotation = async(symbol)=>{
  
  try{
      const quoteResponse = await axios.get("https://prototype.sbulltech.com/api/v2/quotes/"+symbol)
      
      if(quoteResponse.data != "")
      {
        setQuoteData(quoteResponse.data.payload)
        setSymbolstate(symbol)
        routeTo("quote")
        
      }
  }
  catch(error)
  {
      console.log(error)
  }
 
  
}

  return (
    <>
    <Routes>
     <Route path="/" element={ <Stock searchTerm={searchTerm} searchResults={searchResults} stockData={stockData} getStockData={getStockData} searchHandler={searchHandler} ShowQuotation={ShowQuotation} /> } />
     <Route path="quote" element={ <Quote quoteData={quoteData} symbolstate={symbolstate}/> } />
    </Routes>
    </>
  );
}

export default App;
