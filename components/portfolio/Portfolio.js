import {
  Card,
  CardActionArea,
  useTheme,
  useMediaQuery,
  CardContent,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { COLORS, FONTS } from '../../styles';

const Portfolio = () => {
  const theme = useTheme();
  const matchesLgup = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesMdup = useMediaQuery(theme.breakpoints.up('md'));
  const matches700up = useMediaQuery('(min-width:700px)');
  const portfolio = [
    {
      id: 1,
      url: 'https://ramble-club.com/',
      title: 'Ramble',
      description:
        'Moblie application for register running events over Thailand',
      image: '',
    },
    {
      id: 2,
      url: 'https://reactfbmaterialize.web.app/',
      title: 'Social Platform Basic',
      description: 'Easy Social platform with Firebase for db and server',
      image: '',
    },
    {
      id: 3,
      url: 'https://coffeecafe.herokuapp.com/',
      title: 'Restaurant App',
      description:
        'Web App for order food and drink implement with line login and 3th party payment gateway',
      image: '',
    },
    {
      id: 4,
      url: 'https://materialuicourse.vercel.app/',
      title: 'Material UI',
      description: 'Learn how to use material ui',
      image: '',
    },
  ];

  const PortfolioCard = ({ item, index }) => {
    return (
      <Card style={{ margin: 20, borderRadius: 10 }}>
        <CardActionArea>
          <a href={item.url} target="_blank">
            <div
              style={{ width: '100%', height: matches700up ? 300 : 200 }}
            ></div>
          </a>
        </CardActionArea>
        <CardContent>
          <Typography style={{ ...FONTS.h4, color: COLORS.primaryTextColor }}>
            {item.title}
          </Typography>
          <Typography
            style={{ ...FONTS.body4, color: COLORS.secondaryTextColor }}
          >
            {item.description}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  return (
    <div
      id="portfolio"
      style={{
        // backgroundColor: COLORS.backgroundColor,
        display: 'grid',
        gridTemplateColumns: matchesLgup
          ? '1fr 1fr 1fr'
          : matchesMdup
          ? '1fr 1fr'
          : '1fr',
      }}
    >
      {portfolio.map((item, index) => {
        return <PortfolioCard key={item.id} item={item} index={index} />;
      })}
    </div>
  );
};

export default Portfolio;
