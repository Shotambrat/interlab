"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import lineForm from "@/public/svg/application/illustration.svg";
import Arrow_down from "@/public/svg/arrow-down.svg";
import { useTranslations } from "next-intl";
import { Form, Input, Button, Select, message } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import { client } from '@/sanity/lib/client'; // Import the Sanity client

const { Option } = Select;

const Application = () => {
  const t = useTranslations("Application");
  const [phone, setPhone] = useState("");
  const [isValidPhone, setIsValidPhone] = useState(false); // State for phone validity
  const [loading, setLoading] = useState(false); // State for button loading
  const [services, setServices] = useState([]); // State to store the services from Sanity

  // Fetch services from Sanity
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const query = `*[_type == "service"]{name, slug}`; // Adjust the query if needed
        const data = await client.fetch(query);
        setServices(data);
      } catch (error) {
        console.error("Failed to fetch services", error);
      }
    };
    
    fetchServices();
  }, []);

  const handlePhoneChange = (value, country, e, formattedValue) => {
    setPhone(value);
    // Validate the phone number length based on the selected country
    if (formattedValue.length === country.format.length) {
      setIsValidPhone(true);
    } else {
      setIsValidPhone(false);
    }
  };

  const handleFinish = async (values) => {
    // Check if the phone number is valid
    if (!isValidPhone) {
      message.error("Введите корректный номер телефона");
      return;
    }

    setLoading(true); // Start loading state

    const payload = {
      name: values.fullname,
      phone: phone,
      service: values.service,
      comment: values.comment,
    };

    try {
      // Отправка данных на API
      const response = await axios.post(
        "https://interlab.uz/api/application/onlayn-zapis",
        payload
      );

      if (response.status === 200) {
        message.success("Заявка успешно отправлена!");
        // Очистка формы после успешной отправки
        setPhone("");
        setLoading(false);
        form.resetFields();
      } else {
        throw new Error("Ошибка при отправке");
      }
    } catch (error) {
      message.error("Произошла ошибка при отправке. Попробуйте позже.");
      setLoading(false); // Stop loading state
    }
  };

  const [form] = Form.useForm(); // Create form instance

  return (
    <div className="relative overflow-hidden py-5 lg:py-10 px-4 lg:pr-10 bg-rose-50 rounded-[30px] mdx:rounded-[50px] max-md:max-w-full">
      {/* SVG Illustration at the top */}
      <Image
        src={lineForm}
        width={1000}
        height={1000}
        alt="Line Svg"
        quality={100}
        className="w-auto max-slg:w-[200%] max-slg:h-full absolute -left-12 -bottom-8 h-1/2"
      />
      <div className="relative z-10 flex lg:justify-around gap-5 max-slg:flex-col max-md:gap-0">
        <div className="flex flex-col w-[50%] lg:w-[50%] xl:w-[50%] max-md:ml-0 max-slg:w-full">
          <div className="flex flex-col grow max-slg:max-w-full">
            <h2 className="justify-center self-end max-w-full max-md:max-w-full text-2xl mdx:text-4xl font-bold text-red-400">
              {t("title")}
            </h2>
            <p className="text-lg text-neutral-400">{t("description")}</p>
            <p className="px-6 py-3 rounded-3xl bg-red-400 self-start font-medium mt-4 text-white">
              {t("sale-info")}
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[32%] max-md:ml-0 max-slg:w-full">
          <Form
            form={form}
            className="flex flex-col text-base max-md:mt-10 max-md:max-w-full"
            onFinish={handleFinish}
            layout="vertical"
          >
            <Form.Item
              name="fullname"
              rules={[{ required: true, message: t("placeholders.fullname") }]}
            >
              <Input
                placeholder={t("placeholders.fullname")}
                className="rounded-xl input py-2 text-xl border border-gray-300 shadow-sm"
              />
            </Form.Item>

            <Form.Item
              name="phoneNumber"
              rules={[{ required: true, message: t("placeholders.phone") }]}
            >
              <PhoneInput
                country={"uz"}
                value={phone}
                onChange={handlePhoneChange}
                inputClass="rounded-xl input py-2 pl-2 text-xl w-full border border-gray-300 shadow-sm"
                inputProps={{
                  name: "phoneNumber",
                  required: true,
                }}
                placeholder="+998"
                isValid={isValidPhone}
                containerClass="phone-input w-full" // Apply custom class here
              />
            </Form.Item>

            <Form.Item name="service" rules={[{ required: true }]}>
              <Select
                placeholder={t("placeholders.services.default")}
                className="rounded-xl h-14 border border-gray-300 shadow-sm"
                suffixIcon={
                  <Image
                    src={Arrow_down}
                    width={100}
                    height={100}
                    alt="Arrow Icon"
                    quality={100}
                    className="w-auto h-auto"
                  />
                }
              >
                {services.map((service) => (
                  <Option key={service.slug.current} value={service.slug.current}>
                    {service.name.ru} {/* Adjust this to support localization */}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item name="comment">
              <Input.TextArea
                placeholder={t("placeholders.services.commentary")}
                className="rounded-xl py-2 text-xl border textarea border-gray-300 shadow-sm"
              />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              disabled={loading || !isValidPhone}
              className="rounded-[100px] px-10 py-6 text-lg font-bold text-white bg-red-400 self-start hover:bg-red-500 transition-colors duration-200"
            >
              {t("placeholders.services.request")}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

// Динамический импорт без SSR
export default dynamic(() => Promise.resolve(Application), { ssr: false });
