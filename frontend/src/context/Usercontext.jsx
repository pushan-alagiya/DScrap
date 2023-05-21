import { createContext, useContext, useEffect, useReducer } from "react";

import reducer from "../reducer/userReducer"

const Usercontext=createContext()


const initialState={
    user:false
}

const UserProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState);
   
    return <Usercontext.Provider value={{...state,dispatch}} >{children}</Usercontext.Provider>
}


const useUserContext =()=>{
    return useContext(Usercontext);
};

export {UserProvider,Usercontext,useUserContext}