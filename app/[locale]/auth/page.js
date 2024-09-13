"use client";
import { useState } from "react";
import { Form, Input, Button, DatePicker } from 'antd';
import { motion, AnimatePresence } from "framer-motion";

export default function LoginRegisterPage() {
  const [isLogin, setIsLogin] = useState(true);

  const onFinishLogin = (values) => {
    console.log('Login Values:', values);
  };

  const onFinishRegister = (values) => {
    console.log('Register Values:', values);
  };

  return (
    <div className="h-screen w-full bg-white flex justify-center items-center px-2">
      <div className="shadow-3xl w-full max-w-[450px] flex flex-col gap-12 px-3 py-3 rounded-3xl">
        {/* Вкладки с анимацией */}
        <div className="w-full py-1 px-1 bg-slate-100 flex relative rounded-2xl">
          <motion.div
            initial={false}
            animate={{ x: isLogin ? 0 : "100%" }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
              bounce: 0.25,
            }}
            className="relative py-6 h-full w-1/2 bg-white rounded-xl"
          ></motion.div>
          <button
            onClick={() => setIsLogin(true)}
            className="absolute top-0 left-0 h-full w-1/2 flex items-center justify-center rounded-xl"
          >
            <p
              className={`z-10 h-full text-xl absolute top-0 w-full flex items-center justify-center transition-colors duration-300 ease-in-out ${
                isLogin ? "text-red-400 font-semibold " : "text-neutral-400"
              }`}
            >
              Вход
            </p>
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className="absolute top-0 right-0 h-full w-1/2 flex items-center justify-center rounded-xl"
          >
            <p
              className={`z-10 h-full text-xl absolute top-0 w-full flex items-center justify-center transition-colors duration-300 ease-in-out ${
                !isLogin ? "text-red-400 font-semibold " : "text-neutral-400"
              }`}
            >
              Регистрация
            </p>
          </button>
        </div>

        {/* Анимированный переход форм */}
        <div className="flex flex-col w-full gap-4">
          <AnimatePresence mode="wait">
            {isLogin ? (
              <motion.div
                key="login"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
              >
                <Form
                  name="login"
                  layout="vertical"
                  onFinish={onFinishLogin}
                >
                  <Form.Item
                    name="phone"
                    rules={[{ required: true, message: 'Введите номер телефона' }]}
                  >
                    <Input placeholder="Номер телефона"  className="py-2 text-red-400 rounded-xl text-lg "/>
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Введите пароль' }]}
                  >
                    <Input.Password placeholder="Пароль" className="py-2 text-red-400 rounded-xl text-lg "/>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      style={{ backgroundColor: '#ff6a6a', borderColor: '#ff6a6a' }}
                      className="rounded-3xl py-6 text-xl font-semibold"
                    >
                      Войти
                    </Button>
                  </Form.Item>

                  <div style={{ textAlign: 'center', color: '#ff6a6a' }} className="text-lg font-semibold mb-4">
                    Не можете войти?
                  </div>
                </Form>
              </motion.div>
            ) : (
              <motion.div
                key="register"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
              >
                <Form
                  name="register"
                  layout="vertical"
                  onFinish={onFinishRegister}
                >
                  <Form.Item
                    name="phone"
                    rules={[{ required: true, message: 'Введите номер телефона' }]}
                  >
                    <Input placeholder="Номер телефона" className="py-2 text-red-400 rounded-xl text-lg " />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Введите пароль' }]}
                  >
                    <Input.Password placeholder="Пароль" className="py-2 text-red-400 rounded-xl text-lg " />
                  </Form.Item>

                  <Form.Item
                    name="confirmPassword"
                    rules={[{ required: true, message: 'Повторите пароль' }]}
                  >
                    <Input.Password placeholder="Повторите пароль" className="py-2 text-red-400 rounded-xl text-lg " />
                  </Form.Item>

                  <Form.Item
                    name="fullName"
                    rules={[{ required: true, message: 'Введите ФИО' }]}
                  >
                    <Input placeholder="ФИО" className="py-2 text-red-400 rounded-xl text-lg " />
                  </Form.Item>

                  <Form.Item
                    name="birthdate"
                    rules={[{ required: true, message: 'Выберите дату рождения' }]}
                  >
                    <DatePicker placeholder="Дата рождения" style={{ width: '100%' }}  className="py-2 text-red-400 rounded-xl text-lg "/>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      style={{ backgroundColor: '#ff6a6a', borderColor: '#ff6a6a' }}
                      className="rounded-3xl py-6 text-xl font-semibold"
                    >
                      Продолжить
                    </Button>
                  </Form.Item>
                </Form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
