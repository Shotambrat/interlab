const data = [
    {
      title: "Требования",
      descriptions: [
        "• Отличные коммуникативные навыки",
        "• Грамотная речь",
        "• Опыт работы в call-центре приветствуется",
        "• Знание медицинской терминологии будет преимуществом",
        "• Уверенный пользователь ПК",
      ],
    },
    {
      title: "Обязанности",
      descriptions: [
        "• Прием и обработка входящих звонков",
        "• Консультирование клиентов по услугам клиники",
        "• Запись пациентов на прием",
        "• Введение данных в систему",
      ],
    },
    {
      title: "Условия",
      descriptions: [
        "• Официальное трудоустройство",
        "• График работы: полный рабочий день",
        "• Конкурентоспособная заработная плата",
        "• Дружный коллектив и комфортные условия труда",
        "• Обучение и возможность карьерного роста",
      ],
    },
  ];
  
  export default function Info() {
    return (
      <div className="flex flex-col gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-[1440px] mx-auto grid grid-cols-1 mdl:grid-cols-2 gap-8 p-8 border border-neutral-300 rounded-3xl"
          >
            <div>
              <h3 className="text-4xl w-full max-w-[200px] font-semibold">
                {item.title}
              </h3>
            </div>
            <div className="flex flex-col gap-4 w-full">
              {item.descriptions.map((i, index) => (
                <p key={index} className="text-lg">{i}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  