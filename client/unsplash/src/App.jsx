import { useState } from 'react'
import './App.css'
import DisplayImages from './components/DisplayImages'
import Header from './components/Header'

function App() {

  return (
    <div className="App">
     <Header/>
     <DisplayImages/>
    </div>
  )
}

export default App
