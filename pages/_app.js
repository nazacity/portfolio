import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from '../redux/store';
import InfoBar from '../components/layout/InfoBar';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Warodom Lertthaweedech</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        {/* <link rel="icon" href={logo144} />
        <link rel="apple-touch-icon" href={logo144} /> */}
        <meta
          name="description"
          content="Web and Mobile app deverloper. Fullstack Nodejs React React Native"
        />
        <meta
          property="og:description"
          content="Web and Mobile app deverloper. Fullstack Nodejs React React Native"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        {/* <meta property="og:image" content={logo256} /> */}
      </Head>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <InfoBar />
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </Fragment>
  );
}
