import React, { Component } from 'react';
import { render } from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// const Counter = () => {
// 		return (

// 		)
// }

const Counter = ({ title, count, increment }) => (
      <div>
       <h1>{title}</h1>
        <p>You are visitor number {count}
        </p>
        <button onClick={increment}>Increment</button>
      </div>
   	)

class App extends Component {
	state = {
      count: 0
  	}
  
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }
  render () {
    return (
      <div>
        <Counter title="Number of stuff" count={this.state.count} increment={this.increment} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
