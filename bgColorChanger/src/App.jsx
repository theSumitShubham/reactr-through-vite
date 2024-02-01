import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className=" flex justify-center fixed flex-wrap bottom-7 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-200 rounded-2xl px-2 py-2">
          <button onClick={()=>setColor("red")}
          className="text-xl py-2 px-3 outline-none rounded-xl text-white"
          style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("green")}
          className="text-xl py-2 px-3 outline-none rounded-xl text-white"
          style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setColor("blue")}
          className="text-xl py-2 px-3 outline-none rounded-xl text-white"
          style={{backgroundColor:"blue"}}>Blue</button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
