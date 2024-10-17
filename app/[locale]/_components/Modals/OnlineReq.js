import Image from "next/image";
import { useState } from "react";
import { Form, Input, Button, DatePicker, message } from "antd";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import closeicongray from "@/public/svg/closeicon-gray.svg";
import { createPortal } from "react-dom";

const { TextArea } = Input;

export default function ContactWithUs({ setState }) {
  const [phone, setPhone] = useState("");
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();

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
      birthDate: "696969", // Date of birth
      // values.birthDate.format("DD.MM.YYYY")
      comment: values.comment || "",
    };

    try {
      const response = await axios.post(
        "https://interlab.mrjtrade.uz/api/application/onlayn-zapis",
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

  return createPortal (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-[9999]">
      <div className="bg-white max-md:p-4 px-8 py-8 rounded-3xl max-mdx:max-h-[90%] overflow-y-scroll no-scrollbar shadow-lg max-mdx:w-[320px] w-[450px] relative">
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

              {/* Date of birth picker */}
              {/* <Form.Item
                name="birthDate"
                rules={[{ required: true, message: "Выберите дату рождения" }]}
              >
                <DatePicker
                  placeholder="Выберите дату рождения"
                  format="DD.MM.YYYY"
                  className="rounded-xl input py-2 text-xl w-full border border-gray-300 shadow-sm"
                />
              </Form.Item> */}

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
    </div>,
    document.body
  );
}
