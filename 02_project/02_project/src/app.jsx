import { useState } from 'preact/hooks'


export function App() {
  const[counter , setCounter] = useState(10)
  // let counter = 10;
  const addValue = () =>{
    setCounter(counter+1)
  }
  const removeValue = ()=>{
    if(counter<=0)
      return;
    setCounter(counter-1)
  }


  return (
    <>
     <h1>React project  Counter{counter}</h1>
     <h2>Counter Value :{counter}</h2>
     <button onClick={addValue}
     >Add Value {counter}</button>
    <button onClick={removeValue}
    >Remove value {counter}</button>
    <p>footer : </p>
    </>
  )
}
