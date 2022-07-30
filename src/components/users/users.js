import Axios from "axios";
import { connect } from "react-redux";
import './users.css';

function Users(props) {
    return (
        <div>
            <h3>Users</h3>
            <button onClick={props.getData}>Get Data</button>
            <table width="800px">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((u) => <tr><td>{u.id}</td><td>{u.name}</td><td>{u.username}</td><td>{u.email}</td></tr>)}
                </tbody>

            </table>
        </div>
    )
}

function mapStateToProps(state) {
    return { data: state.data }
}

function mapDispatchToProps(dispatch) {
    return {
        getData: () => {
            let url = "https://jsonplaceholder.typicode.com/users";
            Axios.get(url).then((res) => {
                dispatch({ type: 'GETDATA', payload: { data: res.data } })
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);