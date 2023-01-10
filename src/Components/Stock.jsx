import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {data} from '../Data/FoodData'

function Stock() {

useEffect(()=>{

    console.log("use effect triggered")
    getStockData();
},[])

const getStockData = async()=>{
    try{
        const response = await axios.get("https://prototype.sbulltech.com/api/v2/instruments")
        let arr = response.data
        let arr2 = arr.split(",")
        console.log(arr2[1])

    }
    catch(error)
    {
        console.log(error.data)
    }
}

    const [stocks, setStocks] = useState(data)
  return (
    <>
     <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6'>
           {stocks.map((item,index) => ( 
            <div className='border shadow-lg hover:scale-105 duration-300 rounded-lg' key={index}>
                <p className='px-2 py-2'>{item.name}</p>
                {/* <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name}/> */}
                <div className='flex justify-between px-2 py-4'>
                    <p className='font-bold'>
                        {item.name}
                    </p>
                    <p>
                        <span className='bg-orange-500 text-white rounded-xl p-1'>{item.price}</span>
                    </p>
                </div>
            </div>
            
           ))}
        </div>
    </>
  )
}

export default Stock