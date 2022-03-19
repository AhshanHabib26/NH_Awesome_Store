import React from 'react';
import './Footer.css'



const Footer = () => {

    const date = new Date()
    const getYear = date.getFullYear()

    return (
        <div className='mt-5'>
            <p> 

  © All Rights Reserved {getYear} | Design And Developed By <a className='myLink' href="https://github.com/AhshanHabib26">Ahsahn Habib</a></p>
        </div>
    );
};

export default Footer;