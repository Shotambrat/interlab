import Sale from "@/app/_components/Sale";

export default function page() {
  return (
    <div>
      <div className="w-full bg-white ">
        <div className="max-w-[1440px] w-full mx-auto py-24 px-2">
          <h2 className="text-4xl max-md:text-2xl font-bold mb-4 xl:w-[50%]">
            Выгодные предложения и полезные советы от клиники{" "}
            <span className="text-red-500">Intermed</span>
          </h2>
          <Sale />
        </div>
      </div>
    </div>
  );
}
