import React from 'react';
import Image from 'next/image';
import { Typography, Button, Hidden } from '@material-ui/core';
import { COLORS } from '../../styles';

const Aboutme = () => {
  return (
    <div style={{ position: 'relative' }} id="aboutme">
      <Hidden smDown>
        <div
          style={{
            position: 'absolute',
            width: '100%',
            top: '-20vw',
          }}
        >
          <Image
            src="/layout/aboutmebackground.svg"
            width={'100vw'}
            height={'auto'}
            layout="responsive"
          />
        </div>
      </Hidden>

      <Hidden mdUp>
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: 900,
          }}
        >
          <Image src="/layout/aboutmebackground.svg" layout="fill" />
        </div>
      </Hidden>

      <Hidden smDown>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            maxWidth: 1200,
            width: '100%',
            margin: 'auto',
            position: 'relative',
            padding: 20,
            paddingTop: '15vw',
          }}
        >
          <div
            style={{
              paddingLeft: 100,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}
          >
            <Image
              src="/layout/backgroundprofileborder2.png"
              width={350}
              height={350}
              layout="intrinsic"
            />
          </div>
          <div>
            <div>
              <Typography
                style={{
                  color: COLORS.secondaryTextColor,
                  marginTop: 20,
                  fontWeight: 400,
                  textTransform: 'uppercase',
                }}
              >
                Let me introduce myself
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  color: COLORS.primaryTextColor,
                  fontWeight: 400,
                  fontSize: 40,
                }}
              >
                About Me
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  color: COLORS.secondaryTextColor,
                  fontWeight: 200,
                }}
              >
                I graduated from National Defense Academy of Japan in Computer
                Science bachelor degree. I was in Japan for 5 years. I had
                learnt a lot for nodejs field. after that, I have kept learning
                coding as a fullstack developer. Especially, on React React
                Native field. I have experiences more than 4 years of developing
                as a Self-project and Freelance. I'm looking for new
                chanllenging project. Might be startup or something else.
              </Typography>
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                style={{
                  width: 150,
                  marginTop: 20,
                  color: COLORS.white,
                }}
              >
                View Portfolio
              </Button>
            </div>
            <div
              style={{
                display: 'flex',
                flex: 1,
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  height: 120,
                  width: 150,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 50,
                  borderBottomLeftRadius: 50,
                  borderBottomRightRadius: 50,
                  backgroundColor: COLORS.primary,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: 20,
                  boxShadow: '1px 1px 20px 0px rgba(0,0,0,0.4)',
                }}
              >
                <Typography
                  style={{
                    color: COLORS.white,
                    fontWeight: 600,
                    fontSize: 60,
                  }}
                >
                  4+
                </Typography>
                <Typography
                  style={{
                    color: COLORS.white,
                    fontWeight: 400,
                    fontSize: 14,
                    position: 'absolute',
                    bottom: 40,
                  }}
                >
                  Years Experience
                </Typography>
              </div>
              <div
                style={{
                  height: 120,
                  width: 150,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 50,
                  borderBottomLeftRadius: 50,
                  borderBottomRightRadius: 50,
                  backgroundColor: COLORS.white,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: 20,
                  boxShadow: '1px 1px 20px 0px rgba(0,0,0,0.4)',
                }}
              >
                <Typography
                  style={{
                    color: COLORS.primary,
                    fontWeight: 600,
                    fontSize: 60,
                  }}
                >
                  21+
                </Typography>
                <Typography
                  style={{
                    color: COLORS.primary,
                    fontWeight: 400,
                    fontSize: 14,
                    position: 'absolute',
                    bottom: 40,
                  }}
                >
                  Project Complete
                </Typography>
              </div>
              <div
                style={{
                  height: 120,
                  width: 150,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 50,
                  borderBottomLeftRadius: 50,
                  borderBottomRightRadius: 50,
                  backgroundColor: COLORS.white,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: 20,
                  boxShadow: '1px 1px 20px 0px rgba(0,0,0,0.4)',
                }}
              >
                <Typography
                  style={{
                    color: COLORS.primary,
                    fontWeight: 600,
                    fontSize: 60,
                  }}
                >
                  2
                </Typography>
                <Typography
                  style={{
                    color: COLORS.primary,
                    fontWeight: 400,
                    fontSize: 14,
                    position: 'absolute',
                    bottom: 40,
                  }}
                >
                  Managing project
                </Typography>
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
            paddingTop: 80,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              src="/layout/backgroundprofileborder2.png"
              width={350}
              height={350}
              layout="intrinsic"
            />
          </div>
          <div style={{ margin: 20 }}>
            <div>
              <Typography
                style={{
                  color: COLORS.secondaryTextColor,
                  marginTop: 20,
                  fontWeight: 400,
                  textTransform: 'uppercase',
                }}
              >
                Let me introduce myself
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  color: COLORS.primaryTextColor,
                  fontWeight: 400,
                  fontSize: 40,
                }}
              >
                About Me
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  color: COLORS.secondaryTextColor,
                  fontWeight: 200,
                }}
              >
                I graduated from National Defense Academy of Japan in Computer
                Science bachelor degree. I was in Japan for 5 years. I had
                learnt a lot for nodejs field. after that, I have kept learning
                coding as a fullstack developer. Especially, on React React
                Native field. I have experiences more than 4 years of developing
                as a Self-project and Freelance. I'm looking for new
                chanllenging project. Might be startup or something else.
              </Typography>
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                style={{
                  width: 150,
                  marginTop: 20,
                  color: COLORS.white,
                }}
              >
                View Portfolio
              </Button>
            </div>
            <div
              style={{
                display: 'flex',
                flex: 1,
                justifyContent: 'space-between',
                margin: 'auto',
              }}
            >
              <div
                style={{
                  height: 100,
                  width: 120,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 50,
                  borderBottomLeftRadius: 50,
                  borderBottomRightRadius: 50,
                  backgroundColor: COLORS.primary,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: 20,
                  boxShadow: '1px 1px 20px 0px rgba(0,0,0,0.4)',
                }}
              >
                <Typography
                  style={{
                    color: COLORS.white,
                    fontWeight: 600,
                    fontSize: 40,
                  }}
                >
                  4 +
                </Typography>
                <Typography
                  style={{
                    color: COLORS.white,
                    fontWeight: 400,
                    fontSize: 10,
                  }}
                >
                  Years Experience
                </Typography>
              </div>
              <div
                style={{
                  height: 100,
                  width: 120,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 50,
                  borderBottomLeftRadius: 50,
                  borderBottomRightRadius: 50,
                  backgroundColor: COLORS.white,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: 20,
                  boxShadow: '1px 1px 20px 0px rgba(0,0,0,0.4)',
                }}
              >
                <Typography
                  style={{
                    color: COLORS.primary,
                    fontWeight: 600,
                    fontSize: 40,
                  }}
                >
                  51 +
                </Typography>
                <Typography
                  style={{
                    color: COLORS.primary,
                    fontWeight: 400,
                    fontSize: 10,
                  }}
                >
                  Project Complete
                </Typography>
              </div>
              <div
                style={{
                  height: 100,
                  width: 120,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 50,
                  borderBottomLeftRadius: 50,
                  borderBottomRightRadius: 50,
                  backgroundColor: COLORS.primary,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: 20,
                  boxShadow: '1px 1px 20px 0px rgba(0,0,0,0.4)',
                }}
              >
                <Typography
                  style={{
                    color: COLORS.white,
                    fontWeight: 600,
                    fontSize: 40,
                  }}
                >
                  2
                </Typography>
                <Typography
                  style={{
                    color: COLORS.white,
                    fontWeight: 400,
                    fontSize: 10,
                  }}
                >
                  Managing project
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Hidden>
    </div>
  );
};

export default Aboutme;
