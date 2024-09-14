"use client";

import { Input, Button, DatePicker, Form } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import {
  PhoneOutlined,
  LockOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

export default function Info() {
  const [form] = Form.useForm();

  const initialValues = {
    fullName: "Иванов Иван Иванович",
    phoneNumber: "+998 99 999 99 99",
    birthDate: dayjs("2001-01-01"),
    password: "",
    confirmPassword: "",
  };

  const onFinish = (values) => {
    console.log("Form data:", values);
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Личные данные</h2>
      <Form
        form={form}
        layout="vertical"
        initialValues={initialValues}
        onFinish={onFinish}
        className="space-y-4"
      >
        <Form.Item
          label={<span className="text-sm font-medium">ФИО</span>}
          name="fullName"
          rules={[{ required: true, message: "Введите ваше ФИО" }]}
          className="block"
        >
          <Input
            className="h-10 px-4 text-sm rounded border-gray-300"
            placeholder="Иванов Иван Иванович"
          />
        </Form.Item>

        <Form.Item
          label={<span className="text-sm font-medium">Номер телефона</span>}
          name="phoneNumber"
          rules={[{ required: true, message: "Введите номер телефона" }]}
          className="block"
        >
          <Input
            className="h-10 px-4 text-sm rounded border-gray-300"
            placeholder="+998 99 999 99 99"
            prefix={<PhoneOutlined className="text-gray-400" />}
          />
        </Form.Item>

        <Form.Item
          label={<span className="text-sm font-medium">Дата рождения</span>}
          name="birthDate"
          rules={[{ required: true, message: "Выберите дату рождения" }]}
          className="block"
        >
          <DatePicker
            format="DD.MM.YYYY"
            locale={"ru"}
            className="w-full h-10 px-4 text-sm rounded border-gray-300"
            suffixIcon={<CalendarOutlined className="text-gray-400" />}
          />
        </Form.Item>

        <Form.Item
          label={<span className="text-sm font-medium">Новый пароль</span>}
          name="password"
          rules={[{ required: true, message: "Введите новый пароль" }]}
          className="block"
        >
          <Input.Password
            className="h-10 px-4 text-sm rounded border-gray-300"
            placeholder="Введите новый пароль"
            prefix={<LockOutlined className="text-gray-400" />}
          />
        </Form.Item>

        <Form.Item
          label={<span className="text-sm font-medium">Повторите пароль</span>}
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Повторите пароль" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Пароли не совпадают"));
              },
            }),
          ]}
          className="block"
        >
          <Input.Password
            className="h-10 px-4 text-sm rounded border-gray-300"
            placeholder="Повторите пароль"
            prefix={<LockOutlined className="text-gray-400" />}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full h-10 text-white font-semibold bg-red-500 hover:bg-red-600 rounded"
          >
            Сохранить изменения
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
