import React from 'react';
import styled from 'styled-components'
import { device } from '../utils/device';
import posed from 'react-pose';

const Menu = posed.div({
  open: {
    x: '0%',
    delayChildren: 200,
    staggerChildren: 80,
  },
  closed: { 
    x: '100%',
    delay: 200 
  }
});

const StyledMenu = styled(Menu)`

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

  position: relative;
  color: #ffffff;
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 30px;
  padding-left: 60px;
  overflow: hidden;


  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background: #ffffff;
    bottom: 0;
    transform: translateY(-50%) translateX(-100%);
    opacity: 0;
    transition: all .4s cubic-bezier(0.7,0,0.3,1);
  }

  // &::before {
    
  //   content: attr(data-navtext);
  //   position: absolute;
  //   z-index: 2;
  //   overflow: hidden;
  //   color: ${props => props.theme.primary};
  //   width: 0%;
  //   transition: width .4s .3s;
  //   white-space: nowrap;

  // }

  &:hover {

    &::after {

      opacity: 1;
      transform: translateY(-50%) translateX(105%);

    }

    &::before {

      width: 100%;

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
        <StyledListItem data-navtext="About Me">About Me</StyledListItem>
        <StyledListItem>Work</StyledListItem>
        <StyledListItem>Skills</StyledListItem>
        <StyledListItem>Experience</StyledListItem>
        <StyledListItem>Resume</StyledListItem>
      </StyledMenuList>
    </StyledMenu>
	)

}

export default Navigation;