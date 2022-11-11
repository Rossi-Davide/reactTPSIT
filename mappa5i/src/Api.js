import React, { Component } from 'react'

export default class Api extends Component {

    Invia = (event)=>{
        event.preventDefault();

        console.log(event);

        const nazione = event.target.form.nomeNazione.value;

        console.log("Nazione:",nazione);

        const target ="http://universities.hipolabs.com/search?country="+nazione;

        console.log(target);
    }

  render() {
    return (
      <div className='Api'>
        <form>
            <div className="mb-3">
                <label id="nomeNazione" className="form-label">Inserire il nome di una nazione</label>
                <input type="text" className="form-control" id="nomeNazione" />
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.Invia}>Invia</button>
        </form>
        </div>
    )
  }
}
