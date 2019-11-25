import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

import posed from 'react-pose';

const StyledWorkCard = styled.div`

  display: flex;
  align-items: flex-end;
  position: relative;
  min-height: 360px;
  padding: 30px 30px 60px;
  margin-bottom: 30px;
  overflow: hidden;

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
    opacity: .7;
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