import React, { Component } from 'react'
import Attivita from './Attivita';

class Modulo extends Component {

Appuntamenti = []

constructor(props){

        super(props);


        this.state = {
            Appuntamenti: this.Appuntamenti,
        }

        this.Aggiorna = this.Aggiorna.bind(this);
}

Aggiorna = (event)=>{
    event.preventDefault();

    //event.target mi fornisce l'elemento che ha chiamato la funzione Aggiorna, in questo caso il button della form
    //posso poi navigare fino al tag con nome data e descrizione e con value prendere il valore corrente
    const appuntamento = {data:event.target.form.data.value,descrizione:event.target.form.descrizione.value}
    this.Appuntamenti.push(appuntamento);

    this.setState({Appuntamenti:this.Appuntamenti});

    console.log(event.target);
}

  render() {
    return (
        <div className='mt-3'>
             <form>
                <label className='form-label'>Inserire la data dell'appuntamento</label>   
                <input type="date" className='form-control' name="data" id="data"/>
                <label className='form-label mt-3'>Inserire la descrizione dell'appuntamento</label>   
                <input type="text" className='form-control' name="descrizione" id="descrizione"/>
                <button type="submit" className='btn btn-primary mt-3' onClick={this.Aggiorna}>Aggiungi appuntamento</button>
           
              </form>
              <Attivita elenco={this.state.Appuntamenti}></Attivita>
        </div>
     
    )
  }
}

export default Modulo;