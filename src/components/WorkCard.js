import React from 'react';
import styled from 'styled-components';

const StyledWorkCard = styled.div`

  display: flex;
  align-items: flex-end;
  position: relative;
  height: 360px;
  padding: 30px 30px 60px;
  margin-bottom: 30px;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 20px 40px rgba(0,0,0,.14);

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    background: ${props => props.theme.primaryLight};
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: .4;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    background: ${props => props.theme.primary};
    border-radius: 50%;
    height: 300px;
    width: 300px;
    bottom: -300px;
    left: -150px;
    transition: all .3s ease-in-out;
  }

  &:hover {

    &,
    & h3{
      color: #ffffff;
    }

    &::after {
      transform: scale(6);
    }

  }

`

const StyledWorkCardTitle = styled.div`

  z-index: 1;

  h3 {
    color: #262626;
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 15px;
    transition: all .3s ease-in-out;
  }

  span {
    font-size: 15px;
    display: block;
    transition: all .3s ease-in-out;
  }

`


const WorkCard = props => {

		
		const { card } = props;

		return (

      <StyledWorkCard>
       <StyledWorkCardTitle>
         <h3>{ card.title }</h3>
         <span>{ card.caption }</span>
       </StyledWorkCardTitle>
      </StyledWorkCard>

		)

}

export default WorkCard;