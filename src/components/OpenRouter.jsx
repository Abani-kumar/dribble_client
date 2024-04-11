import { Navigate } from "react-router"
import { useSelector } from "react-redux"
function Openroutes({children}) {
    const {refreshToken}=useSelector((state)=>state.auth)
    if(refreshToken===null){
        return children;
    }else{
        return <Navigate to="/"></Navigate>
    }
}

export default Openroutes