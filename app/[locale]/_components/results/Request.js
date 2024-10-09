"use client";
import Image from "next/image";
import warning from "@/public/svg/warning.svg";
import { useState, useEffect } from "react";
import { Input, Select, Button, Form, Alert } from "antd";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

// Функция для кодирования строки в Base64
const toBase64 = (str) => {
  return Buffer.from(str).toString("base64");
};

const { Option } = Select;

export default function Request() {
  const t = useTranslations("Results");

  // Стейты для пользовательского ввода
  const [medNumber, setMedNumber] = useState("");
  const [signNumber, setSignNumber] = useState("");
  const [language, setLanguage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Сохраняем выбранный язык в сессии, если изменился
  useEffect(() => {
    if (language) {
      sessionStorage.setItem("selectedLanguage", language);
    }
  }, [language]);

  // При первой загрузке проверяем, есть ли сохраненный язык
  useEffect(() => {
    const savedLanguage = sessionStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Функция для генерации и редиректа
  const handleGenerateLink = () => {
    if (!medNumber || !signNumber || !language) {
      // Проверяем все обязательные поля
      let error = "";
      if (!medNumber) error += t("placeholders.card") + " ";
      if (!signNumber) error += t("placeholders.sign") + " ";
      if (!language) error += t("placeholders.choose-lang");
      setErrorMessage(`${t("error")} ${error}`);
    } else {
      const encodedMedNumber = toBase64(medNumber);
      const encodedSignNumber = toBase64(signNumber);
      // Генерация ссылки с параметрами
      const link = `http://result.interlab.uz/ALISRESULT/HASTASONUC_HASTA.ASPX?OP=${encodedSignNumber}&HDN=${encodedMedNumber}&lang=${language}`;
      // Открываем ссылку в новой вкладке
      window.open(link, "_blank");
      setErrorMessage(""); // Очищаем ошибку, если все прошло успешно
    }
  };

  return (
    <div className="w-full bg-white py-14 px-2">
      <div className="w-full max-w-[1440px] flex flex-col gap-10 mx-auto">
        <div className="w-full flex flex-col gap-5">
          <Form
            className="grid lg:grid-cols-3 w-full gap-5 grid-cols-1"
            layout="vertical"
          >
            <Form.Item
              name="mednumber"
              rules={[{ required: true, message: t("placeholders.card") }]}
            >
              <Input
                type="number"
                placeholder={`№ ${t("placeholders.card")}`}
                className="border-neutral-300 rounded-xl py-3"
                value={medNumber}
                onChange={(e) => setMedNumber(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              name="signnumber"
              rules={[{ required: true, message: t("placeholders.sign") }]}
            >
              <Input
                type="number"
                placeholder={`№ ${t("placeholders.sign")}`}
                className="border-neutral-300 rounded-xl py-3"
                value={signNumber}
                onChange={(e) => setSignNumber(e.target.value)}
              />
            </Form.Item>

            <Form.Item name="language" rules={[{ required: true }]}>
              <Select
                className="rounded-xl"
                placeholder={t("placeholders.choose-lang")}
                size="large"
                value={language}
                onChange={(value) => setLanguage(value)}
              >
                <Option value="ru">Русский</Option>
                <Option value="en">English</Option>
              </Select>
            </Form.Item>
          </Form>

          {errorMessage && (
            <Alert
              message={t("error")}
              description={errorMessage}
              type="error"
              showIcon
              className="my-4"
            />
          )}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="gap-4 px-4 py-4 flex rounded-2xl bg-red-100 md:items-center text-red-400"
          >
            <Image
              src={warning}
              width={27}
              height={27}
              alt="Warning Icon"
              className="w-auto h-full"
            />
            {t("warning")}
          </motion.div>
        </div>

        <div className="w-full flex justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              type="primary"
              onClick={handleGenerateLink}
              className="bg-red-400 text-white py-5 px-14 text-sm font-semibold rounded-full"
            >
              {t("get")}
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
