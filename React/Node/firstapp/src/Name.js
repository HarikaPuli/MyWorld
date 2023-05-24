function MyName() {
    var userDetails = Fname();
    return (
       
      <div >
        <h1>Name {userDetails.name}</h1>
        <h1>Address {userDetails.address}</h1>
        <h1>pincode {userDetails.pincode}</h1>
       
      </div>
     
    );
  }
  
  function Fname() {
      return (
       LastName.call()
     
        );
      }
    function LastName()
    {
        var gen_user = {
            name: "Harika",
            address: "Hyderabad",
            pincode: 757899
          }

        return gen_user;
    }

export default MyName;
