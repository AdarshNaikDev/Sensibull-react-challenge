import React, { useState } from "react";
import Navbar from "./Navbar";

function Quote({ quoteData, symbolstate }) {
  const [quoteArray, setQuoteArray] = useState(quoteData[symbolstate]);
  //console.log(quoteArray)
  const [openDropdown, setOpenDropdown] = useState(false);
  let arrangeDate = new Array();

  const ascendingOrderHandler = () => {
    //console.log(quoteArray)
    if (quoteArray != "") {
      for (let i = 0; i < quoteArray.length; i++) {
        arrangeDate.push(quoteArray[i].time);
        arrangeDate.sort(function (a, b) {
          let dateA = new Date(a);
          let dateB = new Date(b);
          return dateA - dateB;
        });
      }
      let updatedArr = quoteArray.map((obj,index)=>{
        obj.time = arrangeDate[index];
        return obj
      })
      setQuoteArray(updatedArr)
    }
  };

  const decendingOrderHandler = () => {

    if (quoteArray != "") {
      for (let i = 0; i < quoteArray.length; i++) {
        arrangeDate.push(quoteArray[i].time);
        arrangeDate.sort(function (a, b) {
          let dateA = new Date(a);
          let dateB = new Date(b);
          return dateB - dateA;
        });
      }
      let updatedArr = quoteArray.map((obj,index)=>{
        obj.time = arrangeDate[index];
        return obj
      })
      setQuoteArray(updatedArr)
    }
  };


  

  return (
    <>
      <div className="max-w-[1640px] h-36 mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
            Sensi<span className="font-bold">bull</span>
          </h1>
        </div>
        <div>
          <h1 className="text-xl sm:text-3xl lg:text-4xl px-2">
            <span className="font-semibold text-orange-400">{symbolstate}</span>
          </h1>
        </div>
        <div>
          <button
            className="md:mr-28 bg-orange-600 font-bold text-white w-36 rounded-lg p-2"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            Sort Date By
          </button>
          {openDropdown ? (
            <div>
              <ul className="bg-orange-400 w-36 rounded-lg border-b-2 border-red-700">
                <li className="menu-item">
                  <button className="pl-3 " onClick={ascendingOrderHandler}>
                    Ascending Order
                  </button>
                </li>
              </ul>
              <ul className="bg-orange-400 w-36 rounded-lg border-b-2 border-red-800">
                <li className="menu-item">
                  <button className="pl-3" onClick={decendingOrderHandler}>Decending Order</button>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>

      <div className="grid grid-cols-1   px-4">
        {quoteArray &&
          quoteArray.map((item, index) => (
            <div
              className="border flex justify-around items-center shadow-sm mb-4 hover:scale-95 duration-300 rounded-lg cursor-pointer"
              key={index}
            >
              <p className="font-bold flex flex-col items-center">
                <span className="text-gray-400  font-semibold">Price</span>
                <span className="pl-2 text-sm">{item.price}</span>
              </p>

              <p className="font-bold flex flex-col items-center">
                <span className="text-gray-400 font-semibold "> Time</span>
                <span className="pl-2 text-sm">{item.time}</span>
              </p>
              <p className="font-bold py-4 pt-8 mb-[14px] flex flex-col items-center">
                <span className="text-gray-400 font-semibold">Valid Till</span>
                <span className="pl-2 text-sm">{item.valid_till}</span>
              </p>
            </div>
          ))}
      </div>
    </>
  );
}

export default Quote;
