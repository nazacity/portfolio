import { Typography, Button, Hidden } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import { COLORS, FONTS } from '../../styles';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Translate } from '@material-ui/icons';

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
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: 'easeIn', duration: 0.8 }}
            >
              <Typography
                style={{
                  color: COLORS.primaryTextColor,
                }}
              >
                Good day every one
              </Typography>
            </motion.div>
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: 'easeIn', duration: 0.8, delay: 0.6 }}
            >
              <Typography
                style={{
                  color: COLORS.primaryTextColor,
                  fontSize: 75,
                  lineHeight: 0.9,
                }}
              >
                I'm Warodom
              </Typography>
            </motion.div>
            <motion.div
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: 'easeIn', duration: 0.8, delay: 0.8 }}
            >
              <Typography
                style={{
                  color: COLORS.secondaryTextColor,
                  fontSize: 60,
                  lineHeight: 0.9,
                }}
              >
                Lertthaweedech
              </Typography>
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: 'easeIn', duration: 0.8, delay: 1.2 }}
            >
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
            </motion.div>
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: 'easeIn', duration: 0.8, delay: 1.4 }}
              style={{ display: 'flex', marginTop: 20 }}
            >
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
            </motion.div>
          </div>
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div>
              <motion.div
                animate={{
                  rotate: [0, 180, 360, 180, 0],
                  scale: [0.95, 1, 0.9, 1, 0.95],
                }}
                transition={{
                  duration: 5,
                  // times: [0, 2.5, 5],
                  loop: Infinity,
                }}
              >
                <Image
                  src="/layout/backgroundprofileborder.png"
                  width={450}
                  height={450}
                  layout="intrinsic"
                />
              </motion.div>
              <div
                style={{
                  position: 'absolute',
                  top: 50,
                  left: 120,
                  backgroundColor: COLORS.white,
                }}
              >
                <Image
                  src="/layout/backgroundprofile.png"
                  width={350}
                  height={350}
                  layout="intrinsic"
                />
              </div>
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
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
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
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div style={{ backgroundColor: COLORS.white }}>
                <Image
                  src="/layout/backgroundprofile.png"
                  width={300}
                  height={300}
                  layout="intrinsic"
                />
              </div>
            </div>
          </div>
          <motion.div
            style={{
              padding: 20,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '90vw',
            }}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: 'easeIn', duration: 0.8 }}
            >
              <Typography
                style={{
                  color: COLORS.primaryTextColor,
                }}
              >
                Good day every one
              </Typography>
            </motion.div>
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: 'easeIn', duration: 0.8, delay: 0.6 }}
            >
              <Typography
                style={{
                  color: COLORS.primaryTextColor,
                  fontSize: 60,
                  lineHeight: 0.9,
                }}
              >
                I'm Warodom
              </Typography>
            </motion.div>
            <motion.div
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: 'easeIn', duration: 0.8, delay: 0.8 }}
            >
              <Typography
                style={{
                  color: COLORS.secondaryTextColor,
                  fontSize: 40,
                  lineHeight: 0.9,
                }}
              >
                Lertthaweedech
              </Typography>
            </motion.div>
            <motion.div
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: 'easeIn', duration: 0.8, delay: 1.2 }}
            >
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
            </motion.div>
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: 'easeIn', duration: 0.8, delay: 1.4 }}
              style={{ display: 'flex', marginTop: 20 }}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </Hidden>
    </div>
  );
};

export default Home;
