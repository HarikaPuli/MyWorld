// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = [], action){
    console.log('action==>'+action); // we cant directly give data to payload, because initialy it doesnt have any data
    if(action) {
    switch(action.type) {
         case 'GET_PRODUCTS': return action.payload.data;
         default: return state;
     }     
                           //coz for every operation we dont want to create one new reducer
   }  
}
   
