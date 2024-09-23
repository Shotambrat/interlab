"use client";
import { useState, useEffect } from "react";
import { Input, Select, Button, Form, Alert } from "antd";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import axios from "axios";
import { parseStringPromise } from "xml2js"; // Для парсинга SOAP-ответа

const { Option } = Select;

export default function Request() {
  const t = useTranslations("Results");

  const [medNumber, setMedNumber] = useState("");
  const [signNumber, setSignNumber] = useState("");
  const [language, setLanguage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const savedLanguage = sessionStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleGenerateLink = async () => {
    if (!medNumber || !signNumber || !language) {
      let error = "";
      if (!medNumber) error += t("placeholders.card") + " ";
      if (!signNumber) error += t("placeholders.sign") + " ";
      if (!language) error += t("placeholders.choose-lang");
      setErrorMessage(`${t("error")} ${error}`);
    } else {
      try {
        const soapBody = `
          <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <soap:Body>
              <ResultReportRequest xmlns="http://tempuri.org/">
                <userName>website</userName>
                <password>website</password>
                <hisFileNumber>${medNumber}</hisFileNumber>
                <lisProtocolNumber>${signNumber}</lisProtocolNumber>
                <lang>${language.toUpperCase()}</lang>
              </ResultReportRequest>
            </soap:Body>
          </soap:Envelope>
        `;

        const response = await axios.post(
          "http://result.interlab.uz/alisresult/alissonucws.asmx",
          soapBody,
          {
            headers: {
              "Content-Type": "text/xml",
            },
          }
        );

        const parsedResponse = await parseStringPromise(response.data);

        const result =
          parsedResponse["soap:Envelope"]["soap:Body"][0]
            .ResultReportRequestResponse[0].ResultReportRequestResult[0];

        if (result.Success[0] !== "true") {
          setErrorMessage(t("error") + ": " + t("failed_to_get_result"));
          return;
        }

        // Если запрос успешен, получаем файлы
        const mainFileContent = result.ResutFile[0].File[0];
        const additionalFiles = result.AdditionalFiles[0].ResultFile || [];

        const allFiles = [
          { content: mainFileContent, name: `${medNumber}-${signNumber}.pdf` },
        ];

        additionalFiles.forEach((file, index) => {
          allFiles.push({
            content: file.File[0],
            name: `${medNumber}-${signNumber}-additional-${index + 1}.pdf`,
          });
        });

        setFiles(allFiles);
        setErrorMessage("");

        // Открываем файл в новой вкладке (пример)
        allFiles.forEach((file) => {
          const link = document.createElement("a");
          link.href = `data:application/pdf;base64,${file.content}`;
          link.download = file.name;
          link.click();
        });
      } catch (error) {
        setErrorMessage(t("error") + ": " + t("failed_to_get_result"));
      }
    }
  };

  return (
    <div className="w-full bg-white py-14 px-2">
      <div className="w-full max-w-[1440px] flex flex-col gap-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col gap-5"
        >
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
                className="border-neutral-300 rounded-xl py-2"
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
                className="border-neutral-300 rounded-xl py-2"
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
        </motion.div>

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
