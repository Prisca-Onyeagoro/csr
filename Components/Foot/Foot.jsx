import React from 'react';

const Foot = () => {
  return (
    <>
      <div className="mt-60">
        <div className="container flex flex-col justify-center">
          <h1
            id="how"
            className="text-yellow-600 font-bold text-3xl flex justify-center"
          >
            How It Works
          </h1>
          <p className="flex items-center justify-center  mt-10 leading-relaxed text-xl">
            24x7 Online Class Booking System Attendees can view schedule in
            real-time, sign up and pay for a class from anywhere, anytime. You
            can add staff portfolios, class description, reviews, etc. on your
            booking website and also customize it to reflect your institution’s
            brand by adding a logo, changing the color them, etc.
          </p>
          <br />
          <p className="flex items-center justify-center  leading-relaxed text-xl">
            Class and Staff Rosters Intuitive class and staff calendars
            eliminate the need to maintain confusing spreadsheets and let you
            view your schedule at a glance. Accommodate last minute
            registrations to fill empty seats with a click. Your roster is
            updated in real time as attendees sign up for a class
          </p>
          <br />

          <p className="flex items-center justify-center  leading-relaxed text-xl">
            Class Scheduling App for Mobile Always stay on top of upcoming
            classes and schedule changes with Appointy’s class scheduler and
            management mobile app for Android & iOS, You and your staff can
            manage scheduling, payments, class and staff rosters on the go
          </p>
        </div>
      </div>
    </>
  );
};

export default Foot;
