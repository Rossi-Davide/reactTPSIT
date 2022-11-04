import React, { Component } from 'react'
import sfondo from './immagini/sfondo.jpg'


class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='container mt-3'>
            <img className='mt-5' style={{width:"50%"}} src={sfondo} alt="Immagine di sfondo"></img>
        </div>
      </div>
    )
  }
}

export default Home;
