import React from 'react';
import { AppBar, Toolbar, Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Email, LocationOn, Phone } from '@material-ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import { COLORS, FONTS } from '../../styles';

const InfoBar = () => {
  const theme = useTheme();
  const matchesMdup = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <AppBar
      position="static"
      color="transparent"
      style={{
        boxShadow: '0px 1px 5px 1px rgba(2,212,212,0.3)',
        position: 'relative',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      <Toolbar
        style={{
          maxWidth: 1200,
          width: '100%',
          alignSelf: 'center',
          justifyContent: 'space-between',
          flex: 1,
          flexDirection: matchesMdup ? 'row' : 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: 250,
            marginTop: matchesMdup ? 0 : 10,
            marginBottom: matchesMdup ? 0 : 10,
          }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              backgroundColor: COLORS.primary,
              borderRadius: 5,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 5,
            }}
          >
            <Email style={{ fontSize: 18, color: COLORS.white }} />
          </div>
          <Typography
            style={{ ...FONTS.body4, color: COLORS.secondaryTextColor }}
          >
            warodom52@gmail.com
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: 250,
            marginBottom: matchesMdup ? 0 : 10,
          }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              backgroundColor: COLORS.primary,
              borderRadius: 5,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 5,
            }}
          >
            <LocationOn style={{ fontSize: 18, color: COLORS.white }} />
          </div>
          <Typography
            style={{ ...FONTS.body4, color: COLORS.secondaryTextColor }}
          >
            สนามเป้า กรุงเทพ 10400
          </Typography>
        </div>
        <Link href="tel:0881493995">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: 250,
              marginBottom: matchesMdup ? 0 : 10,
              justifyContent: matchesMdup ? 'flex-end' : 'flex-start',
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                backgroundColor: COLORS.primary,
                borderRadius: 5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 5,
              }}
            >
              <Phone style={{ fontSize: 18, color: COLORS.white }} />
            </div>
            <Typography
              style={{ ...FONTS.body4, color: COLORS.secondaryTextColor }}
            >
              0881493995
            </Typography>
          </div>
        </Link>
      </Toolbar>
      <div style={{ position: 'absolute', top: -200, right: -200, zIndex: -1 }}>
        <Image
          src={'/layout/layout1.png'}
          width={388}
          height={316}
          layout="intrinsic"
        />
      </div>
    </AppBar>
  );
};

export default InfoBar;
