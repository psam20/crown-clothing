// Actions are the functions that returns Objects.a1

// it will take user prop from firebase
import {userActionTypes} from './users.action.types';
export const setcurrentUser= user => ({
        
    type : userActionTypes.SET_CURRENT_USER,
    payload : user
});