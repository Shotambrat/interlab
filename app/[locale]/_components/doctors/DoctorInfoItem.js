export default function DoctorInfoItem({ title, description }) {
  return (
    <div className="border border-neutral-200 rounded-3xl px-6 py-6 flex flex-col gap-3">
      <h3 className="text-2xl text-red-400 font-bold">{title}</h3>
      <div className="flex flex-col gap-1 font-medium">
        {Array.isArray(description) ? (
          description.map((item, index) => (
            <p key={index}>{item}</p>
          ))
        ) : (
          // Split description by \n and map over the resulting array
          description.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))
        )}
      </div>
    </div>
  );
}
