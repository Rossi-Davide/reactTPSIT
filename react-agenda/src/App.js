import React, { Component } from 'react'
import Modulo from './Componenti/Modulo';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h2 className='h2'>Gestione appuntamenti</h2>
        <Modulo></Modulo>
      </div>
    )
  }
}


export default App;
