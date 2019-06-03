// CodeShip
// Heroku
// WPEngine
// Wordpress
// Netlify
// Git
// Sublime
// Sage 9 
// Babel
// Hubspot
// Underscores
//Contentful


import React, { Component } from 'react';
import styled from 'styled-components';

import CodeShipLogo from "../../images/svg/logos/codeship.svg";
import HerokuLogo from "../../images/svg/logos/heroku.svg";
import WPEngineLogo from "../../images/svg/logos/wpengine.svg";
import WordpressLogo from "../../images/svg/logos/wordpress.svg";
import NetlifyLogo from "../../images/svg/logos/netlify.svg";
import GitLogo from "../../images/svg/logos/git.svg";
import SublimeLogo from "../../images/svg/logos/sublime.svg";
import BabelLogo from "../../images/svg/logos/babel.svg";
import HubspotLogo from "../../images/svg/logos/hubspot.svg";


const StyledLogoBox = styled.div`

	& {
		display: flex;
		align-items: center;
		margin-bottom: 30px;
		justify-content: center;
		min-height: 140px;
		padding: 0 60px;
	}
	
	svg {
		height: 90px;
		width: auto;
	}

`


const items = [
	{ name: "CodeShip", url: "https://www.gatsbyjs.org/", comp: CodeShipLogo },
	{ name: "Heroku", url: "https://www.gatsbyjs.org/", comp: HerokuLogo },
	{ name: "WPEngine", url: "https://www.gatsbyjs.org/", comp: WPEngineLogo },
	{ name: "Wordpress", url: "https://www.gatsbyjs.org/", comp: WordpressLogo },
	{ name: "Netlify", url: "https://www.gatsbyjs.org/", comp: NetlifyLogo },
	{ name: "Git", url: "https://www.gatsbyjs.org/", comp: GitLogo },
	{ name: "Sublime Text", url: "https://www.gatsbyjs.org/", comp: SublimeLogo },
	{ name: "Babel", url: "https://www.gatsbyjs.org/", comp: BabelLogo },
	{ name: "Hubspot", url: "https://www.gatsbyjs.org/", comp: HubspotLogo },
]; 

class OtherSkills extends Component {


	render() {
		return (
			items.map(item => {
				const Icon = item.comp;

				return (
					<div key={item.name} className="col-md-3">
						<StyledLogoBox>
							<Icon />
						</StyledLogoBox>
					</div>
				)
			})
		);
	}
}

export default OtherSkills;