// src/pages/_app.js
import * as React from 'react'; // Import React library
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import Head from 'next/head'; // Import Head component to modify the head section of the document
import { CssBaseline } from '@mui/material'; // Import CssBaseline for consistent styling
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider to apply custom theme
import theme from '../styles/theme'; // Import custom theme
import '../styles/globals.css'; // Import global styles

// Custom App component that wraps all pages
export default function MyApp(props) {
  const { Component, pageProps } = props;

  // useEffect hook to remove server-side injected CSS
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Pantry Tracker</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired, // Expecting a React component
  pageProps: PropTypes.object.isRequired, // Expecting an object containing page props
};
