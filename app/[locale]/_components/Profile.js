import Image from "next/image";
import profile from "@/public/svg/profile-red.svg";
import { useTranslations } from 'next-intl';

function Profile() {
  const t = useTranslations('Header.Login');
  return (
    <button className="flex gap-1 justify-center px-3 text-red-400 hover:text-red-600 hover:bg-rose-200 transition-all duration-300 bg-rose-100 rounded-[100px]">
      <Image
        priority
        src={profile}
        width={25}
        height={25}
        alt="The Wild Oasis logo"
        quality={100}
        className="my-auto"
      />
      <div className="my-auto">{t('login')}</div>
    </button>
  );
}

export default Profile;
