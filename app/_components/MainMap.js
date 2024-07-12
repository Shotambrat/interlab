import AddressItem from "@/app/_components/addresses/AddressItem";
import arrowRightRed from "@/public/svg/arrow-right.svg";
import Image from "next/image";


export default function Map() {
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
    <div className="w-full relative mt-24">
      <div className="w-full max-w-[1440px] relative mx-auto flex flex-col gap-8">
        <h1 className="text-3xl font-semibold">Карта пунктов</h1>
        <div className="relative w-full flex gap-5">
          <div className="flex flex-col gap-4 overflow-y-scroll h-[725px] w-1/3 max-xl:hidden">
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
          <div className="relative w-2/3 max-xl:w-full max-xl:h-[725px]">
            <button className="rounded-full px-4 py-3 bg-red-400 w-[320px] text-white shadow-md shadow-red-400 absolute top-4 left-4 z-10">
              Поиск ближайшей поликлиники
            </button>
            <div className="w-full h-full absolute top-0 left-0 z-0 rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23974.90094303543!2d69.26711311926405!3d41.31185219550986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2931f41f23%3A0x81095e06b654b845!2z0KHQutCy0LXRgCDQkNC80LjRgNCwINCi0LXQvNGD0YDQsA!5e0!3m2!1sru!2s!4v1720602412212!5m2!1sru!2s"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '30px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="py-3 px-6 font-semibold border-red-400 text-red-400 border rounded-full flex gap-2">

          <p>
            Посмотреть все
          </p>

          <Image
          src={arrowRightRed}
          width={100}
          height={100}
          alt="Aroow right red"
          className="w-6 h-6"
          />
          </div>
        </div>
      </div>
    </div>
  );
}
