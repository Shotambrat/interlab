import Navigation from "@/app/[locale]/_components/Navigation";
import Logo from "@/app/[locale]/_components/Logo";
import Tools from "@/app/[locale]/_components/Tools";

function Header() {

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
    <header className="flex justify-center items-center px-2 lg:px-16 py-3 bg-white max-md:px-5 z-10 relative">
      <div className="flex gap-1 justify-between items-center w-full max-w-[1440px]">
        <Logo />
        <Navigation navOptions={navOptions} />
        <Tools navOptions={navOptions} />
      </div>
    </header>
  );
}

export default Header;