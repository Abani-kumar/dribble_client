import { Navigate } from "react-router"
import { useSelector } from "react-redux"

function Privateroutes({children}) {
    const {refreshToken}=useSelector((state)=>state.auth)
    if(refreshToken){
        return children;
    }else{
        return <Navigate to="/signup"></Navigate>
    }
 
}

export default Privateroutes