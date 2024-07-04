const SocialIcon = ({ src }) => (
  <img loading="lazy" src={src} className="shrink-0 aspect-square w-[45px]" alt="Social media icon" />
);

const FooterLink = ({ text }) => (
  <div className="mt-5">{text}</div>
);

const FooterSection = ({ title, links }) => (
  <div className="flex flex-col slg:w-6/12 max-md:ml-0 max-md:w-full">
    <nav className="flex flex-col grow text-xl text-neutral-900  max-slg:mt-10">
      <h3>{title}</h3>
      {links.map((link, index) => (
        <FooterLink key={index} text={link} />
      ))}
    </nav>
  </div>
);

function Footer() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col w-full bg-slate-50 max-md:max-w-full">
        <header className="flex justify-center items-center px-16 py-10 w-full bg-slate-50 max-md:px-5 max-md:max-w-full">
          <div className="flex justify-between gap-5 w-full max-w-[1434px] max-slg:flex-wrap max-md:max-w-full">
            <div className="flex flex-col self-start">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/604506ca9fb5f43eea55e3238ed5f23c1f55c1340299778968841854431be548?apiKey=e791e0f42eab4556ac944da69358f29b&" className="self-center aspect-[3.7] w-[223px]" alt="Company logo" />
              <div className="flex gap-3 pr-16 mt-8 max-md:pr-5">
                <SocialIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c71bc10c400533dd9fbac412ae42426654bb0fef5b1493037ca61e6bc831a43?apiKey=e791e0f42eab4556ac944da69358f29b&" />
                <SocialIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8103f6fceeb51d89439e1b44b26a2540f94da390091b4ea7611417d4e44da97?apiKey=e791e0f42eab4556ac944da69358f29b&" />
                <SocialIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/9936081e82166164b2f73874d6ae5898bda1496a1b28684a3a9060ca27906cc3?apiKey=e791e0f42eab4556ac944da69358f29b&" />
              </div>
            </div>
            <div className="flex-auto max-w-full lg:flex lg:justify-end">
              <div className="flex lg:w-2/3 gap-5 max-mdl:flex-col max-md:gap-0">
                <FooterSection
                  title="О нас"
                  links={["Сертификаты", "Оборудование", "Прайслист - узнать цены"]}
                />
                <FooterSection
                  title="Для юридических лиц"
                  links={["Как подготовиться к сдаче анализов", "Предложения и жалобы"]}
                />
              </div>
            </div>
          </div>
        </header>
        <footer className="flex flex-col items-center px-16 pb-2.5 w-full text-base text-red-400 bg-slate-50 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col w-full max-w-[1440px] max-md:max-w-full">
            <div className="shrink-0 h-px bg-neutral-200 max-md:max-w-full" />
            <div className="flex gap-5 mt-2.5 max-md:flex-wrap max-md:max-w-full">
              <p className="flex-auto my-auto">© 2024 Interlab Все права защищены</p>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e71e8e760feb8505dc11537647ee4a21c53f47f09a41e2305f569ebc14d6c36?apiKey=e791e0f42eab4556ac944da69358f29b&" className="shrink-0 max-w-full aspect-[1.82] w-[130px]" alt="Company certification" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;