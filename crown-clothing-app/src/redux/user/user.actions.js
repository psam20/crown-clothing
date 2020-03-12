// Actions are the functions that returns Objects.a1

// it will take user prop from firebase

export const setCurrentUser= user => ({
        
    type : 'SET_CURRENT_USER',
    payload : user
});