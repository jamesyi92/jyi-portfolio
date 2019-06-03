import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components';
import { device } from '../utils/device';

import WorkCardData from '../data/workCardData';
import WorkCard from '../components/WorkCard';



const StyledWorkSection = styled.section`

  padding: 120px 0;

`

const StyledWorkIntroRow = styled(Row)`

  margin-bottom: 90px;

`

const StyledWorkIntroCol = styled(Col)`


  display: flex;
  flex-direction: column;

  @media ${device.laptop} {

    align-items: center;
    justify-content: space-between;
    flex-direction: row;

  }

`

const StyledFilterGroup = styled.ul`

  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;

`

const Filter = styled.li`

  position: relative;
  padding: 10px 30px;
  border: 1px solid ${props => props.theme.primary};
  color: ${props => props.theme.primary};
  border-radius: 2px;
  transition: all .2s ease-in-out;
  cursor: pointer;
  margin-bottom: 0;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &.active {
    background: ${props => props.theme.primary};
    color: #ffffff;
  }

  &::before {
    content: '';
    position: absolute;
    background: ${props => props.theme.primary};
    height: 100%;
    width: 0;
    top: 0;
    left: 0;
    opacity: 1;
    transition: all .2s ease-in-out;
    z-index: -1;
  }

  &:hover {

    & {
      color: #ffffff;
    }

    &::before {
      opacity: 1;
      width: 100%;
    }

  }

  &:hover {

    color: #ffffff;

  }
`
const PosedWorkCard = posed.div({
  enter: { y: 0, opacity: 1, },
  exit: { y: 50, opacity: 0, }
})


class WorkSection extends Component{

  state = {
    workCards: WorkCardData,
    filteredWordCards: WorkCardData,
    selected: 'all'
  }

  filterWorkCards = (workCat) => {

    let workCardsCopy = [...this.state.workCards];

    let filteredWorkCardsCopy = workCardsCopy.filter(card => {

      if(workCat === 'all'){
        return true;
      };

      return card.category === workCat;

    })

    this.setState({
      filteredWordCards: filteredWorkCardsCopy,
      selected: workCat
    })

  }

  render() {

    const { filteredWordCards, selected } = this.state;


    return(
      <React.Fragment>

        <StyledWorkSection>

          <Container>

            <StyledWorkIntroRow>
              <StyledWorkIntroCol md="12">
                <h2 className="mb-3 mb-lg-0">My Work</h2>
                <StyledFilterGroup>
                  <Filter onClick={ () => this.filterWorkCards('all') } className={ selected === 'all' && 'active' }>All</Filter>
                  <Filter onClick={ () => this.filterWorkCards('work') } className={ selected === 'work' && 'active' }>Work</Filter>
                  <Filter onClick={ () => this.filterWorkCards('sandbox') } className={ selected === 'sandbox' && 'active' }>Sandbox</Filter>
                </StyledFilterGroup>
              </StyledWorkIntroCol>
            </StyledWorkIntroRow>

            <Row>

                <PoseGroup>
                { filteredWordCards.map((card, index) => {
                  return(
                    <PosedWorkCard className={ (index + 1) === 2 || (index + 1) === 3 || (index + 1) === 6  ? "col-lg-8" : "col-lg-4" } key={ index + card.title }>
                      <WorkCard card={ card } />
                    </PosedWorkCard>
                  )
                }) }
                </PoseGroup>

              
            </Row>

          </Container>

        </StyledWorkSection>

      </React.Fragment>
    )
  }
}

export default WorkSection;