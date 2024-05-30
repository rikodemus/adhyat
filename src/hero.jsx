import React from 'react';
import HeroPic from './assets/ad.jpg';
import Modal from './modal';
import { Fragment, useState } from 'react';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-row items-center">
      <div className="relative">
        <img
          src={HeroPic}
          alt="Hero"
          width={1980}
          height={200}
          className="mr-4"
        />
        <button className="
        absolute inset-0 
        flex justify-center 
        items-center bg-black
         text-white px-4 py-2 
         rounded-md opacity-50 
         hover:opacity-50 text-lg 
         "  onClick={() => setShowModal(true)}>
          PENCET!!!
          </button>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} title="Hawlo!" >
        <div className='p-6'>
        </div>
      </Modal>
    </div>
  );
};

export default Hero;
