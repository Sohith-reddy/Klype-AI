// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './components/LandingPage'
import { Route, Routes } from 'react-router-dom'
// import Form from './components/Form'
import KlypeForm from './components/KlypeForm'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/form' element={<KlypeForm/>}/>
    </Routes>

    </>
  )
}

export default App
