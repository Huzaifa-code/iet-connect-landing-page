import React, { useEffect, useRef } from 'react';

const Modal = ({ image, onClose }) => {
  const imageRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (imageRef.current && !imageRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div ref={imageRef} className="relative max-w-4xl w-full px-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-10 text-black  rounded-full text-2xl font-bold z-50"
        >
          &times;
        </button>
        <img
          src={image}
          alt="Full Screenshot"
          className="w-full rounded-xl shadow-2xl border-4 border-white"
        />
      </div>
    </div>
  );
};

export default Modal;
