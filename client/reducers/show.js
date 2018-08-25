const show=(state=false,action)=>{
  switch(action.type)
  {
    case "ALERT_SHOW":
    console.log("login successfully reducer is running",action);
    return action.string
    default :
    return state
  }
}
export default show
