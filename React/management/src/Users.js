

function Users(props) {

    var prev_user = {
        name: "Kiran",
        address: "Hyderabad",
        pincode: 500765
    }
    var Norm_user = {
        name: "Kiran",
        address: "Hyderabad",
        pincode: 500765
    }
    var gen_user = {
        name: "rajesh",
        address: "chennai",
        pincode: 757899
      }
    
    return (
        <div>
            <h1>Users</h1>
            
            <div>
            <h1> User 1</h1>
            {prev_user.name} <br></br>
            {prev_user.address} <br></br>
            {prev_user.pincode}<br></br>
        </div>
        <div>
            <h1> User 2</h1>
            {Norm_user.name} <br></br>
            {Norm_user.address} <br></br>
            {Norm_user.pincode}<br></br>
        </div>
        <div>
            <h1> User 3</h1>
            {gen_user.name} <br></br>
            {gen_user.address} <br></br>
            {gen_user.pincode}<br></br>
        </div>

            

        </div>
    )
}
export default Users;