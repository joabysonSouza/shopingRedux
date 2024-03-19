import useActionTypes from "./useActionTypes";

const initialState = {
  currentUser: null,
};

// a função reducer recebe dois paramentros  o state e a action 
// state dele é o dados que ele recebe state = currentUser = null
const userReduce = (state = initialState, action) => {
    
switch(action.type){
    case useActionTypes.Login:
        return{...state, currentUser:action.payload}
    case useActionTypes.Logout:
        return {...state, currentUser:null}    

    default: 
    return state;  
}

 
};

export default userReduce;
