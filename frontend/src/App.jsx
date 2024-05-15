import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Notifications from './components/Notifications'
import ChatButton from './components/ChatButton'

function App() {

  return (
    <div className='w-screen mt-32'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/notifications' element={<Notifications/>}/> */}
        </Routes>
        <div className='fixed bottom-10 right-10'><ChatButton/></div>
      </BrowserRouter>
    </div>
  )
}

export default App
