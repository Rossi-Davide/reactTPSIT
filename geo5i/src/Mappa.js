import React, { Component } from 'react'

export default class Mappa extends Component {
  render() {

    const map = this.props.coordinate;
    const indirizzo = 'https://www.google.com/maps/@'+map.longitudine+','+map.latitudine+'z';
    return (
      <div className='container'></div>
    )
  }
}
