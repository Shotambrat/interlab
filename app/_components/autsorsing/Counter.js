"use client"
import { useState } from "react";

export default function BlockContact() {
    const [costs, setCosts] = useState('');
    const [analyses, setAnalyses] = useState('');
    const [savedMoney, setSavedMoney] = useState(null);
    const [annualSavings, setAnnualSavings] = useState(null);

    const calculateSavings = () => {
        const monthlySavings = costs * 2.5;
        setSavedMoney(monthlySavings);
        setAnnualSavings(2.5 * 12);
    };

    return (
        <div className="px-[15px] mt-[100px] md:mt-[120px] lg:mt-[150px] w-full mx-auto flex flex-col">
            <h2 className="font-bold text-[27px] md:text-[35px] mdx:text-[40px] mb-4">
                Рассчитайте вашу экономию
            </h2>
            <div className="bg-white rounded-[20px] px-[20px] py-[25px] bsh">
                <div className="max-mdx:border-b pb-[25px] mdx:flex mdx:justify-between">
                    <div className="mdx:w-[48%]">
                        <div className="mb-4">
                            <label className="block text-[#000000] mb-2" htmlFor="costs">
                                Текущие затраты на лабораторные услуги (в месяц)
                            </label>
                            <input
                                id="costs"
                                type="number"
                                value={costs}
                                onChange={(e) => setCosts(e.target.value)}
                                className="appearance-none border rounded-[10px] w-full py-3 px-3 mdx:py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline no-spinner"
                                placeholder="Затраты / мес."
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-[#000000] text-[14px] md:text-[16px] mb-2" htmlFor="analyses">
                                Количество анализов в месяц
                            </label>
                            <input
                                id="analyses"
                                type="number"
                                value={analyses}
                                onChange={(e) => setAnalyses(e.target.value)}
                                className="appearance-none border w-full py-3 px-3 mdx:py-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline rounded-[10px] no-spinner"
                                placeholder="Количество анализов / мес."
                            />
                        </div>
                        <button
                            onClick={calculateSavings}
                            className="bg-[#FB6A68] text-white rounded-[100px] font-bold py-[14px] px-4 focus:outline-none focus:shadow-outline text-[14px] md:text-[16px] w-[223px]"
                            type="button"
                        >
                            Рассчитать
                        </button>
                    </div>

                    {savedMoney !== null && (
                        <div className="mt-6 text-left bg-[#F8F9FB] rounded-[10px] p-[15px] mdx:w-[48%] mdx:mt-0">
                            <p className="text-[25px] md:text-[30px] lg:text-[40px] text-[#FB6A68]">~ {savedMoney} млн сум</p>
                            <p className="text-[14px] md:text-[16px] text-[#989898] border-b pb-[20px]">Сэкономленные деньги</p>
                            <p className="text-[25px] md:text-[30px] lg:text-[40px] text-[#151515] pt-[20px]">~ {annualSavings}%</p>
                            <p className="text-[14px] md:text-[16px] text-[#989898]">Годовая экономия</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
