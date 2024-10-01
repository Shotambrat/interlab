import React from 'react';
import { Input, Button } from 'antd';
import Image from 'next/image';
import search from "@/public/svg/search-white.svg";

export default function SearchComp({ query, onChange, placeholder }) {
  return (
    <div className="flex items-center w-full p-1 border border-neutral-200 rounded-xl" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
      <Input
        placeholder={placeholder}
        value={query}
        onChange={onChange}
        className="flex-1 rounded-xl"
        size="large"
        style={{ 
          border: 'none', 
          padding: '10px 16px', 
          height: '48px',
          boxShadow: 'none'
        }}
      />
      <Button
        type="primary"
        size="large"
        style={{ 
          backgroundColor: '#F56565', 
          borderColor: '#F56565', 
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        className='h-16 w-12 rounded-xl'
      >
        <Image
          src={search}
          width={16}
          height={16}
          alt="Search Icon"
          className='w-auto h-full'
        />
      </Button>
    </div>
  );
}
