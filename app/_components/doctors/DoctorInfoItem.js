
export default function DoctorInfoItem({ key ,title, description }) {
  return (
    <div key={key} className="border border-neutral-200 rounded-3xl px-6 py-6 flex flex-col gap-3">
      <h3 className="text-2xl text-red-400 font-bold">
        {title}
      </h3>
      <div className="flex flex-col gap-1 font-medium">
        {description.map((item, index) => {
            return (
                <p key={index}>{item}</p>
            );
        })}
      </div>
    </div>
  )
}
