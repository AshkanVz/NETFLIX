import React from 'react';
import master from "../images/master.png"
import american from "../images/american.png"
import visa from "../images/visa.png"
import netflix from "../images/netflix.png"
const Footer = () => {
    return (
        <div className='flex items-end  justify-between gap-x-8 bg-black sm:flex-col sm:items-center sm:justify-center sm:gap-y-4'>
          
        
        <div className=' flex flex-col items-start gap-y-6 sm:items-center  justify-center bg-black p-8'>
        <h2 className='bg-black text-white pb-8 '>Questions? Call 0800-022-5173</h2>
        <div className='flex  mx-auto bg-black flex-col sm:flex-row items-start w-full justify-center gap-y-16 sm:items-center  sm:justify-center  sm:gap-x-16 pb-8'>
          

          
            <div className='flex flex-col items-start gap-y-3 text-slate-600 list-none'>
                <li>FAQ</li>
                <li>investor Relations</li>
                <li>Ways to watch</li>
                <li>Corporate Information</li>
                <li>Legal Notice</li>
            </div>
            <div className='flex flex-col items-start gap-y-3 text-gray-600 list-none'>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
                <li>Only on Netflix</li>
            </div>
            <div className='flex flex-col items-start gap-y-3 text-gray-600 list-none'>
                <li>Account</li>
                <li>Redeem gift cards</li>
                <li>Privacy</li>
                <li>Speed Test</li>
                
            </div>
            <div className='flex flex-col items-start gap-y-3 text-gray-600 list-none'>
                <li>Media Center</li>
                <li>Buy gift cards</li>
                <li>Cookie Preferences</li>
                <li>Legal Guarantee</li>
                
            </div>
            
            </div>
        </div>
        <div className='sm:flex sm:items-center mr-4  sm:justify-center sm:gap-x-3'>
        <img src={netflix} className="w-28 h-14 mb-16 mr-10" alt="" />
        <img src={visa} className="w-28 h-14 mb-16 mr-10" alt="" />
        <img src={american} className="w-28 h-14 mb-16 mr-10" alt="" />
        <img src={master} className="w-28 h-14 mb-16 mr-10" alt="" />
        </div>
        
        </div>
    );
};

export default Footer;