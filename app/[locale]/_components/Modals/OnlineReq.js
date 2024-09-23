import Image from "next/image";
import { Form, Input, Button, Select } from "antd";
import closeicongray from "@/public/svg/closeicon-gray.svg";

const { TextArea } = Input;
const { Option } = Select;

export default function ContactWithUs({ setState }) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Values:", values);
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
            alt="The Wild Oasis logo"
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
                <Input placeholder="ФИО *" className="py-3 rounded-xl text-lg" />
              </Form.Item>

              <Form.Item
                name="phone"
                rules={[{ required: true, message: "Введите номер телефона" }]}
              >
                <Input placeholder="Номер телефона *" className="py-3 rounded-xl text-lg" />
              </Form.Item>

              <Form.Item
                name="service"
                rules={[{ required: true, message: "Выберите услугу" }]}
                className="text-lg"
              >
                <Select placeholder="Интересующая услуга" className="h-12 rounded-xl text-lg">
                  <Option value="mrt">МРТ</Option>
                  <Option value="uzi">УЗИ</Option>
                  <Option value="cardio">Кардиология</Option>
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
