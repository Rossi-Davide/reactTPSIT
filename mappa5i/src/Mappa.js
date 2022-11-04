import React, { Component } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

export default class Mappa extends Component {
  render() {
    const base = [44.1324,12.2680]
    return (
      <div className='mappa'>
        <MapContainer center={base} zoom={15} scrollWheelZoom={true} style={{width:'100vw',height:'100vh'}}>
            <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap contributors</a>'/>
        </MapContainer>
      </div>
    )
  }
}
