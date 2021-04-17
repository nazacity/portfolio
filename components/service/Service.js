import React from 'react';
import { Button, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { FONTS, COLORS } from '../../styles';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Service = () => {
  const theme = useTheme();
  const matchesLgup = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesSmdown = useMediaQuery(theme.breakpoints.down('sm'));
  const services = [
    {
      id: 1,
      logo: '',
      title: 'Mobile Applicaiton',
      description:
        'Developing both frontend and backend mobile application with new techstack (React Native) that can be store both android and iOS',
    },
    {
      id: 2,
      logo: '',
      title: 'UI/UX design',
      description:
        'With my 5 years experiences, I can design and suggest an UX/UI design',
    },
  ];
  return (
    <div
      style={{
        maxWidth: 1200,
        width: '100%',
        margin: 'auto',
        position: 'relative',
        padding: 20,
        paddingTop: '10vw',
      }}
    >
      <motion.div
        style={{ position: 'absolute', top: 0 }}
        animate={{
          rotate: [0, 180, 360],
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          // times: [0, 2.5, 5],
          loop: Infinity,
        }}
      >
        <Image
          src="/layout/rectangle.png"
          layout="intrinsic"
          width={200}
          height={200}
        />
      </motion.div>
      <motion.div
        style={{ position: 'absolute', top: 200, right: 100 }}
        animate={{
          x: [-100, 50, -100],
          y: [-100, 50, -100],
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          // times: [0, 2.5, 5],
          loop: Infinity,
        }}
      >
        <Image
          src="/layout/circle.png"
          layout="intrinsic"
          width={150}
          height={150}
        />
      </motion.div>
      <div
        id="services"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          style={{
            ...FONTS.h4,
            textAlign: 'center',
            color: COLORS.secondaryTextColor,
          }}
        >
          WHAT CAN I DO FOR YOU
        </Typography>
        <Typography
          style={{
            ...FONTS.h2,
            textAlign: 'center',
            color: COLORS.primaryTextColor,
            fontSize: 50,
            lineHeight: 2,
          }}
        >
          My Services
        </Typography>
        <Typography
          style={{
            ...FONTS.body4,
            textAlign: 'center',
            color: COLORS.secondaryTextColor,
            width: '50%',
          }}
        >
          There are variation of my services as a Fullstack developer. My
          majority is to produce web site and mobile application for the whole
          process of your bussiness. However I can be consultancy as an
          experienced developer.
        </Typography>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: matchesLgup
            ? '1fr 1fr 1fr'
            : matchesSmdown
            ? '1fr'
            : '1fr 1fr',
          margin: '40px auto',
        }}
      >
        <div
          style={{
            width: 300,
            height: 300,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 125,
            borderBottomLeftRadius: 125,
            borderBottomRightRadius: 100,
            backgroundColor: COLORS.primary,
            boxShadow: '1px 1px 20px 0px rgba(0,0,0,0.4)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 20,
            margin: 'auto',
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              backgroundColor: COLORS.white,
              margin: '20px 0',
            }}
          ></div>
          <Typography
            style={{
              ...FONTS.h5,
              color: COLORS.white,
              marginBottom: 20,
              textAlign: 'center',
            }}
          >
            Web Development
          </Typography>
          <Typography
            style={{ ...FONTS.body5, color: COLORS.white, textAlign: 'center' }}
          >
            Developing both frontend and backend with new technology Single Page
            App (React)
          </Typography>
        </div>
        {services.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                width: 300,
                height: 300,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 125,
                borderBottomLeftRadius: 125,
                borderBottomRightRadius: 100,
                backgroundColor: COLORS.white,
                boxShadow: '1px 1px 20px 0px rgba(0,0,0,0.4)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 20,
                margin: 'auto',
                marginTop: 20,
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: COLORS.primary,
                  margin: '20px 0',
                }}
              ></div>
              <Typography
                style={{
                  ...FONTS.h5,
                  marginBottom: 20,
                  textAlign: 'center',
                }}
              >
                {item.title}
              </Typography>
              <Typography
                style={{
                  ...FONTS.body5,
                  color: COLORS.primary,
                  textAlign: 'center',
                }}
              >
                {item.description}
              </Typography>
            </div>
          );
        })}
      </div>
      <div
        style={{
          margin: '50px auto',
          display: 'flex',
          flexDirection: matchesSmdown ? 'column' : 'row',
          alignItems: 'center',
        }}
      >
        <Typography style={{ ...FONTS.h5, color: COLORS.secondaryTextColor }}>
          Are You Interested In Working With Me?
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{
            color: COLORS.white,
            marginLeft: matchesSmdown ? 0 : 20,
            marginTop: matchesSmdown ? 20 : 0,
          }}
        >
          Let's Started Now
        </Button>
      </div>
    </div>
  );
};

export default Service;
