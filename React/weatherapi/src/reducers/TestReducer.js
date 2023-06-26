// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = [], action){
    console.log('im in weather reducer'); 
    if(action) {
    switch(action.type) {
         case 'GET_WEATHER': return action.payload.data;
         default: return state;
     }     
   }  
}