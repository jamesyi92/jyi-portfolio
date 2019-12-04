import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { device } from '../utils/device';

import AboutSlider from '../components/AboutSlider';



const StyledAboutSection = styled.section`

  position: relative;
  padding: 90px 0;
  overflow-x: hidden;

`

const StyledAboutRow = styled(Row)`

  justify-content: flex-end;
  align-items: center;

`
const AbsoluteContainer = styled(Container)`

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

`

const StyledAboutLeftCol = styled(Col)`

  p {

    @media ${device.laptop} {

      width: 420px;

    }

  }

`

const StyledAboutRightCol = styled(Col)`

  && {

    @media ${device.laptop} {

      padding-right: 0;
      padding-left: 0;

    }

  }

`




class AboutSection extends Component{

  render() {

    return(
      <React.Fragment>

        <StyledAboutSection>

          <AbsoluteContainer>
            <Row>
              <StyledAboutLeftCol md="6">
                <h2>About Me</h2>
                <p>Hi there, my name is James and I'm a front-end developer based in Vancouver. I have been in the industry for over 4 years of building custom-tailored digital experiences for companies with technologies like WordPress, React and Gatsby. I live and breathe HTML/CSS/Javascript, with having a fierce passion of bringing UI/UX concepts to life.
                </p>
              </StyledAboutLeftCol>
            </Row>
          </AbsoluteContainer>

          <Container fluid>
            <StyledAboutRow>
              <StyledAboutRightCol md="6">

                <AboutSlider />

              </StyledAboutRightCol>
            </StyledAboutRow>
          </Container>
        </StyledAboutSection>

      </React.Fragment>
    )
  }
}

export default AboutSection;