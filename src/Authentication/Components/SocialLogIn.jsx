import useAuth from '../Hooks/useAuth'
import google from '../../Images/google.jpg'
import { Navigate } from 'react-router-dom';
// import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    // const navigate = useNavigate();
    // const location = useLocation();

    // const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () =>{
        googleSignIn()
        
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            // navigate(from, { replace: true });
            Navigate('/login');
            
        })
       
    }

    return (
        <>
         <div>
         <img src={google} className='custom-image ml-auto mr-auto mt-8'/>
         </div>
         <div className='flex justify-center'>
         <button onClick={handleGoogleSignIn} className='font-bold custom-background px-8 py-4 rounded mt-8'>Sign In With Google</button>
         </div>
        </>
    );
};

export default SocialLogin;