import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components';
import { device } from '../utils/device';

import FrontEndSkills from '../components/Skills/FrontEndSkills';
import BackendSkills from '../components/Skills/BackendSkills';
import DesignSkills from '../components/Skills/DesignSkills';
import OtherSkills from '../components/Skills/OtherSkills';

const StyledSkillsHeading = styled.h3`

  margin-bottom: 120px;
  font-weight: 400;

  span {
    display: block;
  }

`

const StyledSkillSection = styled.section`

  padding: 120px 0;

`

const StyledTab = styled.div`

  & {
  
    position: relative;
    cursor: pointer;
    margin-top: 45px;

  }

  h4 {

    text-transform: uppercase;

  }

  p {

    @media ${device.laptop} {

      width: 80%;

    }

  }

  &::after {

      position: absolute;
      content: '';
      width: 0px;
      height: 6px;
      background: ${props => props.theme.primary};
      top: -45px;
      left: 0;
      opacity: 0;
      transition: all .3s ease-in-out;

  }

  &:hover {

    &::after {

      width: 100%;
      opacity: 1;

    }
  }

  &.active {

    &::before {

      position: absolute;
      content: '';
      width: 100%;
      height: 6px;
      background: ${props => props.theme.primary};
      top: -45px;
      left: 0;

    }

  }




`

const PosedRow = posed.div({
  enter: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 50,
    opacity: 0,
  }
})

class SkillSection extends Component {

    state = {
      activeTab: 'tab1'
    }


    changeTab = (tab) => {

      this.setState({
        activeTab: tab
      });

    }

    render() {

      const { activeTab } = this.state;

      return (

        <StyledSkillSection>

          <Container>

            <Row>

              <Col md="12">
                <StyledSkillsHeading>
                  <span>Tools I Use</span>
                  <span>To Make Things Happen.</span>
                </StyledSkillsHeading>
              </Col>

            </Row>

            <Row className="mb-5">
              <Col md="3" onClick={() => this.changeTab('tab1')}>
                <StyledTab className={this.state.activeTab === 'tab1' && 'active'}>
                  <h4>Front-End</h4>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
                </StyledTab>
              </Col>
              <Col md="3" onClick={() => this.changeTab('tab2')}>
                <StyledTab className={this.state.activeTab === 'tab2' && 'active'}>
                  <h4>Backend</h4>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
                </StyledTab>
              </Col>
              <Col md="3" onClick={() => this.changeTab('tab3')}>
                <StyledTab className={this.state.activeTab === 'tab3' && 'active'}>
                  <h4>Design</h4>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
                </StyledTab>
              </Col>
              <Col md="3" onClick={() => this.changeTab('tab4')}>
                <StyledTab className={this.state.activeTab === 'tab4' && 'active'}>
                  <h4>Others</h4>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
                </StyledTab>
              </Col>
            </Row>



            <PoseGroup>

              { activeTab === 'tab1' && 
                <PosedRow className="row" key="FrontEndSkills">
                  <FrontEndSkills />
                </PosedRow>
              }

              { activeTab === 'tab2' && 
                <PosedRow className="row" key="BackendSkills">
                  <BackendSkills />
                </PosedRow>
              }

              { activeTab === 'tab3' && 
                <PosedRow className="row" key="DesignSkills">
                  <DesignSkills />
                </PosedRow>
              }

              { activeTab === 'tab4' && 
                <PosedRow className="row" key="OtherSkills">
                  <OtherSkills />
                </PosedRow>
              }

            </PoseGroup>


          </Container>

        </StyledSkillSection>
      )
  }

}

export default SkillSection;