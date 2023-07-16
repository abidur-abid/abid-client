import { useContext } from "react";
import { AuthContext } from "../Providers/Auth Provider/AuthProvider";


const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;