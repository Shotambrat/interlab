"use client";
import React, { useState } from "react";
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ChatIcon from '@mui/icons-material/Chat';
import ContactsIcon from '@mui/icons-material/Contacts';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import OnlineReq from "@/app/[locale]/_components/Modals/OnlineReq";
import PhoneIcon from '@mui/icons-material/Phone';

export default function CallToAction({ locale }) {
  const [onlineReq, setOnlineReq] = useState(false);

  const handlePhoneClick = () => {
    window.location.href = "tel:1156";
  };

  const handleLocationClick = () => {
    window.location.href = `/${locale}/addresses`;
  };

  const handleContactsClick = () => {
    setOnlineReq(true);
  };

  return (
    <div className="fixed bottom-0 right-0 mdx:bottom-8 mdx:right-4 z-[9999]">
      {onlineReq && <OnlineReq setState={setOnlineReq} />}
      <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<ChatIcon sx={{ color: 'white' }} />}
          FabProps={{
            sx: {
              backgroundColor: '#FB6A68',
              '&:hover': {
                backgroundColor: '#FB6A68',
              },
            },
          }}
        >
          <SpeedDialAction
            icon={<PhoneIcon sx={{ color: 'white' }} />}
            onClick={handlePhoneClick}
            FabProps={{
              sx: {
                backgroundColor: '#FB6A68',
                '&:hover': {
                  backgroundColor: '#FB6A68',
                },
              },
            }}
          />
          <SpeedDialAction
            icon={<LocationOnIcon sx={{ color: 'white' }} />}
            onClick={handleLocationClick}
            FabProps={{
              sx: {
                backgroundColor: '#FB6A68',
                '&:hover': {
                  backgroundColor: '#FB6A68',
                },
              },
            }}
          />
          <SpeedDialAction
            icon={<ContactsIcon sx={{ color: 'white' }} />}
            onClick={handleContactsClick}
            FabProps={{
              sx: {
                backgroundColor: '#FB6A68',
                '&:hover': {
                  backgroundColor: '#FB6A68',
                },
              },
            }}
          />
        </SpeedDial>
      </Box>
    </div>
  );
}
