import React,  { useState } from 'react'

const NumberCounter = () => {

  const MAX = 100;
  const MIN = 0;

  //varname function
  let [ num, setNum]=useState(10)
  const increaseOne = () =>{
    //num = num +1
    if (num +1 <= MAX) {
      setNum(num+1)
    }
  }
  const increaseTen = () => {
    if (num +10 <= MAX) {
      setNum(num+10)
    }
  }

  const decreaseOne = () =>{
    if (num -1 >= MIN) {
      setNum(num-1)
    }
  }
  const decreaseTen = () => {
    if (num -10 >= MIN) {
      setNum(num-10)
    }
  }
  return (
    <>
    <h1>Number Counter</h1>
    <div className="w-[1000px] text-center">
      <h1 className='text-3xl font-bold text-green-800 mb-8'>Counter App</h1>
      <div className=" w-[500px] border-2 border-green-800 rounded-md p-10 ml-70 ">
      <h2>{num}</h2>
      <div className="btn-group flex justify-center gap-4 ">
      <button onClick={increaseOne} className=" text-white text-3xl rounded bg-green-800 px-6 py-2">(+1)</button>
      <button onClick={increaseTen} className=" text-white text-3xl rounded bg-green-800 px-4 py-2">(+10)</button>
      
      <button onClick={decreaseOne} className=" text-white text-3xl rounded bg-green-800 px-4 py-2">(-1)</button>
      <button onClick={decreaseTen} className=" text-white text-3xl rounded  bg-green-800 px-4 py-2">(-10)</button>
      </div>
      <button onClick={() => setNum(0)} className='w-[400px] h-10  bg-red-500 text-black text-2xl rounded mt-6'>
          RESET
      </button>
      </div>
    </div>
    </>
  )
}


export default NumberCounter
