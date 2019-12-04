import React from 'react';
import styled from 'styled-components';
import { device } from '../utils/device';

import HTML from "../images/svg/html.svg";
import CSS from "../images/svg/css.svg";
import JS from "../images/svg/js.svg";

const StyledAboutCard = styled.div`
	position: relative;
  background: ${props => {
    if(props.icon === 'JS') {
      return '#FCB900'
    } else if(props.icon === 'CSS') {
      return '#F78DA7';
    } else {
      return '#8ED1FC';
    }
  }};
  border-radius: 6px;
  height: 550px;
  padding: 60px 30px;
  margin-right: 30px;
 	cursor: pointer;
`

const StyledAboutCardTop = styled.div`

	position: absolute;
	bottom: 0;
	right: 0;

  svg {
    height: auto;
    width: 200px;
    fill: #ffffff;
  }
`

const StyledAboutCardBottom = styled.div`
  h3 {
    font-size: 32px;
    margin-bottom: 15px;
    color: #ffffff;
  }

  p {
    font-size: 22px;
    color: #ffffff;
  }
`

const AboutCard = ( { title, content, icon } ) => {
	return(

		<div>
      <StyledAboutCard icon={icon}>
       <StyledAboutCardTop>

       	{(() => {
            switch(icon) {
            	case 'HTML':
            		return <HTML />
            	case 'CSS':
            		return <CSS />
            	case 'JS':
            		return <JS />
              default:
                return <p>Nothing Found</p>
            }
        })()}

       </StyledAboutCardTop>
       <StyledAboutCardBottom>
         <h3>{ title }</h3>
         <p>{ content }</p>
       </StyledAboutCardBottom>
     </StyledAboutCard>
    </div>

	)
}

export default AboutCard;