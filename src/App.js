import React from 'react'
import Student from './Student';
import CreateData from './CreateData';
import Update from './Update';
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path='/' element={<Student />}></Route>
        <Route path='/create' element={<CreateData/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
      </Routes>
      
    </div>
    </Router>
  )
}

export default App

