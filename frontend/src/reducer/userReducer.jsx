const userReducer=(state,action)=>{

    if (action.type === "USER") {
        
        return {
            ...state,
            user:action.payload
        }
        
    }
  
      return state;
  
}

export default userReducer;
