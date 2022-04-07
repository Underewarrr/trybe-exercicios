import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
  }


  handleClick2() {
    console.log(this)
  }
  handleClick() {
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */
    console.log(this)
    console.log('Clicou!')
  }

  render() {
    return ( 
      <>
    <button onClick={this.handleClick}>Meu botão</button>
    <button onClick={this.handleClick2}>Meu botão 2</button>
    </>
    )
  }
}

export default App;