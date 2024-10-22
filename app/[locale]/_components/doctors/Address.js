import React from 'react';

export default function Address() {
  return (
    <div className="w-full max-w-[1440px] px-2 flex flex-col gap-4">
      <h3 className="text-4xl font-semibold">Адрес клиники</h3>
      <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '400px' }}>
        <a
          href="https://yandex.uz/maps/org/173898485881/?utm_medium=mapframe&utm_source=maps"
          style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
        >
          Intermed Innovation
        </a>
        <a
          href="https://yandex.uz/maps/10335/tashkent/category/medical_center_clinic/184106108/?utm_medium=mapframe&utm_source=maps"
          style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
        >
          Медцентр, клиника в Ташкенте
        </a>
        <a
          href="https://yandex.uz/maps/10335/tashkent/category/medical_laboratory/184106078/?utm_medium=mapframe&utm_source=maps"
          style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '28px' }}
        >
          Медицинская лаборатория в Ташкенте
        </a>
        <iframe
          src="https://yandex.uz/map-widget/v1/?ll=69.291355%2C41.351735&mode=poi&poi%5Bpoint%5D=69.291036%2C41.350889&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D173898485881&z=17.65"
          width="100%"
          height="400"
          frameBorder="1"
          allowFullScreen
          style={{ position: 'relative' }}
        />
      </div>
    </div>
  );
}
