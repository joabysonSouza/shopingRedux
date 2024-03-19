import useActionTypes from "./useActionTypes";

 export const LoginUser =(payload)=>({
    type: useActionTypes.Login,
    payload
   
})

export const LogoutUser =()=>({
    type:useActionTypes.Logout
    
})