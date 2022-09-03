import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  
  const navigate = useNavigate();
  // console.log(user.email)

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  const navigatee = () => {
    navigate('/');
  }
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
       
      <Link to='/'>
      <h1 className="text-red-600 hover:text-red-500 text-4xl font-bold cursor-pointer flex  gap-x-0.5  " onClick={navigatee}>
        <span className="text-5xl">N</span>
        <span className="text-4xl">E</span>
        <span className="text-3xl">T</span>
        <span className="text-2xl">F</span>
        <span className="text-3xl">L</span>
        <span className="text-4xl">I</span>
        <span className="text-5xl">X</span>
      </h1>
      </Link>
      

      
      {user?.email ? (
        <div>
          <Link to='/account'>
            <button className='text-white pr-4'>Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to='/signin'>
            <button className='text-white pr-4'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
              Sign Up
            </button>
          </Link>
        </div>
      )}


    
      
    </div>
  );
};

export default Navbar;
