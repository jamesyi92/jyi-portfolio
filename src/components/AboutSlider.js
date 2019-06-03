import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AboutCard from './AboutCard';

import { graphql, StaticQuery } from 'gatsby';


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2
};


const AboutSlider = () => {

	return (


		<StaticQuery
			query={graphql`
				query AboutCardQuery{
			  	allAboutcardJson {
				    edges {
				      node {
				        id
				        icon
				        title
				        content
				      }
				    }
				  }
			  }
			`}
			render={data =>
				<Slider {...settings}>
					{
						data.allAboutcardJson.edges.map((card, index) => {
							return(
								<AboutCard
									key={card.node.id}
									title={card.node.title}
									content={card.node.content}
									icon={card.node.icon}
								/>
							)
						})
					}
			  </Slider>
			}
		/>

	);

}


export default AboutSlider;
