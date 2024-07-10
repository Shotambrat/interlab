import AddressItem from "./AddressItem";
import arrowDown from "@/public/svg/arrow-down-red.svg";
import Image from "next/image";

export default function Filter() {
  const data = [
    {
      title: "Intermed Медецинский центр",
      address: "Юнусабадский районб ул Чинабад 10А",
      graphic: ["7:00 - 23:00 (пн-сб)", "7:00 - 17:00 (вс)"],
      tel: "1156",
      url: "/",
    },
    {
      title: "Intermed Медецинский центр",
      address: "Юнусабадский районб ул Чинабад 10А",
      graphic: ["7:00 - 23:00 (пн-сб)", "7:00 - 17:00 (вс)"],
      tel: "1156",
      url: "/",
    },
    {
      title: "Intermed Медецинский центр",
      address: "Юнусабадский районб ул Чинабад 10А",
      graphic: ["7:00 - 23:00 (пн-сб)", "7:00 - 17:00 (вс)"],
      tel: "1156",
      url: "/",
    },
    {
      title: "Intermed Медецинский центр",
      address: "Юнусабадский районб ул Чинабад 10А",
      graphic: ["7:00 - 23:00 (пн-сб)", "7:00 - 17:00 (вс)"],
      tel: "1156",
      url: "/",
    },
    {
      title: "Intermed Медецинский центр",
      address: "Юнусабадский районб ул Чинабад 10А",
      graphic: ["7:00 - 23:00 (пн-сб)", "7:00 - 17:00 (вс)"],
      tel: "1156",
      url: "/",
    },
    {
      title: "Intermed Медецинский центр",
      address: "Юнусабадский районб ул Чинабад 10А",
      graphic: ["7:00 - 23:00 (пн-сб)", "7:00 - 17:00 (вс)"],
      tel: "1156",
      url: "/",
    },
    {
      title: "Intermed Медецинский центр",
      address: "Юнусабадский районб ул Чинабад 10А",
      graphic: ["7:00 - 23:00 (пн-сб)", "7:00 - 17:00 (вс)"],
      tel: "1156",
      url: "/",
    },
    {
      title: "Intermed Медецинский центр",
      address: "Юнусабадский районб ул Чинабад 10А",
      graphic: ["7:00 - 23:00 (пн-сб)", "7:00 - 17:00 (вс)"],
      tel: "1156",
      url: "/",
    },
    {
      title: "Intermed Медецинский центр",
      address: "Юнусабадский районб ул Чинабад 10А",
      graphic: ["7:00 - 23:00 (пн-сб)", "7:00 - 17:00 (вс)"],
      tel: "1156",
      url: "/",
    },
    {
      title: "Intermed Медецинский центр",
      address: "Юнусабадский районб ул Чинабад 10А",
      graphic: ["7:00 - 23:00 (пн-сб)", "7:00 - 17:00 (вс)"],
      tel: "1156",
      url: "/",
    },
    {
      title: "Intermed Медецинский центр",
      address: "Юнусабадский районб ул Чинабад 10А",
      graphic: ["7:00 - 23:00 (пн-сб)", "7:00 - 17:00 (вс)"],
      tel: "1156",
      url: "/",
    },
  ];
  return (
    <div className="mt-12 relative w-full max-w-[1440px] mx-auto px-2">
      <div className="grid grid-cols-1 mdl:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {data.map((item, index) => {
          return (
            <AddressItem
              key={index}
              title={item.title}
              address={item.address}
              graphic={item.graphic}
              tel={item.tel}
              url={item.url}
            />
          );
        })}
      </div>
      <div className="w-full flex justify-center mt-12 ">
        <button className="flex items-center gap-4 text-rose-400 font-bold text-md">
          Посмотреть все 
          <Image
          src={arrowDown}
          width={100}
          height={100}
          alt="Arrow Down Icon Red"
          className="h-3 w-3"
          />
        </button>
      </div>
    </div>
  );
}
