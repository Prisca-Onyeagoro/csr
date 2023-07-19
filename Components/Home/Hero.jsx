import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <main className="relative ">
        <div className="w-80 h-80 bg-pink-800 absolute top-0 -left-5 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
        <div className="w-80 h-80 bg-yellow-700 absolute bottom-10 right-0 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>

        <div
          className="container py-28 bg-gadient flex flex-col  lg:flex-row justify-center items-center "
          id="home"
        >
          <div className="container relative  py-5 px-11 overscroll-x-none  flex flex-col justify-center text-xl font-semibold items-center">
            <div className="container leading-snug py-9 flex justify-center font-extrabold text-3xl md:text-4xl ">
              SUC<span className="text-yellow-500">CEX</span>
            </div>
            <p className="leading-relaxed mb-9">
              A Class Scheduler Software Management System Designed To Make
              School Life Easier, Better And Convenient. SUCCEX Goes After The
              Convenience and Comfort Of Both Students And Lecturers; Taking
              Education To the Next Level.
            </p>
            <div>
              <button className="bg-yellow-600 items-center px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
                Download App
              </button>
            </div>
          </div>

          <div className="md:w-1/2">
            <Image
              src="/assets/lap6.svg"
              alt="laptop"
              height={350}
              width={400}
            />
          </div>
        </div>
      </main>
    </div>
  );
};
export default Hero;
