function Product(props)
{
    return(
        <div>
       <h1>{props.title}</h1> 
       <p>{props.price}</p>
       <p>{props.description}</p>
          
        </div>
    )
};
export default Product;