export default class Actions {

    static UserData = "USER_DATA";
    static UserDataSuccessful = "USER_DATA_SUCCESSFUL"
    
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