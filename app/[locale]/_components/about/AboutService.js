const AboutService = () => {
  return (
      <div className="w-full max-w-[1440px] mx-auto mt-24">
        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-bold mb-6 ml-6">Наши услуги</h2>
          <div className="grid grid-cols-1 mdl:grid-cols-2 text-rose-400">
            <div className="p-6 border-b border-r border-gray-200">
              <h3 className="text-2xl font-semibold mb-4">
                ЛАБОРАТОРНЫЕ ИССЛЕДОВАНИЯ
              </h3>
              <p className="text-neutral-400">
                Intermed предлагает более 1000 видов лабораторных анализов,
                включая биохимические, гематологические, иммунологические и
                генетические исследования. Наши лаборатории оснащены новейшими
                автоматическими анализаторами, что обеспечивает точность и
                надежность результатов.
              </p>
            </div>
            <div className="p-6 border-l border-b border-gray-200 ">
              <h3 className="text-2xl font-semibold mb-4">
                ДИАГНОСТИЧЕСКИЕ УСЛУГИ
              </h3>
              <p className="text-neutral-400">
                Мы предлагаем высокотехнологичную диагностику, включая УЗИ,
                цифровую рентгенографию, эндоскопию, ЭКГ и доплерографию.
                Современное оборудование позволяет выявлять заболевания на
                ранних стадиях и эффективно контролировать процесс лечения.
              </p>
            </div>
            <div className="p-6 border-t border-r border-gray-200">
              <h3 className="text-2xl font-semibold mb-4">
                КОНСУЛЬТАЦИИ СПЕЦИАЛИСТОВ
              </h3>
              <p className="text-neutral-400">
                В нашей клинике работают высококвалифицированные врачи различных
                специальностей, включая кардиологов, неврологов, эндокринологов,
                гастроэнтерологов, пульмонологов и других специалистов. Мы
                предлагаем консультации и комплексное обследование для точной
                диагностики и эффективного лечения.
              </p>
            </div>
            <div className="p-6 border-t border-l border-gray-200">
              <h3 className="text-2xl font-semibold mb-4">ФИЗИОТЕРАПИЯ</h3>
              <p className="text-neutral-400">
                Intermed оснащен передовым физиотерапевтическим оборудованием.
                Мы предлагаем широкий спектр процедур, таких как ударно-волновая
                терапия, электрофорез, инфракрасная лазеротерапия и
                миостимуляция. Эти методы помогают в реабилитации и лечении
                различных заболеваний, улучшая общее состояние здоровья
                пациентов.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AboutService;
