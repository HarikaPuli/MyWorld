import PreviligedUser from "./PreviligedUser"
import GenericUser from "./GenericUser"
import NormalUser from "./NormalUser"

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
    
    return (
        <div>
            <h1>Users</h1>
            <PreviligedUser data={prev_user} ></PreviligedUser>
            <GenericUser data={props.genUser}></GenericUser>
            <NormalUser data={Norm_user}></NormalUser>
            

        </div>
    )
}
export default Users;