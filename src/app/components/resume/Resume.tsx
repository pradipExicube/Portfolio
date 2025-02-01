'use client';
import React, { useEffect, useState } from "react";
import { IoMdDownload } from "react-icons/io";
export default function Resumecomponent() {

  const cvURL =
    "https://drive.google.com/file/d/1NZY5ywhj6T06tjJ3BJoGG8hypX4afsj2/view?usp=sharing";

  const education = [
    {
      id: 0,
      s_name: "BACHELOR OF COMPUTER APPLICATION",
      s_description: "Techno India institute of technology",
      s_year: "2011-2014",
    },
    {
      id: 1,
      s_name: "HIGHER SECONDARY SCHOOL",
      s_description: "Jayangra Adarsha Vidyamandir",
      s_year: "2010-2011",
    },
    {
      id: 2,
      s_name: "SECONDARY SCHOOL",
      s_description: "Prafulla kanan Adarsha Vidyamandir",
      s_year: "2008-2009",
    },
  ];

  const experiences = [
    {
      id: 0,
      s_name: "APPLICATION DEVELOPER",
      s_description: "Ivan Infotech Pvt. Ltd.",
      s_year: "2019-Present",
    },
    {
      id: 1,
      s_name: "SOFTWARE DEVELOPER",
      s_description: "Exicube App Solutions",
      s_year: "2017-2019",
    },
    {
      id: 2,
      s_name: "SOFTWARE DEVELOPER",
      s_description: "Purple Fox Labs",
      s_year: "2016-2017",
    },
  ];

  const mySkills = [
    { id: 0, s_name: "Javascript", score: "60%" },
    { id: 1, s_name: "React Native", score: "65%" },
    { id: 2, s_name: "Ionic Framework", score: "60%" },
    { id: 3, s_name: "Typescript", score: "50%" },
    { id: 4, s_name: "React JS", score: "50%" },
    { id: 5, s_name: "HTML & CSS", score: "55%" },
  ];


  return (
    <section className="bg-black text-white py-16 px-6 md:px-10">
      {/* Section Header */}
      <div style={{ position: 'relative' }}>
        <h2 className="relative text-6xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-8xl text-center font-extrabold text-gray-200 opacity-10 mb-8 ">
          SUMMARY
        </h2>
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-red p-4 
        sm:top-5 p-4 md:top-5 p-4 lg:top-5 p-4 xl:top-5 p-4">
          <h3 className="text-lg text-white-500 font-bold uppercase text-center">
            Resume
          </h3>
          <div className="w-2/3 mx-auto">
            <div className="rounded-[5px]" style={{ height: 2, width: 50, backgroundColor: 'red', alignSelf: 'center' }}>

            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap p-7">
        <div className="w-full p-4 sm:w-1/1 lg:w-1/2  md:w-1/1 xl:w-1/2">
          <div><h2 className="text-xl md:text-2xl font-bold">My Education</h2></div>
          <div className="mt-5">
            {education.map((item, index) => {
              return (
                <div key={index} className="w-full rounded-[5] ">
                  <div className="">
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <div className="w-[120]">
                        <div className="w-[120] h-[40] rounded-[5] bg-red-500 flex items-center justify-center text-center">
                          {item?.s_year}
                        </div>
                        {(education.length - 1) != index ?
                          <div className="flex justify-center">
                            <div className="h-[120] sm:h-[100] md:h-[80]" style={{ width: 1, background: 'red' }}></div>
                          </div>
                          : null}
                      </div>
                      <div className="pl-5 mt-[-6]">
                        <h2 className="text-lg md:text-lg font-bold text-red-400">{item?.s_name}</h2>
                        <h2 className="text-base sm:text-base md:text-base font-medium text-gray-300">{item?.s_description}</h2>
                      </div>

                    </div>


                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="w-full p-4 sm:w-1/1 lg:w-1/2  md:w-1/1 xl:w-1/2">
          <div><h2 className="text-xl md:text-2xl font-bold">My Experiences</h2></div>
          <div className="mt-5">
            {experiences.map((item, index) => {
              return (
                <div key={index} className="w-full rounded-[5] ">
                  <div className="">
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <div className="w-[120]">
                        <div className="w-[120] h-[40] rounded-[5] bg-red-500 flex items-center justify-center text-center">
                          {item?.s_year}
                        </div>
                        {(experiences.length - 1) != index ?
                          <div className="flex justify-center">
                            <div className="h-[120] sm:h-[100] md:h-[80]" style={{ width: 1, background: 'red' }}></div>
                          </div>
                          : null}
                      </div>
                      <div className="pl-5 mt-[-6]">
                        <h2 className="text-lg md:text-lg font-bold text-red-400">{item?.s_name}</h2>
                        <h2 className="text-base sm:text-base md:text-base font-medium text-gray-300">{item?.s_description}</h2>
                      </div>

                    </div>


                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>



      <div className="flex juctify-center item-center p-7 pb-0 ">
        <h2 className="text-xl md:text-2xl font-bold">My Skills</h2>
      </div>

      <div className="flex flex-wrap p-4 pt-0">
        {mySkills.map((item, index) => {
          return (
            <div key={item?.id} className="w-full p-4 sm:w-1/2 lg:w-1/2  md:w-1/1 xl:w-1/2">
              <div>
                <div className="pb-3">{item?.s_name}</div>
                <div className="w-3.5/4 bg-gray-200 rounded-[3] h-5">
                  <div
                    className="bg-red-500 h-5 rounded-[3] flex justify-center"
                    style={{ width: item?.score }}
                  >
                    <h3 className=" text-sm text-center" >{item?.score}</h3>
                  </div>
                </div>

              </div>
            </div>
          )
        })}
      </div>


      <div className="w-full flex justify-center">
        <button
          onClick={() => {
            window.open(cvURL);
          }}
          className="flex mt-8 px-6 py-2 border-2 rounded-lg border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all"
        >
          Download CV
          <IoMdDownload className="mt-1 ml-2 text-white-400" size={15} />
        </button>
      </div>
    </section >
  );
}