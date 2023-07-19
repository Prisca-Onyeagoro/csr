import React from 'react';
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa6';
const Download = () => {
  return (
    <>
      <div id="footer" className="mt-52">
        <div className="bg-yellow relative">
          <div className="container py-10">
            <div className="grid gap-10 md:grid-cols-3 pb-10">
              <div className="space-y-6">
                <h4 className="font-bold text-lg">About App</h4>
                <p className="leading-relaxed">
                  Succex App Is Available for devices, It Is Cross-platfom And
                  Will Be Free For The Next Few Months After Which It Will Be On
                  Pricing.
                </p>
                <div className="flex  gap-5 items-center">
                  <p>Follow Us</p>
                  <FaFacebook className="text-yellow-600 rounded-full text-xl " />
                  <FaTwitter className="text-yellow-600 rounded-full text-xl " />
                  <FaGithub className="text-yellow-600 rounded-full text-xl " />
                </div>
              </div>

              {/* two */}
              <div className="flex justify-between md:justify-around">
                <div className="space-y-6">
                  <div className="font-bold text-lg">Quick Links</div>
                  <ul className="cursor-pointer">
                    <li className="underline hover:no-underline hover:text-yellow-600">
                      Home
                    </li>
                    <li className="underline hover:no-underline hover:text-yellow-600">
                      About
                    </li>
                    <li className="underline hover:no-underline hover:text-yellow-600">
                      Authors
                    </li>
                    <li className="underline hover:no-underline hover:text-yellow-600">
                      Guide
                    </li>
                    <li className="underline hover:no-underline hover:text-yellow-600">
                      Installation Guide
                    </li>
                  </ul>
                </div>
              </div>

              {/* three */}

              <div className="flex justify-between md:justify-around">
                <div className="space-y-6">
                  <div className="font-bold text-lg">Help</div>
                  <ul className="cursor-pointer">
                    <li className="underline hover:no-underline hover:text-yellow-600">
                      About Us
                    </li>
                    <li className="underline hover:no-underline hover:text-yellow-600">
                      Career
                    </li>
                    <li className="underline hover:no-underline hover:text-yellow-600">
                      Reviews
                    </li>
                    <li className="underline hover:no-underline hover:text-yellow-600">
                      Terms & Conditions
                    </li>
                    <li className="underline hover:no-underline hover:text-yellow-600">
                      Help
                    </li>
                  </ul>
                </div>
              </div>
              {/* three */}

              <div className="space-y-6">
                <h4 className="font-bold text-lg">News Letter</h4>
                <p className="leading-relaxed">
                  Suscribe to our news letter and loads of our news will be sent
                  to you.
                </p>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-3/4 text-gray-800 bg-white p-2 lg:p-rounded-l-md focus:outline-none"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="bg-yellow-600 px-4 py-2 lg:px-5 lg:py-3"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-xl text-yellow-600 font-bold flex justify-center">
          Created By Zidev
        </div>
      </div>
    </>
  );
};

export default Download;
