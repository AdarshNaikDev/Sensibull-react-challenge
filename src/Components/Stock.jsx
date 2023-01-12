import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {data} from '../Data/FoodData'
import Navbar from './Navbar'

function Stock({searchResults,stockData,getStockData,searchHandler,searchTerm,ShowQuotation}) {
    

useEffect(()=>{
    //console.log("search activated")
    getStockData();
},[])



    
  return (
    <>
        <Navbar searchTerm={searchTerm} searchHandler={searchHandler}/>
     <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 px-4' >
           {searchResults && searchResults.map((item,index) => ( 
           
            <div className='border shadow-lg hover:scale-105 duration-300 rounded-lg cursor-pointer' key={index}
            onClick={() => ShowQuotation(item.symbol)}>
                
                <p className='px-4 py-2'>{item.symbol }</p>
            
                <div className='flex-col px-4 py-2'>
                    <p className='font-bold'>
                        <span className='text-gray-400 font-semibold'> Company:</span>
                        <span className='pl-2 text-sm'>{item.company}</span>
                    </p>
                    <p className='py-4 pt-8'>
                        <span className='bg-orange-500 w-[50px] text-white rounded-xl p-2 text-xs'>Sector: {item.sector!=""? item.sector: "Data not found"}</span>
                    </p>
                </div>
                
            </div>
         
           ))}
        </div>
    </>
  )
}

export default Stock