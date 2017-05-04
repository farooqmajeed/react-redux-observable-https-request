import Action from '../actions/actions'

const Initial_state = {
    userList : [],
}

function userReducer(state = Initial_state, action) {
    switch(action.type) {
        case Action.USER_DATA_SUCCESSFUL:
        return {...state, UserList:action.payload}
        default:
    return state
    }
}