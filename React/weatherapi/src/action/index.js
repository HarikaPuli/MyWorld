import axios from 'axios';
//4.called from weather container.
// getWeather is an action,called after user click on button we will get the details of lat and long, from here it''ll go to reducer with API response

export  function getWeather(lat, long)    
{
    console.log("weather action");
    var promise= axios.get('https://api.tomorrow.io/v4/timelines?location=78,89&fields=temperature&timesteps=1h&units=metric&apikey=okB7Y1GRD5kZMXyz4BPeCWRl6XI7dmes');
    return{
       
         payload: promise,
         type: 'GET_WEATHER'
        }
}