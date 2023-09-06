
import { useState } from 'react'
import Card from '../Components/Card'
import Colorchange from '../Components/colorchange'

function App() {
  const [color, setcolor] = useState("")
  return (
    <>
  
{/* <Card name="Rohit"/>
<Card name="Adnan"/> */}
{/* <Colorchange/> */}
<div className='w-full h-screen ' 
style={{backgroundColor:color}}>

<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-cyan-200 px-3 py-2 rounded-3xl">
<button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}onClick={()=>setcolor("red")}>Red</button>
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}onClick={()=>setcolor("blue")}>Blue</button>
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}onClick={()=>setcolor("green")}>Green</button>
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "black"}}onClick={()=>setcolor("black")}>Black</button>
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "pink"}}onClick={()=>setcolor("pink")}>Pink</button>
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "yellow"}}onClick={()=>setcolor("yellow")}>Yellow</button>
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "purple"}}onClick={()=>setcolor("purple")}>Purple</button>
</div>
</div>
</div>
    </>
  )
}

export default App
