import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  // let counter =10;
  const addValue = () =>{
    // console.log("value added",Math.floor(Math.random()*93),counter); 
    // counter=counter+1;
    if(counter<10){
      setCounter(counter+1)
    }else{
      alert("counter value is 10 you can't increase the value")
    }
    // setCounter(counter+1)
  }

  const removeValue = () =>{
    if(counter>0){
      setCounter(counter-1)
    }else{
      alert("counter value is 0 you can't decrease the value")
    }
  }
  

  return (

    <>
      <h1>happy coding </h1>
      <h2>counter value is {counter}</h2>
      <button
      onClick={addValue}
      >addValue {counter}</button>
      <br/>
      <button
      onClick={removeValue}
      >removeValue {counter}</button>
      <p> foOter { counter} </p>
    </>
  )
}

export default App
