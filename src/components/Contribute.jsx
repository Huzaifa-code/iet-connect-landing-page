import React from 'react';
import { FaGithub, FaDiscord, FaExternalLinkAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contribute = () => {
  return (
    <div id="contribute" className="bg-[#f9fafb] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8">Contribute to IET Connect</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          IET Connect is a student-driven initiative to bridge communication and collaboration gaps within the IET DAVV community. We welcome developers, designers, writers, and anyone passionate about improving student life through tech.
        </p>

        <p className="text-md md:text-lg text-gray-600 mb-8">
          Whether you're new to open source or an experienced developer, your contributions make a difference. Help us build new features, squash bugs, or improve documentation.
        </p>

        <div className="flex flex-col justify-center items-center gap-6 text-white">
          {/* <a
            href="https://github.com/your-repo-url"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-800 transition-colors px-6 py-3 rounded-md flex items-center gap-2"
          >
            <FaGithub /> GitHub Repository <FaExternalLinkAlt size={14} />
          </a> */}

          <a
            href="mailto:vjain@ietdavv.edu.in"
            className="bg-red-600 hover:bg-red-500 transition-colors px-6 py-3 rounded-md flex items-center gap-2"
          >
            <FaEnvelope /> Mail Us <FaExternalLinkAlt size={14} />
          </a>

          {/* <a
            href="https://discord.gg/your-invite"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-500 transition-colors px-6 py-3 rounded-md flex items-center gap-2"
          >
            <FaDiscord /> Join our Discord <FaExternalLinkAlt size={14} />
          </a> */}
          <div className="grid grid-cols-2 gap-4 text-white">
            {[
              { name: "Manas Bhandari", url: "https://linkedin.com/in/manas0609" },
              { name: "Huzaifa Qureshi", url: "https://linkedin.com/in/developerhuzaifa" },
              { name: "Mohit Maravi", url: "https://linkedin.com/in/mohit-maravi-a68815226" },
              // { name: "Member 4", url: "https://linkedin.com/in/member4" },
            ].map((member, index) => (
              <a
                key={index}
                href={member.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 hover:bg-blue-600 transition-colors px-6 py-3 rounded-md flex items-center gap-2"
              >
                <FaLinkedin /> {member.name}'s LinkedIn <FaExternalLinkAlt size={14} />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-10  text-gray-500">
          Made with ❤️ by students of IET DAVV — let's build something great together.
        </p>
      </div>
    </div>
  );
};

export default Contribute;
