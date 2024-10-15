import arrowDown from "@/public/svg/arrow-down-red.svg";
import Image from "next/image";
import ForPage from "./ForPage"

export default function Filter({ clinicsLocations, sortedClinics , activeClinic}) {
  return (
    <div className="mt-12 relative w-full max-w-[1440px] mx-auto px-2">
      <div className="w-full grid grid-cols-1 mdx:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedClinics.length === 0
          ? clinicsLocations.map((clinic, index) => (
              <ForPage
                key={index}
                title={clinic.name}
                address={clinic.address}
                graphic={[clinic.graphic]}
                tel={clinic.tel}
                url="/"
                className={clinic.id === activeClinic ? "bg-red-100" : ""}
              />
            ))
          : sortedClinics.map((clinic, index) => (
              <ForPage
                key={index}
                title={clinic.name}
                address={clinic.address}
                graphic={[clinic.graphic]}
                tel={clinic.tel}
                url="/"
                className={clinic.id === activeClinic ? "bg-red-100" : ""}
              />
            ))}
      </div>
    </div>
  );
}
