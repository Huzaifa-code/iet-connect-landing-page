import React, { useState } from 'react';
import Modal from './Modal'; // Make sure to create this component

const screenshotList = [
  'Home.png',
  'classroom.png',
  'iet_classroom.png',
  'Explore.png',
  'Events.png',
  'AddEvents.png',
  'studApps.png',
  'schedule.png',
  'chatbot.png',
];

const Screenshots = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='flex flex-col items-center justify-center py-16 bg-gray-100'>
      <h1 className='text-4xl md:text-5xl font-bold mb-10'>IET Connect – Screenshots</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl'>
        {screenshotList.map((img, idx) => (
          <img
            key={idx}
            src={`/screenshots/${img}`}
            alt={`screenshot-${idx}`}
            className='rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out'
            onClick={() => openModal(`/screenshots/${img}`)}
          />
        ))}
      </div>

      {selectedImage && (
        <Modal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default Screenshots;
