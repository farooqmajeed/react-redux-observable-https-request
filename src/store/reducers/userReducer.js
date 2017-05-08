
import Actions from '../actions/actions'


const INITIAL_STATE = {
   userList : [],
    // followersList: [],
}

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    
  case Actions.USER_DATA_SUCCESSFUL:
//     return {...state, userList: action.payload}
//   case Actions.GET_FOLLOWERS_SUCCESSFUL:
//     return {...state, followersList: action.payload}
  default:
    return state
  }
}

export default userReducer;