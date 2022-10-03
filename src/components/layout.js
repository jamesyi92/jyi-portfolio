import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import lightTheme from "../utils/themes/lightTheme"
import darkTheme from "../utils/themes/darkTheme"
import Header from "../components/Header"
import ThemeSwitcher from "./ThemeSwitcher"

import "../scss/main.scss"

const Layout = ({ children }) => {

  return (
    <ThemeProvider>
      <React.Fragment>
        <Header />
        <main>{children}</main>
      </React.Fragment>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
