import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <> 
    <div className='w-full h-screen duration-200'
    style={{background:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white text-black px-3 py-2 rounded-3xl'>  
        <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black'onClick={() => setColor('red')}style={{backgroundColor:'red'}} >Red</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' onClick={()=>setColor('green')}style={{backgroundColor:'green'}}>green</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' onClick={()=>setColor('blue')}style={{backgroundColor:'blue'}}>blue</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' onClick={()=>setColor('yellow')}style={{backgroundColor:'yellow'}}>yellow</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' onClick={()=>setColor('pink')}style={{backgroundColor:'pink'}}>pink</button>
        </div>
       
      </div>

    </div>
    </>
  )
}

export default App
