import React, { Component } from 'react'

export default class Attivita extends Component {
  render() {


    const lista = this.props.elenco;

    return (
      <div className='mt-5'>
        <table className='table table-striped' border="1">
            <thead>
                <tr>
                    <td>Data appuntamento</td>
                    <td>Dettaglio appuntamento</td>
                </tr>
            </thead>
            <tbody>
                {
                    lista.map((appuntamento,i)=>(
                        <tr>
                            <td>{appuntamento.data}</td>
                            <td>{appuntamento.descrizione}</td>
                        </tr>    

                    ))

                    
                }
                
            </tbody>        
        </table>
      </div>
    )
  }
}
