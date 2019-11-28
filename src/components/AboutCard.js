import React from 'react';
import styled from 'styled-components';
import { device } from '../utils/device';

import HTML from "../images/svg/html.svg";
import CSS from "../images/svg/css.svg";
import JS from "../images/svg/js.svg";

const StyledAboutCard = styled.div`

	position: relative;
  background: #444;;
  height: 500px;
  padding: 60px 30px;
  margin-right: 30px;
 	cursor: pointer;

  @media ${device.laptopL} {

    height: 550px;

  }

  @media ${device.desktop} {

    height: 640px;

  }

`

const StyledAboutCardTop = styled.div`

  svg {
  	position: absolute;
  	bottom: 0;
  	right: 0;
  	width: 200px;
  	height: auto;
  	fill: #ffffff;
  }

`

const StyledAboutCardBottom = styled.div`

  h3 {
    font-size: 22px;
    margin-bottom: 15px;
    color: #ffffff;
  }

  p {
    color: #ffffff;
  }

`

const AboutCard = ( { title, content, icon } ) => {
	return(

		<div>
      <StyledAboutCard>
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