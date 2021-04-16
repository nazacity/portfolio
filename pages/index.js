import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { FONTS } from '../styles';
import NavBar from '../components/layout/NavBar';
import Home from '../components/home/Home';
import Aboutme from '../components/aboutme/Aboutme';

export default function index() {
  let { t } = useTranslation();

  return (
    <div style={{ height: 5000 }}>
      <NavBar />
      <Home />
      <Aboutme />
    </div>
  );
}
