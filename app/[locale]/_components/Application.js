"use client"
import dynamic from 'next/dynamic';
import Image from 'next/image';
import lineForm from '@/public/svg/application/illustration.svg';
import Arrow_down from '@/public/svg/arrow-down.svg';
import { useTranslations } from 'next-intl';
import { Form, Input, Button, Select, message } from 'antd';
import { useState } from 'react';

const { Option } = Select;

const Application = () => {
  const t = useTranslations('Application');
  const [phone, setPhone] = useState('');

  // Функция для добавления маски номера телефона
  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, ''); // Удаляем все символы, кроме цифр
    if (input.length > 12) input = input.slice(0, 12); // Ограничиваем до 12 символов

    let formattedPhone = '+998(';

    if (input.length >= 2) {
      formattedPhone += input.slice(0, 2) + ')-';
    }
    if (input.length >= 5) {
      formattedPhone += input.slice(2, 5) + '-';
    }
    if (input.length >= 7) {
      formattedPhone += input.slice(5, 7) + '-';
    }
    if (input.length >= 9) {
      formattedPhone += input.slice(7, 9);
    }

    setPhone(formattedPhone); // Обновляем значение телефона
  };

  const handleFinish = (values) => {
    // Проверка номера телефона
    if (phone.replace(/\D/g, '').length !== 12) {
      message.error('Введите корректный номер телефона');
      return;
    }

    console.log('Form values:', values);
    // Логика отправки формы
  };

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
              {t('title')}
            </h2>
            <p className='text-lg text-neutral-400'>{t('description')}</p>
            <p className='px-6 py-3 rounded-3xl bg-red-400 self-start font-medium mt-4 text-white'>{t('sale-info')}</p>
          </div>
        </div>
        <div className="flex flex-col w-[32%] max-md:ml-0 max-slg:w-full">
          <Form
            className="flex flex-col text-base max-md:mt-10 max-md:max-w-full"
            onFinish={handleFinish}
            layout="vertical"
          >
            <Form.Item
              name="fullname"
              rules={[{ required: true, message: t('placeholders.fullname') }]}
            >
              <Input
                placeholder={t('placeholders.fullname')}
                className="rounded-xl py-2 text-xl"
              />
            </Form.Item>

            <Form.Item
              name="phoneNumber"
              rules={[{ required: true, message: t('placeholders.phone') }]}
            >
              <Input
                value={phone}
                onChange={handlePhoneChange}
                placeholder="+998(__)-___-__-__"
                className="rounded-xl py-2 text-xl"
              />
            </Form.Item>

            <Form.Item name="service" rules={[{ required: true }]}>
              <Select
                placeholder={t('placeholders.services.default')}
                className="rounded-xl h-12"
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
                <Option value="mrt">{t('placeholders.services.MRI')}</Option>
                <Option value="uzi">{t('placeholders.services.UZI')}</Option>
                <Option value="cardio">{t('placeholders.services.cardiology')}</Option>
              </Select>
            </Form.Item>


            <Form.Item name="comment">
              <Input.TextArea
                placeholder={t('placeholders.services.commentary')}
                className="rounded-xl py-2 text-xl"
              />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              className="rounded-[100px] px-10 py-6 text-lg font-bold text-white bg-red-400 self-start"
            >
              {t('placeholders.services.request')}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

// Динамический импорт без SSR
export default dynamic(() => Promise.resolve(Application), { ssr: false });
