import { Observable} from 'rxjs'
import Actions from '../actions/actions'

export default class UserEpic {


    static getuserData(actions$){
        return actions$.ofType(Actions.USER_DATA_SUCCESSFUL)
        .mergeMap(() =>{
             return Observable.ajax("")
            .pluck("response")
            .switchMap((jsonData)=>{
                return Observable.of(Actions.UserDataSuccessful(jsonData));
            })
        })
    }
}