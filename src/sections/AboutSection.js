import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { device } from '../utils/device';

import AboutSlider from '../components/AboutSlider';



const StyledAboutSection = styled.section`

  position: relative;
  padding: 240px 0;
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo officia, inventore incidunt quam voluptatum dolores eius unde natus doloribus qui, id minima magnam nihil libero harum beatae exercitationem sapiente ducimus.</p>
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