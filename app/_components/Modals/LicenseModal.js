import Image from "next/image"

export default function LicenseModal({ d, close }) {
  return (
    <div className="fixed top-0 left-0 z-10 w-full h-screen bg-black bg-opacity-20 flex justify-center items-center px-2 overflow-y-scroll">
      <div className="w-full max-w-[1000px] rounded-3xl bg-white px-8 py-8 flex flex-col lg:flex-row gap-4 relative">
        <div className="flex flex-col lg:flex-row gap-4 w-full overflow-y-auto max-h-[90vh] lg:max-h-[60vh]">
          <div className="lg:sticky top-0">
            <Image
              src={d.imageUrl}
              width={500}
              height={500}
              alt="Image of Licence"
              className="h-full w-full lg:w-auto rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-7 flex-1 overflow-y-auto p-4">
            {d.description.map((item, i) => {
              return item.type === 'header' ? (
                <h2 key={i} className="text-2xl max-mdx:text-xl font-bold leading-7">{item.description}</h2>
              ) : (
                <p key={i} className="text-lg leading-5">{item.description}</p>
              );
            })}
          </div>
        </div>
        <button onClick={close} className="absolute top-4 right-4 text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center">X</button>
      </div>
    </div>
  )
}