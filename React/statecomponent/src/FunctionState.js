import { useState } from "react";
function Register()
{
   const[state, setState] = useState(
        {
            username:" ",
            password:" ",
            email:" "
        }
    )
    // const UsernameUpdate=(event)=>{
    //     var value=event.target.value;
    //     setState(...state,{ username: value})
    // }
    // const passwordUpdate=(event)=>{
    //     var value=event.target.value;
    //     setState(...state,{ password: value})
    // }
    // const emailUpdate=(event)=>{
    //     var value=event.target.value;
    //     setState(...state,{ email: value})
    // }
    const updateState=(event)=>
    {
        var value=event.target.value;
        var name=event.target.name;
        setState({...state,[name]:value});
    }
    const register=(event)=>{
        event.preventDefault();
        console.log("state", state);
    }
    return(
        <div>
            <form>
                <input onChange={updateState} nama="username" type="text" placeholder="username"></input><br></br><br></br>
                <input onChange={updateState} name="password" type="text" placeholder="password"></input><br></br><br></br>
                <input onChange={updateState} name="email" type="text" placeholder="email"></input><br></br><br></br>
                <button onClick={register}>Register</button>
            </form>
        </div>
    )
}
export default Register;