const AboutService = () => {
    return (
        <div className="w-full max-w-[1440px] mx-auto mt-24">
          <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold mb-6">Достижения</h2>
            <div className="grid grid-cols-1 mdl:grid-cols-2 gap-5 text-rose-400">
              <div className="p-6 border bg-rose-100 rounded-3xl">
                <h3 className="text-2xl font-semibold mb-4">
                  ЦКДЛ
                </h3>
                <p className="text-neutral-400">
                Заборные пункты в каждой семейной поликлинике по г. Ташкенту
                </p>
              </div>
              <div className="p-6 border bg-rose-100 rounded-3xl">
                <h3 className="text-2xl font-semibold mb-4">
                Функциональная диагностика
                </h3>
                <p className="text-neutral-400">
                Большой выбор диагностических услуг позволяющие провести детальное обследование
                </p>
              </div>
              <div className="p-6 border bg-rose-100 rounded-3xl">
                <h3 className="text-2xl font-semibold mb-4">
                Медицинское оборудование
                </h3>
                <p className="text-neutral-400">
                В клинике Intermed используется наилучшее оборудование отвечающее всем международным стандартам
                </p>
              </div>
              <div className="p-6 border bg-rose-100 rounded-3xl">
                <h3 className="text-2xl font-semibold mb-4">Опытные специалисты</h3>
                <p className="text-neutral-400">
                Наши врачи имеют многолетний опыт и высокую квалификацию, постоянно совершенствуются в своей профессии
                </p>
              </div>
            </div>
          </div>
        </div>
    );
  };
  
  export default AboutService;