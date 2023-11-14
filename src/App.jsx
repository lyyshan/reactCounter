import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  function Plus(){
     setCount(count + 1);
     
  }
  function Minus(){
    setCount(count - 1);
  }
  function Reset(){
    setCount(0)
  }
  return (
    <>
    <h1>Counter: {count}</h1>
     <button onClick={Plus}>+</button>
     <button onClick={Minus}>-</button>
     <button onClick={Reset}>Reset</button>
    </>
  )
}

export default App
