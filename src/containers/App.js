import React, {Component} from 'react';
import { connect } from 'react-redux';

import Actions from '../store/actions/actions'
function mapStateToProps(state) {
    return{
        UserList : state.userReducer.UserList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUserData : function (){
            return dispatch(Actions.userData())
        }
    };
}

class App extends Component {

    render() {
        return (
            <div>
                <User />
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);