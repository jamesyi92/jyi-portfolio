import React from 'react';
import { graphql, useStaticQuery  } from 'gatsby';
import Img from 'gatsby-image';
import { Container, Row, Col } from 'reactstrap';
import styled, { keyframes } from 'styled-components';
import { device } from '../utils/device';

import Particles from 'react-particles-js';
import particlesConfig from '../utils/particlesConfig';

import AboutSlider from '../components/AboutSlider';

import Wave from '../images/svg/wave.svg';



const StyledAboutSection = styled.section`

  position: relative;
  padding: 90px 0 180px;
  background-image: linear-gradient(0deg,rgba(0,7,88,.8),rgba(8,0,103,1));

`

const StyledParticles = styled(Particles)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 0;
`

const StyledAboutRow = styled(Row)`

  justify-content: flex-end;
  align-items: center;

`
// const AbsoluteContainer = styled(Container)`

//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);

// `

const StyledAboutLeftCol = styled(Col)`

  text-align: center;
  color: #ffffff;

`

// const StyledAboutRightCol = styled(Col)`

//   && {

//     @media ${device.laptop} {

//       padding-right: 0;
//       padding-left: 0;

//     }

//   }

// `

const ProfilePic = styled(Img)`
  max-width: 100%;
  margin-bottom: 30px;
  border-radius: 50%;
  width: 200px;
  margin: 0 auto 30px;
`

const animateWave = keyframes`
  0% {
    transform: scale(1, .4);
  }
  100% {
    transform: scale(1,1);
  }
`

const StyledWaveWrap = styled.div`
  position: absolute;
  width: 100%;
  bottom: -8px;
  z-index: 2;
  svg {
    transform-origin: bottom;
    animation: ${animateWave} 8s ease-in-out -8s infinite alternate forwards;
  }

`



const AboutSection = () => {

  const data = useStaticQuery(graphql`
    query AboutImageQuery {
      aboutImage: file(relativePath: { eq: "jy-profile-pic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


  return(
    <StyledAboutSection>
      <StyledWaveWrap>
        <Wave />
      </StyledWaveWrap>
    <StyledParticles
          params={ particlesConfig }
        />
        <Container>
          <Row className="justify-content-center">
            <StyledAboutLeftCol md="6">
              <ProfilePic fluid={data.aboutImage.childImageSharp.fluid} />
              <h2>Hi, I'm James!</h2>
              <p>I'm a front-end developer based in Vancouver. I have been in the industry for over 4 years of building custom-tailored digital experiences for companies with technologies like WordPress, React and Gatsby. I live and breathe HTML/CSS/Javascript, with having a fierce passion of bringing UI/UX concepts to life.
              </p>
            </StyledAboutLeftCol>
          </Row>
        </Container>

      {/* <Container fluid>
        <StyledAboutRow>
          <StyledAboutRightCol md="6">

            <AboutSlider />

          </StyledAboutRightCol>
        </StyledAboutRow>
      </Container>
      */}
    </StyledAboutSection>
  )
}





export default AboutSection;