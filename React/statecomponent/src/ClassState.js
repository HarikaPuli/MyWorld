import React from 'react'; 
class Login extends React.Component{
    constructor() {

        super();
        this.state={
            username: '',
            password: ''
        }
    }
    UpdateUsername= (event)=>
    {
        var value= event.target.value;
        console.log("value");
        this.setState({username:value})
    }
    UpdatePassword= (event)=>
    {
        var value= event.target.value;
        console.log("value");
        this.setState({password:value})
    }
    login = (event)=>{
        event.preventDefault();
        console.log("this.state")
    }
    render(){
        return(
            <div>
               <form>
                <input onChange={this.UpdateUsername} type="text" placeholder="username"></input><br></br><br></br>
                <input onChange={this.UpdatePassword} type="password" placeholder="password"></input><br></br><br></br>
                <button onClick={this.login}>Login</button>
                
               </form>
            </div>
        );
    } 
}
export default Login;