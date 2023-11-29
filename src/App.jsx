import { useState,createContext } from 'react'
import PersonFromContext from './components/PersonFromContext/PersonFromContext'
import './App.css'
export const namesContext = createContext();
function App() {

  return (
    <>
    <h1>App</h1>
      <namesContext.Provider value={['Yakov', 'David', 'Avi', 'Dani', 'Eli']} >  
      <PersonFromContext />   
      </namesContext.Provider>
    </>
  )
}

export default App
