// eslint-disable-next-line import/no-anonymous-default-export
//5.  if it is getWeather,then  takes it and give back to root reducer
// This action will trigger with API response in ../action/index.js
export default function (state = [], action){
    console.log('im in weather reducer'); 
    if(action) {
    switch(action.type) {
         case 'GET_WEATHER': return action.payload.data; 
         default: return state;
     }  
        
   }  
}