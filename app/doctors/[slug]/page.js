import React from "react";
import DoctorItemHead from "@/app/_components/doctors/DoctorItemHead";
import DoctorItemInfo from "@/app/_components/doctors/DoctorItemInfo";

export default function page() {

  return (
    <div className="px-2 w-full bg-white">
      <div className="w-full max-w-[1400px] flex flex-col gap-32 mx-auto py-12 pb-32">
        <DoctorItemHead />
        <DoctorItemInfo />
      </div>
    </div>
  );
}
