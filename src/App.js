import React from 'react'
import Countries from './Components/Countries'
import './App.css'
import Header from './Components/Header'
import Filter from './Components/Filter'


const App = () => {



  return (
    <div className="app">
      <Header/>      
     <Countries/>
    </div>
  )
}

export default App
