'use client';
import Link from "next/link";
import { ReactNode } from "react";
import Header from "../header/Header";
interface LayoutProps {
  children: ReactNode;
  handleHomeClick: (value: string) => void;
}
export default function MainLayout({ children, handleHomeClick }: LayoutProps) {
  return (
    <div>
      {/* Header/Navbar */}
      {/* <nav style={{ display: "flex", justifyContent: "space-between", background: "black", padding: "10px", color: "white" }}>
        <h2>PRADIP MONDAL</h2>
        <div>
          <a href="/home#home" onClick={handleHomeClick}>Home</a> |
          <a href="/home#about">About</a> |
          <a href="/home#what-i-do">What I Do</a> |
          <a href="/home#resume">Resume</a> |
          <Link href="/contact-us">Contact Us</Link>
        </div>
      </nav> */}
      <Header clickHeaderLink={(value) => { handleHomeClick(value) }} />

      {/* Page Content */}
      <main>{children}</main>
    </div>
  );
}
