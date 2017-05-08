export default class Actions {

    static USER_DATA = "USER_DATA";
    static USER_DATA_SUCCESSFUL = "USER_DATA_SUCCESSFUL"
    
    static userData(){
        return{
            type: Actions.USER_DATA
            
        }
    }
    static UserDataSuccessful(userList){
        return{
            type: Actions.USER_DATA_SUCCESSFUL,
            payload: userList
        }
    }
}