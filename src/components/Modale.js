import React, { useState } from 'react';
import Modal from 'react-modal';
const Modale = ({show , setShow}) => {
   
    const closeModal = () => {
        setShow(false);
    }
    return (
        <div>
    <Modal style={{
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(88, 88, 88, 0.75)'
      }, }}
     isOpen={show} onRequestClose={closeModal}  className="max-w-xl  bg-slate-100/75 top-24 absolute left-[50%] translate-x-[-50%] p-3 rounded-xl shadow-md  w-[90%]">
        <h2 className='text-xl font-bold text-center flex items-center justify-center mb-2'>We value your privacy</h2>

        <p className='p-2'>
        
We and our
store and/or access information on a device, such as cookies and process personal data, such as unique identifiers and standard information sent by a device for personalised ads and content, ad and content measurement, and audience insights, as well as to develop and improve products. With your permission we and our partners may use precise geolocation data and identification through device scanning. You may click to consent to our and our partners’ processing as described above. Alternatively you may access more detailed information and change your preferences before consenting or to refuse consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your preferences at any time by returning to this site or visit our privacy policy.
        </p>
        <hr className=''/>
        <div className='grid grid-cols-2 gap-x-2 my-2'>
            <button onClick={closeModal} className='px-4 bg-slate-500 py-2 rounded-md col-span-1 hover:bg-slate-400'>AGREE</button>
            <button onClick={closeModal} className='px-4 bg-slate-500 py-2 rounded-md col-span-1 hover:bg-slate-400'>MORE OPTIONS</button>
        </div>
    </Modal>
     
        </div>
    );
};

export default Modale;