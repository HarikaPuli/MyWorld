import axios from 'axios';
export default function getproducts()
{
    
    //here we have to make an api call
    // axios.get('https://fakestoreapi.com/products').then(
    //     (response)=>{
    //         console.log("response",response);
    //     }
    //  )
    var promise= axios.get('https://fakestoreapi.com/products');
    return{
       
         payload: promise,
         type: 'GET_PRODUCTS',
        
            //action object
    }
}