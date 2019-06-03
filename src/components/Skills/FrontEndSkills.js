// HTML
// CSS
// Javascript
// ES6
// lodash
// SASS
// NPM
// Yarn
// Bootstrap
// Bulma
// Foundation Email
// ESLint
// Webpack
// gulp
// React
// React Pose
// Redux
// Styled Components
// GatsbyJS
// jQuery
// AJAX

import React, { Component } from 'react';
import styled from 'styled-components';

import HTML from "../../images/svg/logos/html5.svg";
import CSS from "../../images/svg/logos/css3.svg";
import JS from "../../images/svg/logos/javascript.svg";
import Lodash from "../../images/svg/logos/lodash.svg";
import Sass from "../../images/svg/logos/sass.svg";
import NPM from "../../images/svg/logos/npm.svg";
import Yarn from "../../images/svg/logos/yarn.svg";
import Bootstrap from "../../images/svg/logos/bootstrap.svg";
import Foundation from "../../images/svg/logos/foundation.svg";
import ESLint from "../../images/svg/logos/eslint.svg";
import Webpack from "../../images/svg/logos/webpack.svg";
import Gulp from "../../images/svg/logos/gulp.svg";
import ReactLogo from "../../images/svg/logos/reactlogo.svg";
import ReduxLogo from "../../images/svg/logos/redux.svg";
import GatsbyJSLogo from "../../images/svg/logos/gatsby.svg";
import JQueryLogo from "../../images/svg/logos/jquery.svg";

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
	{ name: "HTML", url: "https://www.gatsbyjs.org/", comp: HTML },
	{ name: "CSS", url: "https://www.gatsbyjs.org/", comp: CSS },
	{ name: "JS", url: "https://www.gatsbyjs.org/", comp: JS },
	{ name: "Lodash", url: "https://www.gatsbyjs.org/", comp: Lodash },
	{ name: "Sass", url: "https://www.gatsbyjs.org/", comp: Sass },
	{ name: "npm", url: "https://www.gatsbyjs.org/", comp: NPM },
	{ name: "Yarn", url: "https://www.gatsbyjs.org/", comp: Yarn },
	{ name: "Bootstrap", url: "https://www.gatsbyjs.org/", comp: Bootstrap },
	{ name: "Foundation", url: "https://www.gatsbyjs.org/", comp: Foundation },
	{ name: "ESLint", url: "https://www.gatsbyjs.org/", comp: ESLint },
	{ name: "Webpack", url: "https://www.gatsbyjs.org/", comp: Webpack },
	{ name: "Gulp", url: "https://www.gatsbyjs.org/", comp: Gulp },
	{ name: "ReactLogo", url: "https://www.gatsbyjs.org/", comp: ReactLogo },
	{ name: "ReduxLogo", url: "https://www.gatsbyjs.org/", comp: ReduxLogo },
	{ name: "GatsbyJSLogo", url: "https://www.gatsbyjs.org/", comp: GatsbyJSLogo },
	{ name: "JQueryLogo", url: "https://www.gatsbyjs.org/", comp: JQueryLogo},
]; 

class FrontEndSkills extends Component {


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

export default FrontEndSkills;