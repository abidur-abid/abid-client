import { Helmet } from "react-helmet-async";
import SectionTitle from '../../UI Pages/Components/SectionTitle';
import SocialLogin from './SocialLogIn';


const LogIn = () => {


    return (
        <>
         <Helmet>
            <title>Abid | Log In</title>
         </Helmet>
         <section>
            <div className="custom-container">
                
                <SectionTitle title={'Please Log In'}></SectionTitle>
                
                <SocialLogin></SocialLogin>
                
                
            </div>
         </section>
        </>
    );
};

export default LogIn;