import { createRef } from "react";
import { connect } from "react-redux";
function Topics(props) {
    let tpref = createRef();

    return (
        <div>
            <h3>Topics</h3>
            <input type='text' name='tp' ref={tpref}></input>
            <button onClick={() => props.addTopic(tpref.current.value)}>Add</button>
            <ul>
                {props.tps.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
        </div>

    )

}
function mapStateToProps(state) {
    return { tps: [...state.tps] };
}

function mapDispatchToProps(dispatch) {
    return {
        addTopic: (t) => {
            dispatch({ type: 'ADD', payload: { tp: t } })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Topics);