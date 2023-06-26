import { connect } from 'react-redux';
function ProdCount(props) {
    
    console.log(props);
    const renderList = ()=> {
     var arr = props.products.map((item)  =>     
    
        <li key={item.id}>{item.title}{" Price ="+item.price}</li>   
    );
      
       return arr; 
    }
    return (
        <div>
        <h1>{props.products.length}</h1>
        <ol>
            {renderList()}
        </ol>
    </div>
    )
}
function mapStateToProps(appState) {
    return { products: appState.products }
}

export default connect(mapStateToProps, null)(ProdCount)
