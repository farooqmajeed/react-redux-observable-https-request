export default class Actions {

    static USER_DATA = "USER_DATA";
    static USER_DATA_SUCCESSFUL = "USER_DATA_SUCCESSFUL"
    
    static userData(){
        return{
            type: Action.USER_DATA
            
        }
    }
    static UserDataSuccessful(){
        return{
            type: Action.USER_DATA_SUCCESSFUL,
            payload: UserList
        }
    }
}