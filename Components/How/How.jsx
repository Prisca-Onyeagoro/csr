import React from 'react';

const How = () => {
  return (
    <main>
      <div className="bg-black">
        <div className="container py-15">
          <div className=" text-center m-auto mb-20 md:w-1/2">
            <h1
              id="install"
              className="font-extrabold text-yellow-600 mb-5 text-3xl"
            >
              Installation Guide
            </h1>
            <h1 className="font-bold text-3xl leading-snug md:text-4xl ">
              Class Scheduler Management System Made Easy For You
            </h1>
          </div>
          {/* card1 */}
          <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0 md:space-x-6">
            <div className="text-center cursor-pointer">
              <div className="relative bg-black inline-block px-6 py-3 rounded-lg hover:bg-yellow-600 cursor-pointer ease-in duration-200">
                <p className="text-6xl">1</p>
              </div>
              <h3 className="text-xl font-bold p">Install The App</h3>
            </div>
            {/* card2 */}
            <div className="text-center cursor-pointer">
              <div className="relative inline-block px-6 py-3 rounded-lg bg-yellow-600 cursor-pointer ">
                <p className="text-6xl">2</p>
              </div>
              <h3 className="text-xl font-bold p">Setup Your Profile</h3>
            </div>
            {/*card3  */}
            <div className="text-center cursor-pointer">
              <div className="relative bg-black inline-block px-6 py-3 rounded-lg hover:bg-yellow-600 cursor-pointer ease-in duration-200">
                <p className="text-6xl">3</p>
              </div>
              <h3 className="text-xl font-bold p">Enjoy The Features!</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default How;
