import { useState } from 'react'

import './App.css'
import Signupform from './components/Signupform'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className=''>
   <Signupform />
   </div>
  )
}

export default App
