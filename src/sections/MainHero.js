import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { device } from '../utils/device';

import Device from "../images/svg/device.svg";


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

    @media ${device.laptop} {

      position: relative;
      font-size: 90px;
      text-transform: uppercase;
      text-align: right;
      z-index: 1;

    }

  }

  h1 span {

    display: block;

  }

`

const StyledHeroTitleWrap = styled.div`

  position: relative;

  svg {

    display: none;

    @media ${device.laptop} {
      display: block;
      position: absolute;
      width: 300px;
      height: auto;
      z-index: 0;
      top: 50%;
      transform: translateY(-50%);
    }

  }
  
`

const StyledHeroRow2 = styled(Row)`

  @media ${device.laptop} {
    justify-content: flex-end;
    position: relative;
    top: 200px;
  }

`

const StyledHeroIntroText = styled.span`

  font-size: 18px;
  
`

class MainHero extends Component{

  render() {

    return(
      <React.Fragment>

        <StyledHeroSection>
          <StyledHeroWrap>
            <Container>
              <Row>
                <StyledHeroRow1Col md="8">
                  <StyledHeroTitleWrap>
                    <Device />
                    <h1>
                      <span>James Yi</span>
                      <span>Front-End</span>
                      <span>Developer</span>
                    </h1>
                  </StyledHeroTitleWrap>
                </StyledHeroRow1Col>
              </Row>
              <StyledHeroRow2>
                <Col md="4">
                  <StyledHeroIntroText>
                    I make UI/UX designs come to life on the web.
                    Coding and design is my passion.
                  </StyledHeroIntroText>
                </Col>
              </StyledHeroRow2>
            </Container>
          </StyledHeroWrap>
        </StyledHeroSection>

      </React.Fragment>
    )
  }
}

export default MainHero;