import React from 'react';

const Footer = () => {
    return (
        <div className=' flex flex-col items-center  justify-center bg-black'>
        <h2 className='bg-black text-white pb-8 '>Questions? Call 0800-022-5173</h2>
        <div className='flex  mx-auto bg-black flex-col sm:flex-row items-center justify-center gap-y-2 sm:items-center  sm:justify-center  sm:gap-x-16 pb-8'>
            
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
    );
};

export default Footer;