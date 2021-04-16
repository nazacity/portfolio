import { Typography, Button, Hidden } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import { COLORS, FONTS } from '../../styles';
import Image from 'next/image';

const Home = () => {
  return (
    <div id="home">
      <Hidden smDown>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            maxWidth: 1200,
            width: '100%',
            margin: 'auto',
            paddingTop: 80,
          }}
        >
          <div
            style={{
              padding: 20,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div>
              <Typography
                style={{
                  color: COLORS.primaryTextColor,
                }}
              >
                Good day every one
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  color: COLORS.primaryTextColor,
                  fontSize: 75,
                  lineHeight: 0.9,
                }}
              >
                I'm Warodom
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  color: COLORS.secondaryTextColor,
                  fontSize: 60,
                  lineHeight: 0.9,
                }}
              >
                Lertthaweedech
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  color: COLORS.secondaryTextColor,
                  marginTop: 30,
                  fontWeight: 200,
                }}
              >
                I'm a Full Stack developer on React React Native Nodejs Field.
                new technology for single web page. Recently have learnt golang
                for being outstanding developer. I have experiences for
                developing for 3 years. still eager to learn.
              </Typography>
            </div>
            <div style={{ display: 'flex', marginTop: 20 }}>
              <Button
                variant="contained"
                color="primary"
                style={{
                  color: COLORS.white,
                  marginRight: 10,
                  width: 150,
                }}
              >
                Download CV
              </Button>
              <Button
                variant="outlined"
                color="primary"
                style={{
                  width: 150,
                }}
              >
                View Portfolio
              </Button>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div>
              <Image
                src="/layout/backgroundprofileborder.png"
                width={500}
                height={500}
                layout="intrinsic"
              />
            </div>
            <div
              style={{
                position: 'absolute',
                top: 50,
                left: 50,
                backgroundColor: COLORS.white,
              }}
            >
              <Image
                src="/layout/backgroundprofile.png"
                width={400}
                height={400}
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
      </Hidden>
      <Hidden mdUp>
        <div
          style={{
            maxWidth: 1200,
            width: '100%',
            margin: 'auto',
            paddingTop: 80,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{ position: 'relative' }}>
            <div>
              <Image
                src="/layout/backgroundprofileborder.png"
                width={400}
                height={400}
                layout="intrinsic"
              />
            </div>
            <div
              style={{
                position: 'absolute',
                top: 50,
                left: 50,
                backgroundColor: COLORS.white,
              }}
            >
              <Image
                src="/layout/backgroundprofile.png"
                width={300}
                height={300}
                layout="intrinsic"
              />
            </div>
          </div>
          <div
            style={{
              padding: 20,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '90vw',
            }}
          >
            <div>
              <Typography
                style={{
                  color: COLORS.primaryTextColor,
                }}
              >
                Good day every one
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  color: COLORS.primaryTextColor,
                  fontSize: 60,
                  lineHeight: 0.9,
                }}
              >
                I'm Warodom
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  color: COLORS.secondaryTextColor,
                  fontSize: 45,
                  lineHeight: 0.9,
                }}
              >
                Lertthaweedech
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  color: COLORS.secondaryTextColor,
                  marginTop: 30,
                  fontWeight: 200,
                }}
              >
                I'm a Full Stack developer on React React Native Nodejs Field.
                new technology for single web page. Recently have learnt golang
                for being outstanding developer. I have experiences for
                developing for 3 years. still eager to learn.
              </Typography>
            </div>
            <div style={{ display: 'flex', marginTop: 20 }}>
              <Button
                variant="contained"
                color="primary"
                style={{
                  color: COLORS.white,
                  marginRight: 10,
                  width: 150,
                }}
              >
                Download CV
              </Button>
              <Button
                variant="outlined"
                color="primary"
                style={{
                  width: 150,
                }}
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </Hidden>
    </div>
  );
};

export default Home;
