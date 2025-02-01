'use client';
import HomeScreen from "@/app/components/home/Homecomponent";
import MainLayout from "@/app/components/mainlayout/MainLayout";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";
export default function ProjectScreen() {
  return (
    <>
      <MainLayout
        // handleHomeClick={customHandleHomeClick}
        handleHomeClick={() => { }}
      >
        <div className="h-20 bg-custom-background1 text-white"></div>

        <div className="flex flex-wrap bg-custom-background1 text-white ">
          {[1, 1, 1, 1, 1, 1, 1].map((item, index) => {
            return (
              <div key={index}
              // className="w-full p-4 sm:w-1/1 lg:w-1/2  md:w-1/1 xl:w-1/2"
              >
                <div
                // className="flex flex-wrap p-7"
                >

                  <div
                    className="m-3"
                  // className="w-full p-4 sm:w-3/5 lg:w-1/2  md:w-1/2 xl:w-1/2"
                  >
                    <div className="flex items-center justify-center ">
                      <div>
                        <div className="max-w-sm bg-gray-900 text-white p-6 rounded-2xl shadow-lg">
                          <div
                            // className="relative w-full h-56 rounded-lg overflow-hidden"
                            className="relative w-50 h-100 rounded-lg overflow-hidden"
                          >
                            <Image
                              src="https://drive.usercontent.google.com/download?id=1bRRqxsjFxOsooqoQ2gAcOE9Fss4NC06w&export=view&authuser=0"
                              alt="Profile" layout="fill" objectFit="cover"
                            />
                          </div>
                          <h2 className="text-xl font-bold mt-4">Vrasio</h2>
                          <p className="text-gray-400">React Native</p>
                          <p className="text-gray-300 mt-2">
                            Affordable Stays, Priceless Adventures! · Get 50% OFF on Guest Service Fees* · Enjoy No Hosting Fees*.
                          </p>

                          <div className="mt-5 flex flex-col sm:flex-row gap-4">
                            <a href="https://play.google.com/store"
                              target="_blank" rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg transition-transform duration-200 hover:scale-105"
                            >
                              <FaGooglePlay size={24} />
                              <span className="text-lg font-semibold">Google Play</span>
                            </a>

                            <a href="https://www.apple.com/app-store/"
                              target="_blank" rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg transition-transform duration-200 hover:scale-105"
                            >
                              <FaApple size={24} />
                              <span className="text-lg font-semibold">App Store</span>
                            </a>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </MainLayout>
    </>
  );
}
