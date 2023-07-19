import Image from 'next/image';
import React from 'react';

const Schedule = () => {
  return (
    <main>
      <section id="" className="bg-black">
        <div className="container mb-10 items-center">
          <div className=" text-center m-auto mb-20 md:w-1/2">
            <h1 id='Guide' className="font-extrabold text-yellow-600 mb-5 text-3xl">
              Guide
            </h1>
            <h1 className="font-bold text-3xl leading-snug md:text-4xl">
              Class Scheduling Made Simple with a 3-step Setup
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:p-6 items-center text-center gap-12 lg:gap-8 px-8">
            <div className="border-2 border-solid border-gray-500 py-10 px-6 cursor-pointer hover:bg-gray-900 rounded-2xl  ease-in duration-200">
              {/* icon */}
              <div className="text-center flex  justify-center py-5 ">
                <Image
                  src="/assets/schedule.svg"
                  width={80}
                  height={80}
                  alt="schedule"
                />
              </div>
              <div>
                <h1 className="font-bold text-xl mb-4">
                  Step 1: Set Your Availability
                </h1>
                <p className="leading-relaxed ">
                  Simply create a single or a recurring class. set class
                  capacity, assign a host or instructor, and your booking page
                  will be ready. Add buffers, block-times, iiregular available
                  hours to replicate your real life schedule
                </p>
              </div>
            </div>
            {/* card2 */}
            <div className="border-2 border-solid border-gray-500 py-10 px-6 cursor-pointer hover:bg-gray-900 rounded-2xl  ease-in duration-200">
              {/* icon */}
              <div className="text-center flex  justify-center py-5 ">
                <Image
                  src="/assets/linked.svg"
                  width={80}
                  height={80}
                  alt="schedule"
                />
              </div>
              <div>
                <h1 className="font-bold text-xl mb-4">
                  Step 2: Share Book Link
                </h1>
                <p className="leading-relaxed ">
                  Share your booking URL with your attendees in emails, texts,
                  or integrate it with your website or social profiles. Add
                  video-conferencing links in scheduling notifications so that
                  they can join your virtual classes with just a click.
                </p>
              </div>
            </div>

            <div className="border-2 border-solid border-gray-500 py-10 px-6 cursor-pointer hover:bg-gray-900 rounded-2xl  ease-in duration-200">
              {/* icon */}
              <div className="text-center flex  justify-center py-5 ">
                <Image
                  src="/assets/sinked.svg"
                  width={80}
                  height={80}
                  alt="schedule"
                />
              </div>
              <div>
                <h1 className="font-bold text-xl mb-4">
                  Step 3: Collect Registrations
                </h1>
                <p className="leading-relaxed ">
                  Attendees can view the available slots in their own timezone,
                  and sign up, reschedule or cancel classes on their own.
                  Confirmed appointments are added to your calender, to know
                  when to go for your registartion, where and how
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Schedule;
