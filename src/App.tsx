import React from 'react';
import './App.scss';
import { ToastContainer } from 'react-toastify';
import Navbar from './layouts/navbar/navbar';
import Footer from './layouts/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Home  from './pages/Home/Home';

import * as themes from './styles/theme'


export default function App() {
  /*        
            <Route path='/meet' element={} />
            <Route path='/signup' element={signup} />
            <Route path='/login' element={login} />
            <Route path='/tutors' element={} />
            <Route path='/user/:id' element={EmployerUpdate} />
            <Route path='/tutor/:id' element={EmployerUpdate} />
  */
  return (
    <div id = 'App' className = 'd-flex flex-column' >
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer
          position='bottom-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </div >
    
  )
}