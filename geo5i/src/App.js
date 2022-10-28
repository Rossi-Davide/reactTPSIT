import React, { Component } from 'react'
import Mappa from './Mappa';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      longitudine: null,
      latitudine: null,
      messaggioErrore: ''
    }
  }
  render() {

    window.navigator.geolocation.getCurrentPosition((pos)=>{

      //console.log(pos);

      this.setState({
        longitudine: pos.coords.longitude,
        latitudine: pos.coords.latitude,
      });
    },
    (err)=>{

      this.setState({
        messaggioErrore:err.message
      });
    }
    );

    if(this.state.messaggioErrore===''){

      const indirizzo = 'https://www.google.com/maps/@'+this.state.longitudine+','+this.state.latitudine+'z';
      return (
        <div className='container'>
          <h1 className='mt-3 text-center'>Coordinate relative alla posizione locale</h1>
          <p>Longitudine: {this.state.longitudine}</p>
          <p>Latitudine:{this.state.latitudine}</p>
          <a className='btn btn-primary' href={indirizzo}>Mostra località</a>
          <Mappa coordinate={this.state}></Mappa>
        </div>
      )
    }else{
      return (
        <div>
          <h1>Errore nella visualizzazione... </h1>
          <p>Messaggio di errore: {this.state.messaggioErrore}</p>
        </div>
      )
    }
    
  }
}

