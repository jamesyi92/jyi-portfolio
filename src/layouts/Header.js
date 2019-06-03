import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from 'styled-components'

import { device } from '../utils/device';

import posed from 'react-pose';

import Navigation from './Navigation';

const StyledHeader = styled.header`

  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  right: 30px;
  top: 30px;
  background: #ffffff;
  border-radius: 2px;
  width: 50px;
  height: 50px;
  cursor: pointer;

  span {

    position: relative;

    &,
    &::before,
    &::after {
        width: 20px;
        height: 2px;
        background-color: #212121;
        display: inline-block;
    }

    &::before,
    &::after {
        content: "";
        position: absolute;
        left: 0;
        transition: all .2s;
    }

    &::before { top: -6px; }
    &::after { top: 6px; }

  }

  span.open {

    background-color: transparent;

    &::before {
      top: 0;
      transform: rotate(135deg);
    }

    &::after {
      top: 0;
      transform: rotate(-135deg);
    }


  }



`


class Header extends Component {


  state = {
    isMenuOpen: false
  }

  toggleMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  }

  render() {

    const { isMenuOpen } = this.state;

    return(

      <React.Fragment>
        <StyledHeader onClick={ this.toggleMenu }>
          <span className={ isMenuOpen ? 'open' : 'closed' }></span>
        </StyledHeader>
        <Navigation isMenuOpen={ isMenuOpen } />
      </React.Fragment>

    )

  }

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
