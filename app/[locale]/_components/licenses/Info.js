const data = [
  {
    title: "RIQAS",
    description:
      "RIQAS (Randox International Quality Assessment Scheme) - это одна из престижных программ по внешней оценке качества лабораторий в мире. Программы контроля качества RIQAS признаны национальными и международными сертификационными организациями. \n\nВ этих программах принимают участие более 32 000 лабораторий в 123 странах мира. \n\nНезависимый внешний контроль качества - это единственный объективный метод подтверждения качества и достоверности результатов лабораторных исследований. \n\nУспешное прохождение сертификации по программе международного внешнего контроля качества RIQAS подтверждает высокое качество работы лабораторий и ее сотрудников, а также гарантирует качественное и своевременное обслуживание здоровья пациентов, обеспечивает постановку точного диагноза и назначение правильного лечения пациенту.",
  },
  {
    title: "ФСВОК",
    description:
      "Целью ФСВОК является оказание помощи клинико-диагностическим лабораториям в обеспечении качества выполняемых исследований посредством предоставления им информации о правильности результатов исследования контрольных образцов, рекомендаций по устранению источников выявляемых ошибок и совершенствованию используемых методик. \n\nДля обеспечения объективности результатов исследования контрольных образцов, представляемых клинико-диагностическими лабораториями в ФСВОК, и с целью исключения подмены административными санкциями помощь, предоставляемая лабораториям в обеспечении качества выполняемых исследований, в ФСВОК соблюдается конфиденциальность результатов оценки качества исследований в конкретной лаборатории. \n\nПо окончании года участники ФСВОК получают свидетельство, в котором указываются разделы и число их циклов, в которых лаборатория приняла участие, а также число показателей, включенных в эти циклы.",
  },
];

export default function Info() {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-6">
      <h2 className="text-4xl font-semibold">О лицензиях</h2>
      <div className="w-full grid grid-cols-1 slg:grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div key={index} className="border border-neutral-300 rounded-3xl p-4 flex flex-col gap-4">
            <h1 className="text-xl text-red-400 font-semibold">
              {item.title}
            </h1>
            <p
              dangerouslySetInnerHTML={{
                __html: item.description.replace(/\n/g, "<br />"),
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
