import { useState } from 'react'
// ...existing code...
function App() {
  
  const [color,setColor]=useState()
  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}>
      </div>   
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-4 shadow-lg bg-white px-2 py-3 rounded-3xl'>
          <button
            onClick={() => setColor("red")}
            className='outline-none px-4 py-2 rounded-full shadow-ld text-white' style={{ backgroundColor: "red" }}>
            Red</button>
             <button
            onClick={() => setColor("green")}
            className='outline-none px-4 py-2 rounded-full shadow-ld text-white' style={{ backgroundColor: "green" }}>
            Green</button>
             <button
            onClick={() => setColor("blue")}
            className='outline-none px-4 py-2 rounded-full shadow-ld text-white' style={{ backgroundColor: "blue" }}>
            Blue</button>
           <button
            onClick={() => setColor("olive")}
            className='outline-none px-4 py-2 rounded-full shadow-ld text-white' style={{ backgroundColor: "olive" }}>
            Olive</button>
          <button
            onClick={() => setColor("gray")}
            className='outline-none px-4 py-2 rounded-full shadow-ld text-white' style={{ backgroundColor: "gray" }}>
            Gary</button>
          <button
            onClick={() => setColor("yellow")}
            className='outline-none px-4 py-2 rounded-full shadow-ld  text-black' style={{ backgroundColor: "yellow" }}>
            Yellow</button>
         
             <button
            onClick={() => setColor("pink")}
            className='outline-none px-4 py-2 rounded-full shadow-ld  text-black' style={{ backgroundColor: "pink" }}>
            Pink</button>
           <button
            onClick={() => setColor("purple")}
            className='outline-none px-4 py-2 rounded-full shadow-ld  text-black' style={{ backgroundColor: "purple" }}>
            Purple</button>
          <button
            onClick={() => setColor("lavender")}
            className='outline-none px-4 py-2 rounded-full shadow-ld  text-black' style={{ backgroundColor: "lavender" }}>
            Lavender</button>
          <button
            onClick={() => setColor("White")}
            className='outline-none px-4 py-2 rounded-full shadow-lg text-black' style={{ backgroundColor: "White" }}>
            white</button>
          <button
            onClick={() => setColor("black")}
            className='outline-none px-4 py-2 rounded-full shadow-ld text-white' style={{ backgroundColor: "black" }}>
            Balck</button>
         
        </div>
      </div>
    </>
  )
}

export default App
