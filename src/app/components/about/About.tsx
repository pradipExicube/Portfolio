'use client';
import React, { useEffect, useState } from "react";
import { IoMdDownload } from "react-icons/io";

export default function Aboutcomponent() {

  const cvURL =
    "https://drive.google.com/file/d/1NZY5ywhj6T06tjJ3BJoGG8hypX4afsj2/view?usp=sharing";

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      {/* Section Header */}
      <div style={{ position: 'relative' }}>
        <h2 className="relative text-6xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-8xl text-center font-extrabold text-gray-200 opacity-10 mb-8 ">
          ABOUT ME
        </h2>
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-red p-4 
        sm:top-5 p-4 md:top-5 p-4 lg:top-5 p-4 xl:top-5 p-4">
          <h3 className="text-lg text-white-500 font-bold uppercase text-center">
            Know Me More
          </h3>
          <div className="w-1/3 mx-auto">
            <div className="rounded-[5px]" style={{ height: 2, width: 50, backgroundColor: 'red', alignSelf: 'center' }}>

            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
        {/* Left Column */}
        <div className="lg:w-3/5 pr-10 sm:pr-0 md:pr-0 lg:pr-10 xl:pr-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            I'm <span className="text-red-500">Pradip Mondal</span>, a App Developer
          </h1>
          <p className="text-gray-300 leading-7 mb-4">
            Experienced React Native developer with a
            passion for creating high-quality, scalable
            mobile applications. Proficient in
            leveraging React Native framework to
            build cross-platform apps for iOS and
            Android devices. Skilled in UI/UX design
            principles, API integration, and
            troubleshooting to deliver exceptional user
            experiences.
          </p>
          <p className="text-gray-300 leading-7">
            Adept at collaborating with
            multidisciplinary teams to achieve project
            objectives within tight deadlines.
          </p>
        </div>

        {/* Right Column */}
        <div className="lg:w-2/5 mt-12 lg:mt-0">
          <div className="space-y-4">
            <p>
              <span className="font-bold text-gray-400">Name:</span>{' '}
              Pradip Mondal
            </p>
            <p>
              <span className="font-bold text-gray-400">Email:</span>{' '}
              pradipm.info@gmail.com
            </p>
            <p>
              <span className="font-bold text-gray-400">From:</span> Kolkata,
              India
            </p>
          </div>

          <button
            onClick={() => {
              window.open(cvURL);
            }}
            className=" flex item-center mt-8 px-6 py-2 border-2 border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-black transition-all rounded-lg">
            Download CV
            {/* <IoMdDownload className="mt-1 ml-2 text-gray-500 hover:text-black transition-all" size={15} /> */}
          </button>
        </div>
      </div>
    </section >
  );
}