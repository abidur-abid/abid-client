import React from 'react';
import SectionTitle from '../Components/SectionTitle';
import professor from '../../Images/education.gif'
import localnews from '../../Images/developer.gif'
import lgud from '../../Images/contact.gif'
import { Helmet } from 'react-helmet-async';

const Projects = () => {
    return (
       <>
       <Helmet>
        <title>
            Abid | Projects
        </title>
       </Helmet>
        <SectionTitle title={'My Latest Projects'}></SectionTitle>
         <section>
            <div className="custom-container">
                <div className="custom-row">
                <div className="custom-column lg:w-2/3">
                        <p className='text-center'><b>Md. Rakibul Islam</b></p>
                        <p>This is a professor portfolio. This website has unique design. Professor can publish his articles by this website.
                            User can see professor articles. This website has admin dashbord, here admin can see his all articles by chart.
                        </p>
                        <ul className='flex gap-4  justify-center items-center'>
                            <a href="#" className='custom-background rounded px-2'><i class="fa-solid fa-code-compare"></i> Client Code</a>
                            <a href="#" className='custom-background rounded px-2'><i class="fa-solid fa-code-compare"></i> Server Code</a>
                            <a href="#" className='custom-background rounded px-2'><i class="fa-solid fa-link"></i> Live Website</a>  
                        </ul>
                        <ul className='flex gap-4 mt-4 justify-center items-center'>
                            <a href="#" className='bg-gray-200 rounded px-2'>Tailwind</a>
                            <a href="#" className='bg-gray-200 rounded px-2'>React</a>
                            <a href="#" className='bg-gray-200 rounded px-2'>Firebase</a>  
                            <a href="#" className='bg-gray-200 rounded px-2'>Express</a>  
                            <a href="#" className='bg-gray-200 rounded px-2'>MongoDB</a>  
                        </ul>
                    </div>
                    <div className="custom-column lg:w-1/3">
                     <img src={lgud} className='custom-image ml-auto mr-auto'/>  
                    </div>
                </div>
                <div className="custom-row mt-4">
                    <div className="custom-column lg:w-1/3">
                    <img src={localnews} className='custom-image ml-auto mr-auto'/>
                    </div>
                    <div className="custom-column lg:w-2/3">
                        <p className='text-center'><b>Md. Rakibul Islam</b></p>
                        <p>This is a professor portfolio. This website has unique design. Professor can publish his articles by this website.
                            User can see professor articles. This website has admin dashbord, here admin can see his all articles by chart.
                        </p>
                        <ul className='flex gap-4 justify-center items-center'>
                        <a href="#" className='custom-background rounded px-2'><i class="fa-solid fa-code-compare"></i> Client Code</a>
                            <a href="#" className='custom-background rounded px-2'><i class="fa-solid fa-code-compare"></i> Server Code</a>
                            <a href="#" className='custom-background rounded px-2'><i class="fa-solid fa-link"></i> Live Website</a>  
                        </ul>
                        <ul className='flex gap-4 mt-4 justify-center items-center'>
                            <a href="#" className='bg-gray-200 rounded px-2'>Tailwind</a>
                            <a href="#" className='bg-gray-200 rounded px-2'>React</a>
                            <a href="#" className='bg-gray-200 rounded px-2'>Firebase</a>  
                            <a href="#" className='bg-gray-200 rounded px-2'>Express</a>  
                            <a href="#" className='bg-gray-200 rounded px-2'>MongoDB</a>  
                        </ul>
                    </div>
                </div>
                <div className="custom-row">
                    <div className="custom-column lg:w-2/3">
                        <p className='text-center'><b>Md. Rakibul Islam</b></p>
                        <p>This is a professor portfolio. This website has unique design. Professor can publish his articles by this website.
                            User can see professor articles. This website has admin dashbord, here admin can see his all articles by chart.
                        </p>
                        <ul className='flex gap-4 justify-center items-center'>
                        <a href="#" className='custom-background rounded px-2'><i class="fa-solid fa-code-compare"></i> Client Code</a>
                            <a href="#" className='custom-background rounded px-2'><i class="fa-solid fa-code-compare"></i> Server Code</a>
                            <a href="#" className='custom-background rounded px-2'><i class="fa-solid fa-link"></i> Live Website</a> 
                        </ul>
                        <ul className='flex gap-4 mt-4 justify-center items-center'>
                            <a href="#" className='bg-gray-200 rounded px-2'>Tailwind</a>
                            <a href="#" className='bg-gray-200 rounded px-2'>React</a>
                            <a href="#" className='bg-gray-200 rounded px-2'>Firebase</a>  
                            <a href="#" className='bg-gray-200 rounded px-2'>Express</a>  
                            <a href="#" className='bg-gray-200 rounded px-2'>MongoDB</a>  
                        </ul>
                    </div>
                    <div className="custom-column lg:w-1/3">
                     <img src={professor} className='custom-image '/>  
                    </div>
                </div>
            </div>
        </section>
       </>
    );
};

export default Projects;