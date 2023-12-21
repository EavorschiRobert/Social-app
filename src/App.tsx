import React from 'react'
import './globals.css'
import SignupForm from './_auth/forms/SignupForm'
import SigninForm from './_auth/forms/SignupForm'

import { Route, Routes } from 'react-router-dom'
import { Home } from './_root/pages'
import AuthLayout from './_auth/forms/AuthLayout'
import RootLayout from './_root/RootLayout'
import { Toaster } from './components/ui/toaster'


const App = () => {
  return (
    <main>
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path="/sign-in" element={<SigninForm/>}/>
          <Route path="/sign-up" element={<SignupForm/>}/>
        </Route>
        {/*public routes*/}
        

        {/*private routes*/}
        <Route element={<RootLayout/>}>
          <Route index element={<Home />}/>
        </Route>
        
      </Routes>

      <Toaster />
    </main>
    
  )
}

export default App