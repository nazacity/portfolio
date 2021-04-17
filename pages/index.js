import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { FONTS } from '../styles';
import NavBar from '../components/layout/NavBar';
import Home from '../components/home/Home';
import Aboutme from '../components/aboutme/Aboutme';
import InfoBar from '../components/layout/InfoBar';
import { Hidden } from '@material-ui/core';
import Service from '../components/service/Service';
import Portfolio from '../components/portfolio/Portfolio';

export default function index() {
  let { t } = useTranslation();

  return (
    <div style={{ height: 5000 }}>
      <Hidden smDown>
        <InfoBar />
      </Hidden>
      <NavBar />
      <Home />
      <Aboutme />
      <Service />
      <Portfolio />
    </div>
  );
}
