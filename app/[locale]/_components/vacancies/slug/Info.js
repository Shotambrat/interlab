import BlockContent from '@sanity/block-content-to-react';

export default function Info({ requirements, responsibilities, conditions, locale }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 mdl:grid-cols-2 gap-8 p-8 border border-neutral-300 rounded-3xl">
        <div>
          <h3 className="text-4xl w-full max-w-[200px] font-semibold">Требования</h3>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <BlockContent blocks={requirements[locale]} />
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 mdl:grid-cols-2 gap-8 p-8 border border-neutral-300 rounded-3xl">
        <div>
          <h3 className="text-4xl w-full max-w-[200px] font-semibold">Обязанности</h3>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <BlockContent blocks={responsibilities[locale]} />
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 mdl:grid-cols-2 gap-8 p-8 border border-neutral-300 rounded-3xl">
        <div>
          <h3 className="text-4xl w-full max-w-[200px] font-semibold">Условия</h3>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <BlockContent blocks={conditions[locale]} />
        </div>
      </div>
    </div>
  );
}
