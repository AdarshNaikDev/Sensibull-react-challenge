import React, {useState} from 'react'
import { AiOutlineSearch} from 'react-icons/ai'



function Navbar({searchTerm, searchHandler}) {

    // const getSearchTerm = (event)=>{
    //     console.log(event.target.value)
    // }
  
  return (
    <>
    <div className='max-w-[1640px] mx-auto flex  items-center p-4'>
      {/* left side start */}
      <div className='flex items-center'>
       
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Sensi<span className='font-bold'>bull</span>
        </h1>
        
        {/* left side end */}
        
      </div>

      {/* search bar starts */}
      <div className='bg-gray-200 md:ml-16 mt-2 rounded-full flex py-2 px-2 w-[300px] sm:w-[600px] lg:w-[500px]'>
        <AiOutlineSearch size={25} className='mt-2'/>
        <input type="text" className='bg-transparent p-2 focus:outline-none w-full' placeholder='Search for Stocks' 
        onChange={searchHandler}/>
      </div> 
     
    </div>
  </>
    
  )
}

export default Navbar