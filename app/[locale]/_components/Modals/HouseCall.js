import Image from "next/image";
import closeicongray from "@/public/svg/closeicon-gray.svg";
import houseCall from "@/public/images/house-call.png";
import { useState, useEffect } from "react";
import { client } from '@/sanity/lib/client'; // Sanity client to fetch services
import { Form, Input, Button, Select, message } from "antd";

const { Option } = Select;

export default function ContactWithUs({ setState }) {
  const [services, setServices] = useState([]); // State for services
  const [phone, setPhone] = useState(''); // State for phone input
  const [isValidPhone, setIsValidPhone] = useState(false); // Phone validation state
  const [loading, setLoading] = useState(false); // State for form submission

  // Fetch services from Sanity
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const query = `*[_type == "service"]{name, slug}`;
        const data = await client.fetch(query);
        setServices(data);
      } catch (error) {
        console.error("Failed to fetch services", error);
      }
    };
    fetchServices();
  }, []);

  const handlePhoneChange = (e) => {
    const phoneValue = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    setPhone(phoneValue);
    if (phoneValue.length >= 9) {
      setIsValidPhone(true); // Simple validation for length
    } else {
      setIsValidPhone(false);
    }
  };

  const handleFinish = async (values) => {
    if (!isValidPhone) {
      message.error("Введите корректный номер телефона");
      return;
    }

    setLoading(true);

    const payload = {
      name: values.fullname,
      phone: phone,
      service: values.service,
      comment: values.comment,
    };

    try {
      const response = await axios.post(
        "https://interlab.uz/api/application/onlayn-zapis",
        payload
      );

      if (response.status === 200) {
        message.success("Заявка успешно отправлена!");
        setPhone("");
        setLoading(false);
        form.resetFields();
      } else {
        throw new Error("Ошибка при отправке");
      }
    } catch (error) {
      message.error("Произошла ошибка при отправке. Попробуйте позже.");
      setLoading(false);
    }
  };

  const [form] = Form.useForm(); // Create form instance

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50">
      <div className="bg-white max-md:p-4 px-8 py-8 rounded-3xl shadow-lg max-mdx:w-[90%] w-[450px] relative">
        <button
          className="absolute top-5 right-5"
          onClick={() => setState(false)}
        >
          <Image
            priority
            className="w-4 h-4"
            src={closeicongray}
            width={100}
            height={100}
            alt="Close icon"
            quality={100}
          />
        </button>
        <div className="flex items-center flex-col slg:gap-5">
          <Image
            src={houseCall}
            width={500}
            height={500}
            alt="House Call Icon"
            className="w-36 h-36"
          />
          <div className="flex flex-col text-center gap-1 lg:px-12">
            <h3 className="text-rose-400 text-2xl font-semibold">Вызов на дом</h3>
            <p className="text-neutral-400 text-sm ">
              Заполните форму, чтобы заказать услугу
            </p>
          </div>
          <div className="flex flex-col max-md:ml-0 w-full">
            <Form
              form={form}
              className="flex flex-col text-base max-md:mt-10 max-md:max-w-full"
              onFinish={handleFinish}
              layout="vertical"
            >
              <Form.Item
                name="fullname"
                rules={[{ required: true, message: "Пожалуйста, введите ваше ФИО" }]}
              >
                <Input
                  placeholder="ФИО *"
                  className="rounded-xl py-2 text-xl border border-gray-300 shadow-sm"
                />
              </Form.Item>

              <Form.Item
                name="phoneNumber"
                rules={[{ required: true, message: "Введите номер телефона" }]}
              >
                <Input
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="+998(__)-___-__-__"
                  className="rounded-xl py-2 text-xl w-full border border-gray-300 shadow-sm"
                />
              </Form.Item>

              <Form.Item name="service" rules={[{ required: true, message: "Выберите услугу" }]}>
                <Select
                  placeholder="Интересующая услуга"
                  className="rounded-xl h-12 border border-gray-300 shadow-sm"
                >
                  {services.map((service) => (
                    <Option key={service.slug.current} value={service.slug.current}>
                      {service.name.ru}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item name="comment">
                <Input.TextArea
                  placeholder="Ваш комментарий"
                  className="rounded-xl py-2 text-xl border border-gray-300 shadow-sm"
                />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                disabled={loading || !isValidPhone}
                className="rounded-[100px] px-10 py-6 text-lg font-bold text-white bg-red-400 self-start hover:bg-red-500 transition-colors duration-200"
              >
                Оставить заявку
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
