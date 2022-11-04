import React, { Component } from 'react'
import Navbar from './componenti/Navbar.js'
import Home from './Home.js'
import Mappa from './Mappa.js'
import {Route, Routes} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/mappa" element={<Mappa></Mappa>}/>
        </Routes>
      </div>
     
    )
  }
}
