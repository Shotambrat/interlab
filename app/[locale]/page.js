import Main from "@/app/[locale]/_components/Main";

export default function HomePage({params}) {

  return (
    <div>
      <Main params={params} />
    </div>
  );
}