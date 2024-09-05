export default function Info() {
  return (
    <div className="w-full max-w-[1440px] flex flex-col gap-10 mx-auto px-2">
      <div className="flex w-full max-mdl:flex-col max-mdl:gap-8">
        <div className="flex-1">
          <h2 className="text-4xl max-mdx:text-3xl font-bold w-full max-w-[60%]">
            Корпоротивное обслуживание
          </h2>
        </div>
        <div className="flex-1 flex flex-col gap-4 leading-5">
          <p className="w-full slg:max-w-[70%]">
            Мы предоставляем широкий спектр медицинских услуг для компаний,
            включая профилактические осмотры, диагностику, вакцинацию и лечение.
          </p>
          <p className="w-full slg:max-w-[70%]">
          Наши программы корпоративного здоровья разработаны для улучшения
          благополучия ваших сотрудников и повышения их производительности.
          </p>
        </div>
      </div>
      <hr />
      <div className="flex w-full max-mdl:flex-col max-mdl:gap-8">
        <div className="flex-1">
          <h2 className="text-4xl max-mdx:text-3xl font-bold w-full max-w-[60%]">
            Партнерство с клиниками
          </h2>
        </div>
        <div className="flex-1 flex flex-col gap-4 leading-5">
          <p className="w-full slg:max-w-[70%]">
          Клиника Intermed сотрудничает с ведущими медицинскими учреждениями, чтобы обеспечить качественное и своевременное обслуживание пациентов.
          </p>
          <p className="w-full slg:max-w-[70%]">
          Мы предлагаем выгодные условия партнёрства, включая обмен опытом, совместные медицинские проекты и взаимное направление пациентов.
          </p>
        </div>
      </div>
    </div>
  );
}
