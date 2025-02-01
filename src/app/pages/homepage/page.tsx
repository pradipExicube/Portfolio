'use client';
import HomeScreen from "@/app/components/home/Homecomponent";
import MainLayout from "@/app/components/mainlayout/MainLayout";
import Image from "next/image";
export default function Dashboard() {
  return (
    <>
      <MainLayout
        // handleHomeClick={customHandleHomeClick}
        handleHomeClick={() => { }}
      >
        <div> <HomeScreen />  </div>
      </MainLayout>
    </>
  );
}
