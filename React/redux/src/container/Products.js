import getproducts from '../action/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
function Products(props)
{ 
    const fetchProducts= ()=>{
      props.getProductsAction();
    }
    return(
        
        <div>
            <button onClick={fetchProducts}>
                Fetch Products
            </button>
        </div>

       
    )
}
function mapDispatchToProps(dispatch)          //we need to usethis for connect function
{
    return new bindActionCreators({getProductsAction: getproducts},dispatch)
}


export default connect(null, mapDispatchToProps) (Products)