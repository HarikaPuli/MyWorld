import { connect } from 'react-redux';
function TempDetails(props) {
     const renderData = ()=> {
        if ( props.data.data!=null) {
            var list = props.data.data.timelines[0].intervals.map(
                temp => {
                    return <tr key={temp.startTime}><td>{temp.startTime}</td><td>{temp.values.temperature}</td></tr>
                }
            )
            return list;
        }
    }
    return (
        <div>
            <table border="1" width="100%">
                <thead>
                    <tr>    
                        <th>Start Time</th>
                        <th>Temperature</th>
                    </tr>
                </thead>
                <tbody>
                    {renderData()}
                </tbody>
            </table>

        </div>
    )
}
    //9. this is the appState which store will give.
function mapStateToProps(appState) {
  //  console.log("appState",appState);
    return { data: appState }
}
//8. here we are accessing store using mapstatetoprops and then it'll give app state
export default connect(mapStateToProps, null)(TempDetails) 

