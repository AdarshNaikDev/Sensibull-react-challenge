import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {data} from '../Data/FoodData'

function Stock() {

    const[stockData, setStockData ] = useState()
    

useEffect(()=>{

    console.log("use effect triggered")
    getStockData();
},[])

const getStockData = async()=>{
    try{
        const response = await axios.get("https://prototype.sbulltech.com/api/v2/instruments")
        let arr = (response.data).split("\n")
        let arr3 = new Array();
        let newArr = new Array();
        let apiResponse = new Array();
        //console.log(arr2[3])
        console.log("arr", arr)
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
         console.log(apiResponse)
         setStockData(apiResponse)

       
    }
    catch(error)
    {
        console.log(error.data)
    }
}

    
  return (
    <>
     <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 px-4'>
           {stockData && stockData.map((item,index) => ( 
            <div className='border shadow-lg hover:scale-105 duration-300 rounded-lg' key={index}>
                <p className='px-4 py-2'>{item.symbol }</p>
                {/* <p className='px-4 py-2 text-gray-400 font-semibold'>COMPANY :</p> */}
                <div className='flex-col px-4 py-2'>
                    <p className='font-bold'>
                        <span className='text-gray-400 font-semibold'> Company:</span>
                        <span className='pl-2 text-sm'>{item.company}</span>
                    </p>
                    <p className='py-4 pt-8'>
                        <span className='bg-orange-500 w-[50px] text-white rounded-xl p-2'>Sector: {item.sector!=""? item.sector: "Data not found"}</span>
                    </p>
                </div>
            </div>
            
           ))}
        </div>
    </>
  )
}

export default Stock