import { Helmet } from "react-helmet-async";
import SectionTitle from "../Components/SectionTitle";
import html from '../../Images/html-5.png'
import css from '../../Images/css-3.png'
import js from '../../Images/js.png'
import react from '../../Images/react.png'



const Blogs = () => {
    
    return (
        <>
        <Helmet>
            <title>Abid | Blogs</title>
        </Helmet>
          <SectionTitle title={'My Blogs About Web Development'}></SectionTitle>  
          <section>
            <div className="custom-container">
                <div className="custom-row">
                <table className="table w-full mx-auto rounded border-2">
                    {/* head */}
                    <thead className='custom-background'>
                    <tr>
                        <td className='lg:text-lg font-bold  p-2 m-2'>#</td>
                        <th className='lg:text-lg font-bold  p-2 m-2'>Article Picture</th>
                        <th className='lg:text-lg font-bold  p-2 m-2'>Article Name</th>
                        <th className='lg:text-lg font-bold  p-2 m-2'>Action</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr >
                        <td className='lg:text-lg font-bold  p-2 m-2'>
                            <span>1</span>
                        </td>
                        <td> 
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={html} alt="image" className='custom-logo'/>
                            </div>
                        </td>
                        <td className='lg:text-lg font-bold p-2 m-2'>
                         HTML Fundamentals
                        </td>
                        
                        
                        <th className='lg:text-lg font-bold p-2 m-2'>
                        
                        <a href="https://www.jagonews24.com/en/opinion/news/21175" >Details</a>
                        </th>
                       
                    </tr>
                    <tr>
                        <td className='lg:text-lg font-bold  p-2 m-2'>
                            <span>2</span>
                        </td>
                        <td> 
                            <div className="mask mask-squircle w-12 h-12 ">
                                <img src={css} alt="image" className='custom-logo' />
                            </div>
                        </td>
                        <td className='lg:text-lg font-bold p-2 m-2'>
                       CSS Fundamentals
                        </td>
                        
                        
                        <th className='lg:text-lg font-bold p-2 m-2'>
                        
                        <a href="https://www.jagonews24.com/opinion/news/314299" >Details</a>
                        </th>
                       
                    </tr>
                    <tr>
                        <td className='lg:text-lg font-bold p-2 m-2'>
                            <span>3</span>
                        </td>
                        <td> 
                            <div className="mask mask-squircle w-12 h-12 bg-tranparent">
                                <img src={js} alt="image" className='custom-logo' />
                            </div>
                        </td>
                        <td className='lg:text-lg font-bold p-2 m-2'>
                        JavaScript Fundamentals
                        </td>
                        
                        
                        <th className='lg:text-lg font-bold p-2 m-2'>
                        
                        <a href="https://www.odhikar.news/opinion/47724" >Details</a>
                        </th>
                       
                    </tr>
                    <tr className='bg-transparent'>
                        <td className='lg:text-lg font-bold p-2 m-2'>
                            <span>4</span>
                        </td>
                        <td className='bg-transparent'> 
                            <div className="mask mask-squircle w-12 h-12 bg-tranparent">
                                <img src={react} alt="image" className='custom-logo' />
                            </div>
                        </td>
                        <td className='lg:text-lg font-bold p-2 m-2'>
                        React Fundamentals
                        </td>
                        
                        
                        <th className='lg:text-lg font-bold p-2 m-2'>
                        
                        <a href="https://www.odhikar.news/opinion/47724">Details</a>
                        </th>
                       
                    </tr>

                    
                    </tbody>
                    
                </table>
                </div>
            </div>
          </section>
        </>
    );
};

export default Blogs;