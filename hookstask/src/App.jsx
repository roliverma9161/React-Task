import React,{ useState } from 'react'

const App = () => {

const [bgColor, setBgColor] = useState("white")

  return (
    <>
      <div className='w-[1000px] text-center'>
        <h1 className='text-3xl font-bold text-green-800 mb-8'>Color Changer</h1>
        <div className='w-[500px] border-2 border-green-800 rounded-md p-10 ml-70' style={{ backgroundColor: bgColor }}> 
        <div className='btn-group flex gap-4 justify-center'>
          <button  onClick={() => setBgColor("red")} className='text-white text-3xl bg-red-700 px-6 py-2 rounded'>Red</button>
          <button  onClick={() => setBgColor("blue")} className='text-white text-3xl bg-blue-800 px-6 py-2 rounded'>Blue</button>
          <button  onClick={() => setBgColor("green")} className='text-white text-3xl bg-green-700 px-6 py-2 rounded'>Green</button>
        </div>
        <button  onClick={() =>setBgColor("white")} className='w-[350px] h-10  bg-red-500 text-black text-2xl rounded mt-6'>RESET</button>
        </div>
      </div>
    </>
  )
}

export default App
