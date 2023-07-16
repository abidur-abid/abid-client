
import { Link } from 'react-router-dom';
import useAuth from '../../Authentication/Hooks/useAuth';



const DashboardHeader = () => {



    const {logOut} = useAuth();
    
    const handleLogOut = () =>{
        logOut();
       
    }

    return (
        <header className='custom-background'>
            <div className="custom-container">
                <div className="flex justify-between font-bold  p-8">
                    <button className='bg-gray-100 py-2 px-4 rounded'><Link to='/dashboard/uploadblog'>Upload Blog</Link></button>
                    <button className='bg-gray-100 py-2 px-4 rounded'><Link to='/dashboard/uploadproject'>Upload project</Link></button>
                    <button onClick={handleLogOut} className='bg-gray-100 py-2 px-4 rounded'>Log Out</button>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;