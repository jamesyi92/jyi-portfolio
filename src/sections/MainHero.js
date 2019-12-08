import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { device } from '../utils/device';

import DeviceLaptop from "../images/svg/device-laptop.svg";
import Web from '../images/svg/web.svg'

import { useSpring, config, animated } from 'react-spring';
import SvgLines from 'react-mt-svg-lines'; 

import { IoIosArrowDropdown } from "react-icons/io";


const StyledHeroSection = styled.section`

  display: flex;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #ffffff, #ffffff 50%, ${props => props.theme.primaryLight} 50%);

`;


const StyledHeroWrap = styled.div`

  width: 100%;

`;


const StyledHeroRow1Col = styled(Col)`

  h1 {
    position: relative;
    font-size: 90px;
    text-transform: uppercase;
    text-align: right;
    z-index: 1;
  }

  h1 span {

    display: block;

  }

`

const StyledHeroTitleWrap = styled.div`

  position: relative;
  
`

const StyledDeviceLaptop = styled(DeviceLaptop)`
  display: block;
  position: absolute;
  width: 40%;
  height: auto;
  z-index: 1;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`

const DownArrow = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  z-index: 1;


  svg {
    fill: ${props => props.theme.primary};
    width: 32px;
    height: auto;
  }
`

const MainHero = () => {

  const titleProps = useSpring({
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
    config: config.slow,
    delay: 800,
    from: { 
      opacity: 0,
      transform: 'translate3d(0, 30px, 0)'
    },
  })

    return(
      <StyledHeroSection>
        <SvgLines animate={ true } duration={ 500 }>
          <StyledDeviceLaptop />
        </SvgLines>
        <DownArrow>
          <IoIosArrowDropdown />
        </DownArrow>
        <StyledHeroWrap>
          <Container>
            <Row>
              <StyledHeroRow1Col md="8">
                <StyledHeroTitleWrap>
                  <animated.h1 style={titleProps}>
                    <span>James Yi</span>
                    <span>Front-End</span>
                    <span>Developer</span>
                  </animated.h1>
                </StyledHeroTitleWrap>
              </StyledHeroRow1Col>
            </Row>
          </Container>
        </StyledHeroWrap>
      </StyledHeroSection>
    )
}

export default MainHero;