'use client';
import Image from "next/image";
import React, { useEffect, useState } from "react";
import reactLogo from '../../images/image/reactnative.svg';
import ionicLogo from "../../images/image/ionic.svg";
import cordovaLogo from "../../images/image/cordova.svg";

import { SiApachecordova } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiIonic } from "react-icons/di";

export default function Servicescomponent() {

  const cvURL =
    "https://drive.google.com/file/d/1NZY5ywhj6T06tjJ3BJoGG8hypX4afsj2/view?usp=sharing";
  const services = [
    {
      id: 0,
      s_name: "React Native",
      s_description:
        "React Native is an open-source mobile application development framework created by Facebook. It allows developers to build natively rendered mobile apps for Android, iOS, and UWP (Universal Windows Platform) using React, a JavaScript library for building user interfaces",
      s_imgUrl: <FaReact size={50} color="#ff0000" />,
    },
    {
      id: 1,
      s_name: "Ionic Framework",
      s_description:
        "The Ionic Framework is a popular open-source front-end framework for building hybrid mobile apps and progressive web apps. It uses web technologies such as HTML, CSS, and JavaScript to create native-like apps for mobile devices",
      s_imgUrl: <DiIonic size={70} color="#ff0000" />,
    },
    {
      id: 2,
      s_name: "Cordova",
      s_description:
        "Cordova is an open-source framework developed by Apache, primarily used for building hybrid mobile applications. It allows developers to create apps for multiple platforms, including Android and iOS, using a single codebase",
      s_imgUrl: <SiApachecordova size={40} color="#ff0000" />,
    },
    // {
    //   s_name: "React JS",
    //   s_description:
    //     "React JS is a popular JavaScript library used for building user interfaces and single-page applications. Developed by Facebook (now Meta), React allows developers to create reusable UI components and manage the state of complex applications efficiently.",
    //   // s_imgUrl: reactLogo,
    // },
  ];

  return (
    <section className="bg-custom-background1 text-white py-16 px-0 sm:px-0 md:px-10">
      {/* Section Header */}
      <div style={{ position: 'relative' }}>
        <h2 className="relative text-6xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-8xl text-center font-extrabold text-gray-200 opacity-10 mb-8 ">
          SERVICES
        </h2>
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-red p-4 
        sm:top-5 p-4 md:top-5 p-4 lg:top-5 p-4 xl:top-5 p-4">
          <h3 className="text-lg text-white-500 font-bold uppercase text-center">
            What I Do?
          </h3>
          <div className="w-2/5 mx-auto">
            <div className="rounded-[5px]" style={{ height: 2, width: 40, backgroundColor: 'red', alignSelf: 'center' }}>

            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">
        {services.map((item, index) => {
          return (
            <div key={index} className="w-full p-4 sm:w-1/1 lg:w-1/2  md:w-1/1 xl:w-1/2">
              <div className="p-4">
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div>
                    <div className="h-[8vh] w-[8vh] flex items-center justify-center rounded-[5] bg-black">
                      {item?.s_imgUrl}
                    </div>
                  </div>
                  <div className="pl-3">
                    <h2 className="text-xl md:text-2xl font-bold">{item?.s_name}</h2>
                    <h2 className="text-1x md:text-1x font-light">{item?.s_description}</h2>
                  </div>
                </div>


              </div>
            </div>
          )
        })}
      </div>

    </section >
  );
}