'use client';
import React, { useEffect, useState } from "react";
export default function HomeScreen(props: any) {

  const staticText = "I'm "; // The part that stays the same
  const dynamicTexts = [
    "Pradip Mondal.",
    "a Freelancer.",
    "a App Developer.",
    "a Web Developer.",
  ]; // The dynamic part

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [dynamicIndex, setDynamicIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true); // To control cursor visibility
  const [pause, setPause] = useState(false); // Pause after completing typing

  useEffect(() => {
    const currentDynamicText = dynamicTexts[dynamicIndex];

    const handleTyping = () => {
      if (!pause) {
        if (!isDeleting && index < currentDynamicText.length) {
          // Typing forward for the dynamic part
          setDisplayedText(staticText + currentDynamicText.slice(0, index + 1));
          setIndex(index + 1);
        } else if (isDeleting && index > 0) {
          // Deleting the dynamic part
          setDisplayedText(staticText + currentDynamicText.slice(0, index - 1));
          setIndex(index - 1);
        } else if (!isDeleting && index === currentDynamicText.length) {
          // Start a pause before deleting
          setPause(true);
          setTimeout(() => {
            setIsDeleting(true);
            setPause(false);
          }, 1500); // Pause for 1.5 seconds before deleting
        } else if (isDeleting && index === 0) {
          // Switch to the next dynamic text after deleting
          setIsDeleting(false);
          setDynamicIndex((prevIndex) => (prevIndex + 1) % dynamicTexts.length);
          setPause(true);
          setTimeout(() => setPause(false), 500); // Small pause before typing next text
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 80 : 200); // Faster for deleting

    return () => clearTimeout(timeout);
  }, [index, isDeleting, dynamicIndex, dynamicTexts, pause]);

  // Cursor Blinking Effect
  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Blink every 500ms

    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <>
      <div
        className="relative h-[80vh] w-full h-screen bg-[url('images/image/intro-bg.jpg')] bg-cover bg-center bg-no-repeat"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Content */}
        <div className="relative flex flex-col items-center justify-center text-center text-white h-full px-4">
          <h2 className="text-xl md:text-2xl uppercase tracking-wider">Welcome</h2>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            {displayedText}{showCursor ? "|" : " "}{" "}
          </h1>
          <p className="mt-4 text-base md:text-lg">
            based in Kolkata, India.
          </p>
          <div className="flex juctify-center">
            <button className=" mt-8 px-6 py-2 border-2 rounded-[5px] border-white-500 text-white-500 
            hover:bg-white hover:text-red-400 hover:text-bold transition-all">
              Hire Me
            </button>
            <div className="w-[10]"></div>
            <button className=" mt-8 px-10 py-2 border-2 rounded-[5px] border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all">
              My Projects
            </button>
          </div>

        </div>
      </div>
    </>
  );
}