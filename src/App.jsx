import React from 'react'
import Login from './components/Login'
import Home from './components/Home'
import { Routes, Route } from "react-router-dom";
import ResetPassword from './components/ResetPassword';
import EnterYourCode from './components/EnterYourCode';
import SetPassword from './components/SetPassword'

const App = () => {
  return (
    <div className='w-full h-screen'>
       <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/resetpassword" element={<ResetPassword/>}/>
      <Route path="/enteryourcode" element={<EnterYourCode/>}/>
      <Route path="/setpassword" element={<SetPassword/>}/>
    </Routes>
    </div>
  )
}

export default App