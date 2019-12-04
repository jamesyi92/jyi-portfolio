import React from 'react';
import styled from 'styled-components'
import { device } from '../utils/device';
import posed from 'react-pose';
import { Link } from "gatsby";

const Menu = posed.div({
  open: {
    x: '0%',
    opacity: 1,
    delayChildren: 200,
    staggerChildren: 80,
  },
  closed: { 
    opacity: 0,
    x: '100%',
    delay: 200 
  }
});

const StyledMenu = styled(Menu)`

  opacity: 0;
  position: fixed;
  display: flex;
  align-items: center;
  background: #262626;
  width: 100%;
  height: 100%;
  z-index: 100;
  right: 0;
  top: 0;

  @media ${device.laptop} {

    width: 70%;

  }

  
`

const StyledMenuList = styled.div`
  
  display: flex;
  flex-direction: column;

`


const ListItem = posed.div({
  open: { 
    y: 0, 
    opacity: 1 
  },
  closed: { 
    y: 20, 
    opacity: 0 
  }
});

const StyledListItem = styled(ListItem)`

  color: #ffffff;
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 30px;
  overflow: hidden;
  cursor: pointer;

  a {

    position: relative;
    color: #ffffff;
    text-decoration: none;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 4px;
      background: #ffffff;
      bottom: -10px;
      transform: translateY(-50%) translateX(-100%);
      opacity: 0;
      transition: all .2s cubic-bezier(0.7,0,0.3,1);
    }

    &:hover {

      &::after {

        opacity: 1;
        transform: translateY(-50%) translateX(0%);

      }

    }

   }

  @media ${device.laptop} {

    margin-left: 100px;

  }


`

const Navigation = ({ isMenuOpen }) => {

	return(
		<StyledMenu pose={ isMenuOpen ? 'open' : 'closed' }>
      <StyledMenuList>
        <StyledListItem><Link to="/">Home</Link></StyledListItem>
        <StyledListItem><Link to="/">About Me</Link></StyledListItem>
        <StyledListItem><Link to="/">Work</Link></StyledListItem>
        <StyledListItem><Link to="/">Skills</Link></StyledListItem>
        <StyledListItem><Link to="/resume">Resume</Link></StyledListItem>
      </StyledMenuList>
    </StyledMenu>
	)

}

export default Navigation;