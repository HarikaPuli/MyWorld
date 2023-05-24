function NormalUser(props) {
    console.log("props", props);
    return (
        <div>
            <h1>Normal User</h1>
           {props.data.name} <br></br>
            {props.data.address} <br></br>
            {props.data.pincode}<br></br>
        </div>
    )
}
export default NormalUser;