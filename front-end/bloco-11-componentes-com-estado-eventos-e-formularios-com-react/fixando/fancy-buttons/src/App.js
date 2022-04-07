import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.state = {
      count : 0,
      count2: 0
    }
  }


  handleClick2() {
    console.log(this)
    this.setState((PreviousState2, _props) => ({  // O `_props` é um parâmetro opcional
      count2 : PreviousState2.count2 + 1
    }))

  }
  handleClick() {
    if (this.state.count %2 === 0) {
      console.log(this.state.count,'Verde Par')
    }
    else 
    {
      console.log(this.state.count,'Vermelho Impar')
    }
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */
    console.log(this)
    console.log('Clicou!')
    this.setState((PreviousState, _props) => ({  // O `_props` é um parâmetro opcional
      count : PreviousState.count + 1
    }))
  }

  render() {
    return ( 
      <>
    <button onClick={this.handleClick}>{this.state.count}</button>
    <button onClick={this.handleClick2}>{this.state.count2}</button>
    </>
    )
  }
}

export default App;