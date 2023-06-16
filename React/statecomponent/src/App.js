import React,{ Component } from 'react'
//import Login from './ClassState';
import Register from './FunctionState';


class App extends Component{        
    
  state={                   //this is just a state
    name: "Harika",
    id: "12k91a1243"
  }

  render() {
    return(
      <div>
        <h1>Hi!</h1>
        <h2>{this.state.name}</h2>
        
        <Register></Register>
      </div>
    )
  }
  
}
export default App;
