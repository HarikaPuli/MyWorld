function ProductsList(props)             //making api from parent to child
{
   function getList(){
    var arr = props.data.map(function(getProducts)       //map is to iterate each element in array
    {
        return <li key={getProducts.id}>{getProducts.id}{getProducts.title}</li>   //key is to identify the element in
    })
    return arr;
   }
    return(
        <div>
            <h1>In Products Component</h1>
            <h2>{props.data.length}</h2>
            <ol>
                {getList()}
            </ol>
        </div>
    )
}
export default ProductsList;