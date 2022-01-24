// ways to create components

// functions to create components
/* function Greeting(props) {
    return (<h1>Hello, {props.name}</h1>);
  }

  export default Greeting;
 */
  // class to create components
/*   import React from 'react';

  class Greeting extends React.Component {
    render() {
      return (<h1>Hello, {this.props.name}</h1>);
    }
  }

  export default Greeting; */

  // Apesar de ambos os métodos serem equivalentes , tanto a função quanto a classe possuem recursos adicionais

// Vamos reforçar cada um deles com este componente de exemplo! 

  import React from 'react';

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Greeting;