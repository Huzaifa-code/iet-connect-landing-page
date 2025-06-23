import React, { useState } from "react";
import Modal from "./Modal"; // Make sure to create this component

const screenshotList = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  // 'classroom.png',
  // 'iet_classroom.png',
  // 'Explore.png',
  // 'Events.png',
  // 'AddEvents.png',
  // 'studApps.png',
  // 'schedule.png',
  // 'chatbot.png',
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
    <div className="flex flex-col items-center justify-center py-16 bg-gray-100 ">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 px-4 text-center">
        Everything a student needs, all in one place.
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:px-4 max-w-6xl w-full px-10">
        {screenshotList.map((img, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden w-full aspect-video"
          >
            <img
              src={`/screenshots/mockup/${img}`}
              alt={`screenshot-${idx}`}
              className="object-cover w-full h-full cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
              onClick={() => openModal(`/screenshots/${img}`)}
            />
          </div>
        ))}
      </div>

      {selectedImage && <Modal image={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default Screenshots;
