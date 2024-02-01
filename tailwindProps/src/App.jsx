import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl'>tailwind test</h1>
      <Card/>
    </>
  )
}

export default App
