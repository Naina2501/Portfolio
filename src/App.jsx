import { useState } from 'react'
import './App.css'
import Header from "./Components/Header/Header"
import {Outlet} from "react-router-dom";
import Footer from './Components/Footer/Footer';

function App() {


  return (
    <>
   <div className='min-h-screen flex flex-wrap content-between bg-gray-700' >
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet/>
        </main>
        <Footer/>
  
      </div>

    </div>
    </>
  )
}

export default App
