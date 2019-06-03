// Adobe XD
// Zeplin
// Adobe Kuler
// Adobe Illustrator
// Adobe Photoshop



import React, { Component } from 'react';
import styled from 'styled-components';

import XDLogo from "../../images/svg/logos/adobexd.svg";
import ZeplinLogo from "../../images/svg/logos/zeplin.svg";
import IllustratorLogo from "../../images/svg/logos/illustrator.svg";
import PhotoshopLogo from "../../images/svg/logos/photoshop.svg";


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
	{ name: "Adobe Xd", url: "https://www.gatsbyjs.org/", comp: XDLogo },
	{ name: "Zeplin", url: "https://www.gatsbyjs.org/", comp: ZeplinLogo },
	{ name: "Adobe Illustrator", url: "https://www.gatsbyjs.org/", comp: IllustratorLogo },
	{ name: "Adobe Photoshop", url: "https://www.gatsbyjs.org/", comp: PhotoshopLogo },
]; 

class DesignSkills extends Component {


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

export default DesignSkills;