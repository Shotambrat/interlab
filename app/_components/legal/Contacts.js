import ButtonModalRedBg from "../buttons/ButtonModalRedBg";

export default function Contacts() {
  return (
    <div className="flex w-full max-mdl:flex-col max-w-[1440px] px-2 mx-auto max-mdl:gap-5">
      <div className="flex-1 flex flex-col gap-6">
        <h3 className="text-4xl max-mdx:text-3xl font-bold">
          Связаться с нами
        </h3>
        <p className="text-neutral-400 w-full max-w-[400px]">
          Свяжитесь с нами, чтобы узнать больше о наших услугах для юридических
          лиц и обсудить условия партгерства
        </p>
        <a href="tel:+99989898989" className="max-mdl:hidden">
          <ButtonModalRedBg title={"Позвонить"} />
        </a>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex flex-col gap-2 max-mdl:flex-1">
          <a className="text-2xl font-medium" href="tel:+998971504747">
            +998 (97) 150 47 47
          </a>
          <p className="text-neutral-400">Телефон для связи 1</p>
        </div>
        <hr />
        <div className="flex flex-col gap-2 max-mdl:flex-1">
          <a className="text-2xl font-medium" href="tel:+998971504747">
            +998 (97) 150 47 47
          </a>
          <p className="text-neutral-400">Телефон для связи 1</p>
        </div>
        <hr />
      </div>
      <a href="tel:+99989898989" className="mdl:hidden">
        <ButtonModalRedBg title={"Позвонить"} />
      </a>
    </div>
  );
}
