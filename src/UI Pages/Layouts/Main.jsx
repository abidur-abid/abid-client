
import { Outlet } from 'react-router-dom';
import Header from '../Main Pages/Header';
import Footer from '../Main Pages/Footer';

const Main = () => {
    return (
        <>
         <Header></Header>
         <Outlet></Outlet>
         <Footer></Footer>
        </>
    );
};

export default Main;