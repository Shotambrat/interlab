import Main from "@/app/[locale]/_components/Main";

export default async function HomePage({params}) {

  return (
    <div>
      <Main params={params} />
    </div>
  );
}