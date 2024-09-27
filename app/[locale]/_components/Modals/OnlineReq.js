import Image from "next/image";
import { useState, useEffect } from "react";
import { Form, Input, Button, Select, message } from "antd";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import closeicongray from "@/public/svg/closeicon-gray.svg";
import { client } from '@/sanity/lib/client'; // Sanity client to fetch services

const { TextArea } = Input;
const { Option } = Select;

export default function ContactWithUs({ setState }) {
  const [phone, setPhone] = useState("");
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]); // State to hold fetched services

  const [form] = Form.useForm();

  // Fetch services from Sanity
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const query = `*[_type == "service"]{name, slug}`; // Fetch service name and slug
        const data = await client.fetch(query);
        setServices(data); // Update state with fetched services
      } catch (error) {
        console.error("Failed to fetch services", error);
      }
    };
    fetchServices();
  }, []);

  const handlePhoneChange = (value, country, e, formattedValue) => {
    setPhone(value);
    if (formattedValue.length === country.format.length) {
      setIsValidPhone(true);
    } else {
      setIsValidPhone(false);
    }
  };

  const onFinish = async (values) => {
    if (!isValidPhone) {
      message.error("Введите корректный номер телефона");
      return;
    }

    setLoading(true);

    const payload = {
      name: values.fullName,
      phone: phone,
      service: values.service,
      comment: values.comment || "",
    };

    try {
      const response = await axios.post(
        "https://interlab.uz/api/application/onlayn-zapis",
        payload
      );

      if (response.status === 200) {
        message.success("Заявка успешно отправлена!");
        form.resetFields();
        setPhone("");
        setLoading(false);
        setState(false);
      } else {
        throw new Error("Ошибка при отправке");
      }
    } catch (error) {
      message.error("Произошла ошибка при отправке. Попробуйте позже.");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50">
      <div className="bg-white max-md:p-4 px-8 py-8 rounded-3xl shadow-lg max-mdx:w-[320px] w-[450px] relative">
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
          <div className="flex flex-col text-center px-4 lg:px-12">
            <h3 className="text-rose-400 text-2xl font-semibold">
              Онлайн запись
            </h3>
            <p className="text-neutral-400 text-sm ">
              Оставьте заявку и вам перезвонят в течение 5 минут, для
              подтверждения записи
            </p>
          </div>
          <div className="flex flex-col max-md:ml-0 w-full">
            <Form
              form={form}
              name="contact"
              layout="vertical"
              onFinish={onFinish}
              className="flex flex-col max-md:mt-10 max-md:max-w-full"
            >
              <Form.Item
                name="fullName"
                rules={[{ required: true, message: "Введите ФИО" }]}
              >
                <Input placeholder="ФИО *" className="py-3 rounded-xl input text-lg" />
              </Form.Item>

              <Form.Item
                name="phone"
                rules={[{ required: true, message: "Введите номер телефона" }]}
              >
                <PhoneInput
                  country={"uz"}
                  value={phone}
                  onChange={handlePhoneChange}
                  inputClass="rounded-xl pl-3 py-3 text-xl w-full border border-gray-300 shadow-sm"
                  placeholder="+998"
                  isValid={isValidPhone}
                  containerClass="phone-input w-full"
                />
              </Form.Item>

              <Form.Item
                name="service"
                rules={[{ required: true, message: "Выберите услугу" }]}
                className="text-lg"
              >
                <Select placeholder="Интересующая услуга" className="h-14 rounded-xl text-lg">
                  {services.map((service) => (
                    <Option key={service.slug.current} value={service.name.ru}>
                      {service.name.ru} {/* Display service name in Russian */}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item name="comment">
                <TextArea placeholder="Ваш комментарий" rows={4} className="text-lg" />
              </Form.Item>

              <Form.Item className="w-full flex justify-center">
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  loading={loading}
                  disabled={loading || !isValidPhone}
                  className="bg-red-400 hover:bg-red-500 rounded-[100px] px-12 py-6 font-semibold"
                  size="large"
                >
                  Оставить заявку
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
