import { useAuth } from "../providers/auth";
import { Navigate,useLocation } from "react-router-dom";

const IsAuth = ({children})=>{
const user = localStorage.getItem('user')
const location = useLocation()
if(!user){
 return(
    <Navigate to={'/login'} state={{path:location.pathname}}/>
 )
} else if(!JSON.parse(user).data.emailVerified){
return(
    <Navigate to={'/EmailVerification'}/>
)
}else{
    // console.log(JSON.parse(auth.user).data.emailVerified)
    return children
}
}

export default IsAuth