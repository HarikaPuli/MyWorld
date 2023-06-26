import { getWeather } from '../action/index';
import {useState} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
function Weather(props)
{ 
    const [coords, setCoords]= useState({
        lat:'',
        long:''
    })
    const updateCoords =(event)=>{
        var name= event.target.name;
        var value= event.target.value;
        setCoords({...coords, [name]:value})
    }
//2. getWeatherAction function Called
//Called when user click on 'Fect weather' Button 
    const fetchWeather= (event)=>{
      event.preventDefault();
      props.getWeatherAction(coords.lat, coords.long);         

    }
    return(
        //1. after entering details,  Onclick fetch details
        //User interaction
        <div>
            <form>
                <input onChange={updateCoords} type="text" name="latitute" placeholder="Enter Latitude"></input>
                <input onChange={updateCoords} type="text" name="longitude" placeholder="Enter longitude"></input>
            <button onClick={fetchWeather}>Fetch Weather</button>     
            </form>
        </div>

       
    )
}
//
function mapDispatchToProps(dispatch)          
{
    return new bindActionCreators({getWeatherAction: getWeather},dispatch)      
    // 3. the key getWeatherAction which is prompting to getWeather function which is action
}


export default connect(null, mapDispatchToProps)(Weather);