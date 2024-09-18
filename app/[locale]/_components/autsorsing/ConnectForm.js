import Image from "next/image";
// import line from "@/public/svg/Illustration.svg";

export default function Application() {
    return (
        <div className="mt-[100px] md:mt-[120px] lg:mt-[150px]">
            <div className="relative overflow-hidden py-5 lg:py-10  bg-rose-50 rounded-[30px] mdx:rounded-[50px] max-md:max-w-full mdx:min-h-[650px] slg:min-h-full">
                <div className="relative z-10 flex lg:justify-around gap-5 max-slg:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[50%] lg:w-[50%] xl:w-[34%] max-md:ml-0 max-slg:w-full">
                        <div className="flex flex-col grow text-2xl mdx:text-4xl font-bold text-red-400 max-slg:max-w-full">
                            <h2 className="text-[27px] md:text-[33px] mdx:text-[38px] lg:text-[40px] justify-center self-end max-w-full w-[814px] max-md:max-w-full px-4 ">
                                Остались вопросы? <br />Свяжитесь с нами!
                            </h2>
                        </div>
                        <div className="absolute bottom-[-50px] left-0 z-[-2] w-full   slg:block hidden">
                            {/* <Image
                                src={line}
                                width={1000}
                                height={1000}
                                alt="Cost"
                                className="h-auto w-full mdx:max-h-[189px] max-w-[540px]"
                            /> */}
                        </div>
                    </div>
                    <div className="flex flex-col w-[32%] max-md:ml-0 max-slg:w-full">
                        <form className="relative flex flex-col text-base max-md:mt-10 max-md:max-w-full">
                            <div className="flex flex-col text-red-400 max-md:max-w-full px-4 lg:px-10">
                                <label htmlFor="fullName" className="sr-only">
                                    ФИО
                                </label>
                                <input
                                    id="fullName"
                                    type="text"
                                    className="focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 appearance-none justify-center items-start px-4 py-4 bg-white rounded-xl max-md:pr-5 max-md:max-w-full"
                                    placeholder="ФИО *"
                                    required
                                />
                                <label htmlFor="phoneNumber" className="sr-only">
                                    Номер телефона
                                </label>
                                <input
                                    id="phoneNumber"
                                    type="tel"
                                    className="focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 appearance-none justify-center items-start px-4 py-4 mt-4 bg-white rounded-xl max-md:pr-5 max-md:max-w-full"
                                    placeholder="Номер телефона *"
                                    required
                                />
                                <label htmlFor="email" className="sr-only">
                                    E-mail
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 appearance-none justify-center items-start px-4 py-4 mt-4 bg-white rounded-xl max-md:pr-5 max-md:max-w-full"
                                    placeholder="E-mail"
                                />
                                <label htmlFor="comment" className="sr-only">
                                    Сообщение
                                </label>
                                <input
                                    id="comment"
                                    className="focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 appearance-none justify-center items-start px-4 py-4 mt-4 bg-white rounded-xl text-neutral-400 max-md:pr-5 max-md:max-w-full"
                                    placeholder="Сообщение"
                                ></input>
                            </div>
                            <div className="absolute bottom-[127px] left-0 z-[-2] w-full  mdx:bottom-[-160px] slg:hidden">
                                {/* <Image
                                    src={line}
                                    width={1000}
                                    height={1000}
                                    alt="Cost"
                                    className="h-auto w-full mdx:max-h-[189px] max-w-[540px]"
                                /> */}
                            </div>
                            <button
                                type="submit"
                                className="justify-center px-10 py-4 mt-6 font-bold text-center text-white bg-red-400 rounded-[100px] max-md:px-5 md:max-w-[230px] max-w-full md:ml-4 lg:ml-10"
                            >
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}
