import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';

import { ParallaxProvider } from 'react-scroll-parallax';

import '../scss/main.scss';

import Header from '../layouts/Header';

const Layout = ({ children }) => (
  <ThemeProvider theme={ theme }>
    <ParallaxProvider>
      <React.Fragment>
        <Header />
        <main>{children}</main>
      </React.Fragment>
    </ParallaxProvider>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
