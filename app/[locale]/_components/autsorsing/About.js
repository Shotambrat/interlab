"use client";
import { useState } from "react";
import aboutBanner from "@/public/images/laba.png";
import Image from "next/image";

export default function AboutBanner() {
    return (
        <>
            <div className="w-full flex flex-col pt-10">
                <div className="lg:grid lg:grid-cols-2 lg:items-center">
                    <div className="px-[16px] 2xl:ml-[15%]">
                        <h1 className="text-[27px] leading-tight md:text-[48px] lh lg:text-[55px] font-bold">
                            Аутсорсинг<br /> Лабораторных Услуг от <span className="text-[#FB6A68]">Intermed Innovation</span>
                        </h1>
                        <p className="text-[#5B5B5B] text-[14px] md:text-[18px] lh lg:text-[20px] mt-[12px]">
                            Высокое качество, экономическая выгода и оперативность обработки анализов
                        </p>
                        <button className="bg-[#FB6A68] max-w-[223px] md:max-w-[240px] py-[13px] px-[30px] text-[#fff] font-bold text-[14px] md:text-[16px] mt-[20px] rounded-3xl mb-[20px] lg:mt-[30px]">
                            Рассчитать Экономию
                        </button>
                    </div>
                    <div>
                        <Image
                            src={aboutBanner}
                            width={1500}
                            height={1500}
                            alt="About Banner"
                            className="h-full w-full max-slg:rounded-3xl rounded-bl-3xl object-cover max-lg:rounded-[30px]"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
