import Navigation from "@/app/[locale]/_components/Navigation";
import Logo from "@/app/[locale]/_components/Logo";
import Tools from "@/app/[locale]/_components/Tools";

function Header({locale}) {

  const navOptions = [
    {
      id: 1,
      name: 'ЦКДЛ',
      url: '/'
    },
    {
      id: 2,
      name: 'Анализы',
      url: '/analyze'
    },
    {
      id: 3,
      name: 'Услуги',
      url: '/services'
    },
    {
      id: 4,
      name: 'Врачи',
      url: '/doctors'
    },
    {
      id: 5,
      name: 'Адреса',
      url: '/addresses'
    },
    {
      id: 6,
      name: 'О нас',
      url: '/about'
    },
  ];

  return (
    <header className="flex justify-center h-[90px] max-mdx:h-[70px] border items-center pr-2 lg:px-16 py-3 bg-white z-10 relative transition-all duration-150">
      <div className="flex gap-5 justify-between items-center w-full  max-w-[1440px] relative transition-all duration-150">
        <Logo />
        <Navigation locale={locale} navOptions={navOptions} />
        <Tools locale={locale} navOptions={navOptions} />
      </div>
    </header>
  );
}

export default Header;