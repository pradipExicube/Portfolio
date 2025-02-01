
'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaTwitter, FaFacebook, FaDribbble, FaLinkedin } from 'react-icons/fa';
import { useRouter } from "next/navigation";
// Define the type for the props of the Header component
interface HeaderProps {
  // onNavClick: (sectionId: string) => void; // onNavClick function with parameter type of string
  clickHeaderLink(sectionId: string): void;
}

// export default function Header({ onNavClick }: HeaderProps) {
export default function Header({ clickHeaderLink }: HeaderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  return (
    <header
      className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50 bg-black text-white py-4"
    >
      <div className="container mx-auto flex justify-between items-center px-5">
        {/* Logo */}
        <h1 className="text-2xl font-bold">PRADIP MONDAL</h1>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open Drawer"
          >
            <FiMenu size={24} />
          </button>
        </div>

        {/* Full Navigation for Desktop */}
        <nav className="hidden md:flex space-x-6">
          {/* <Link href="/home" className="hover:text-red-500">HOME</Link>
          <Link href="#about" className="hover:text-red-500">ABOUT</Link>
          <Link href="#resume" className="hover:text-red-500">WHAT I DO</Link>
          <Link href="#portfolio" className="hover:text-red-500">RESUME</Link>
          <Link href="#contact" className="hover:text-red-500">CONTACT</Link> */}

          <Link href="/home" onClick={() => clickHeaderLink("/home")} className="hover:text-red-500">HOME</Link>
          <Link href="#about" onClick={() => clickHeaderLink("about")} className="hover:text-red-500">ABOUT</Link>
          <Link href="#service" onClick={() => clickHeaderLink("service")} className="hover:text-red-500">WHAT I DO</Link>
          <Link href="#resume" onClick={() => clickHeaderLink("resume")} className="hover:text-red-500">RESUME</Link>
          {/* <Link href="/homepage" onClick={() => clickHeaderLink("contact")} className="hover:text-red-500">CONTACT</Link> */}
          <Link href="#contact" onClick={() => clickHeaderLink("contact")} className="hover:text-red-500">CONTACT</Link>
          <Link href="/project" onClick={() => router.push('project')} className="hover:text-red-500">SHOWCASE</Link>
        </nav>
        {/* <div className=" hidden md:flex space-x-6 text-2x">My CV</div> */}

        {/* Social Media Icons */}
        <div className="hidden md:flex space-x-6 flex space-x-4 text-xl pl-5">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin onClick={() => {
              window.open("https://www.linkedin.com/in/pradip-mondal-43071a104")
            }} />
          </a>
          <a
            // href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaFacebook onClick={() => { window.open("https://www.facebook.com/pradip647/") }} />
          </a>
          <a
            // href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaTwitter onClick={() => { window.open("https://x.com/PradipM48826650") }} />
          </a>
        </div>

      </div>

      {/* Drawer for Mobile */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50">
          <div className="absolute top-0 right-0 w-3/4 max-w-sm bg-white h-full shadow-lg">
            {/* Drawer Header */}
            <div className="flex justify-between items-center p-4 bg-black text-white">
              {/* <h2 className="text-xl font-bold">Menu</h2> */}

              <div className='px-2'>
                <div className="flex space-x-4 text-xl">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                  >
                    <FaLinkedin onClick={() => { window.open("https://www.linkedin.com/in/pradip-mondal-43071a104") }} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                  >
                    <FaFacebook onClick={() => { window.open("https://www.facebook.com/pradip647/") }} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                  >
                    <FaTwitter onClick={() => { window.open("https://x.com/PradipM48826650") }} />
                  </a>
                </div>
              </div>


              <button
                onClick={() => setIsDrawerOpen(false)}
                aria-label="Close Drawer"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Drawer Links */}
            <nav className="flex flex-col space-y-4 p-6">
              <Link
                href="/home"
                className="text-black hover:text-gray-500"
                onClick={() => {
                  setIsDrawerOpen(false)
                  clickHeaderLink("/home")
                }}
              >
                HOME
              </Link>
              <Link
                href="#about"
                className="text-black hover:text-gray-500"
                onClick={() => {
                  setIsDrawerOpen(false)
                  clickHeaderLink("about")
                }}
              >
                ABOUT
              </Link>
              <Link
                href="#service"
                className="text-black hover:text-gray-500"
                onClick={() => {
                  setIsDrawerOpen(false)
                  clickHeaderLink("service")
                }}
              >
                WHAT I DO
              </Link>
              <Link
                href="#resume"
                className="text-black hover:text-gray-500"
                onClick={() => {
                  setIsDrawerOpen(false)
                  clickHeaderLink("resume")
                }}
              >
                RESUME
              </Link>
              <Link
                href="#contact"
                className="text-black hover:text-gray-500"
                onClick={() => {
                  setIsDrawerOpen(false)
                  clickHeaderLink("contact")
                }}
              >
                CONTACT
              </Link>
            </nav>



          </div>
        </div>
      )}
    </header>
  );
}
