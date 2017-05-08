import React, {Component} from 'react';
import { connect } from 'react-redux';
import User from '../components/user/user'

import Actions from '../store/actions/actions'
function mapStateToProps(state) {
    console.log("state", state.userReducer);
    return{
        userList : state.userReducer.userList
    
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
                <User  {...this.props}/>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);