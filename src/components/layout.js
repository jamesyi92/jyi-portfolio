import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import lightTheme from '../utils/themes/lightTheme';
import darkTheme from '../utils/themes/darkTheme';
import Header from '../components/Header';
import ThemeSwitcher from './ThemeSwitcher';

import '../scss/main.scss';

const Layout = ({ children }) => {

	const stored = window.localStorage.getItem('isDarkMode');
	const [isDarkMode, setIsDarkMode] = useState(stored === 'true' ? true : false)

	return (
	  <ThemeProvider theme={ isDarkMode ? darkTheme : lightTheme }>
	    <React.Fragment>
	      <Header />
	      <ThemeSwitcher 
	      	onClick={() => {
		      	setIsDarkMode(!isDarkMode);
		      	window.localStorage.setItem('isDarkMode', !isDarkMode);
		      }}
	      >
	      	Toggle Theme
	      </ThemeSwitcher>
	      <main>
	      	{children}
	      </main>
	    </React.Fragment>
	  </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
