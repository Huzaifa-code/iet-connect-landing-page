import React from "react";
import videolink from "../assets/preview.mp4";

const Promovideo = () => {
  return (
    <section className="mt-10 bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 flex flex-col justify-center items-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-violet-700 text-center">
        See IET Connect in Action!
      </h2>
      <p className="text-gray-600 md:text-2xl mb-8 md:mb-12 mx-4 text-center">
        your gateway to seamless academic collaboration, instant resource
        access, and student success!
      </p>
      <div className="max-w-5xl w-full aspect-video rounded-lg overflow-hidden shadow-md border-2 border-blue-200">
        <video
          src={videolink}
          loop
          autoPlay
          muted
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Promovideo;
