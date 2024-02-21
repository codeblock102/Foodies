import {Input} from "@nextui-org/react";

import './App.scss'
import './style.css'

function App() {
 
  
  return (
    <main className='App flex h-screen'>
       <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input type="email" label="Email" />
      <Input type="email" label="Email" placeholder="Enter your email" />
    </div>
    </main>
     
  )
}

export default App
