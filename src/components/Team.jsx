import React from "react";

const Team = () => {
  return (
    <section className="pb-10 pt-20  lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              {/* <span className="mb-2 block text-lg font-semibold text-black">
                            Our Team
                        </span> */}
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-black sm:text-4xl md:text-[40px]">
                Our Awesome Team
              </h2>
              {/* <p className="text-base text-body-color text-black">
                            Meet the passionate individuals behind IET Connect, dedicated to
                            enhancing student life through technology. Our team is a blend
                            of developers, designers, and innovators, all working together
                            to create a seamless experience for the IET DAVV community.
                        </p> */}
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <TeamCard
            name="Manas Bhandari"
            linkedin="https://in.linkedin.com/in/manas0609"
            imageSrc="https://media.licdn.com/dms/image/v2/D4D03AQFXoXjmzt88gA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713461361427?e=1756339200&v=beta&t=DfBVjUxiVlpOUxgFXgE64EmYOmjcjDGNVQzFW6j6rDI"
          />
          <TeamCard
            name="Huzaifa Qureshi"
            linkedin="https://www.linkedin.com/in/developerhuzaifa/"
            imageSrc="https://media.licdn.com/dms/image/v2/D4D03AQGMjeMz2kg43A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1682870288583?e=1756339200&v=beta&t=AonUyBZCPriXtnoQuZsd5_7MpoWbizyccROHqQ6T44U"
          />
          <TeamCard
            name="Mohit Maravi"
            linkedin="https://www.linkedin.com/in/mohit-maravi-a68815226/"
            imageSrc="https://media.licdn.com/dms/image/v2/D4D35AQEDzUdPrm5Ibw/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1734507853289?e=1751209200&v=beta&t=07axwNdWVs-Hz7l5lg5yHvTMAW0VtKPF5g32N3YQf6c"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;

const TeamCard = ({ imageSrc, name, linkedin }) => {
  const handleClick = () => {
    if (linkedin && linkedin.startsWith("http")) {
      window.open(linkedin, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      onClick={handleClick}
      className="w-full px-4 md:w-1/2 xl:w-1/4 cursor-pointer"
      title={
        linkedin && linkedin.startsWith("http") ? "View LinkedIn Profile" : ""
      }
    >
      <div className="mx-auto mb-10 w-full max-w-[370px]">
        <div className="relative overflow-hidden rounded-lg">
          <img src={imageSrc} alt={name} className="w-full" />
          <div className="absolute bottom-5 left-0 w-full text-center">
            <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5 md:py-3">
              <h3 className="text-base font-semibold text-black">{name}</h3>
              {/* <p className="text-xs text-body-color">{profession}</p> */}
              <span className="absolute bottom-0 left-0">
                {/* SVG decoration */}
                <svg
                  width={61}
                  height={30}
                  viewBox="0 0 61 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx={16}
                    cy={45}
                    r={45}
                    fill="#13C296"
                    fillOpacity="0.11"
                  />
                </svg>
              </span>
              <span className="absolute right-0 top-0">
                {/* SVG decoration */}
                <svg
                  width={20}
                  height={25}
                  viewBox="0 0 20 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {[...Array(24)].map((_, i) => (
                    <circle
                      key={i}
                      cx={(i % 4) * 5.7 + 0.7}
                      cy={Math.floor(i / 4) * 5.7 + 1.6}
                      r="0.65"
                      transform="rotate(-90)"
                      fill="#3056D3"
                    />
                  ))}
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
