import { useState } from "react";
import SetPage from './ProfilePage';


function CreateForm()
{
    var [registerFormData, setRegisterForm] = useState({
        firstname: '',
        lastname: '',
        password: '',
        email: '',
        phonenumber: ''

    })

    const updateState = (event) => {
        var value = event.target.value;
        var name = event.target.name;
        setRegisterForm({ ...registerFormData, [name]: value });
    }
    
    const register = (event) => {
        event.preventDefault();
        SetPage(registerFormData);
       
    }

    return(
        <div>
            <form>
                <h1>User Registration Form</h1>
                <input onChange={updateState} type="text" name="firstname" placeholder="Enter First Name"></input> <br></br><br></br>
                <input onChange={updateState} type="text" name="lastname" placeholder="Enter Last Name"></input><br></br><br></br>
                <input onChange={updateState} type="text" name="password" placeholder="Enter Password"></input><br></br><br></br>
                <input onChange={updateState}type="text" name="email" placeholder="Enter Email"></input><br></br><br></br>
                <input onChange={updateState} type="number" name="phonenumber" placeholder="Enter Number"></input><br></br><br></br>
                <button onClick={register}>Register</button>
            </form>
        </div>
    )
}
export default CreateForm;
