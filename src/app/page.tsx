'use client';
import Image from "next/image";
import Header from './components/header/Header';
import Dashboard from "./pages/homepage/page";
import HomeScreen from "./components/home/Homecomponent";
import Aboutcomponent from "./components/about/About";
import Resumecomponent from "./components/resume/Resume";
import Servicescomponent from "./components/services/Services";
import Contactcomponent from "./components/contact/Contact";
import MainLayout from "./components/mainlayout/MainLayout";
import { useRef } from "react";
// import { useRouter } from "next/router";
export default function Home() {

  // const router = useRouter();

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the specific component
  const customHandleHomeClick = (target: string) => {

    // if (target === "contact") {
    //   // router.push('/homepage');
    // } else {
    let targetRef: React.RefObject<HTMLDivElement> | null = null;

    if (target === "") {
      targetRef = homeRef;
    } else if (target === "about") {
      targetRef = aboutRef;
    } else if (target === "service") {
      targetRef = serviceRef;
    } else if (target === "resume") {
      targetRef = resumeRef;
    } else if (target === "contact") {
      targetRef = contactRef;
    }
    console.log("targetRef?.current :", targetRef?.current)
    if (targetRef?.current) {
      // targetRef.current.scrollIntoView({ behavior: "smooth" });
      slowScrollTo(targetRef?.current)
    }
    // }



  };

  // Slow scroll function
  const slowScrollTo = (element: HTMLElement) => {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Duration in ms (2000ms = 2 seconds)

    let startTime: number | null = null;

    const scrollStep = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }
      const timeElapsed = timestamp - startTime;
      const scrollAmount = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, scrollAmount);

      if (timeElapsed < duration) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  // Easing function for smooth acceleration/deceleration
  const easeInOutQuad = (time: number, start: number, change: number, duration: number) => {
    time /= duration / 2;
    if (time < 1) return (change / 2) * time * time + start;
    time--;
    return (-change / 2) * (time * (time - 2) - 1) + start;
  };

  return (
    <>
      {/* <main>
        <HomeScreen />
        <Aboutcomponent />
        <Servicescomponent />
        <Resumecomponent />
      </main> */}
      <MainLayout handleHomeClick={customHandleHomeClick}>
        <div id={''} ref={homeRef}> <HomeScreen />  </div>
        <div id={'about'} ref={aboutRef}><Aboutcomponent /></div>
        <div id={'service'} ref={serviceRef}><Servicescomponent /></div>
        <div id={'resume'} ref={resumeRef}><Resumecomponent /></div>
        <div id={'contact'} ref={contactRef}><Contactcomponent /></div>
      </MainLayout>
    </>
  );
}
