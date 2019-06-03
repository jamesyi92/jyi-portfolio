// NodeJS
// Express
// PHP
// MongoDB
// Mongoose
// JWT
// GraphQL
// Laravel
// socketio



import React, { Component } from 'react';
import styled from 'styled-components';

import NodeJsLogo from "../../images/svg/logos/nodejs.svg";
import ExpressLogo from "../../images/svg/logos/express.svg";
import PhpLogo from "../../images/svg/logos/php.svg";
import MongoDbLogo from "../../images/svg/logos/mongodb.svg";
//import JWTLogo from "../../images/svg/logos/jwt.svg";
import GraphQlLogo from "../../images/svg/logos/graphql.svg";
import LaravelLogo from "../../images/svg/logos/laravel.svg";
import SocketIOLogo from "../../images/svg/logos/socketio.svg";


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
	{ name: "NodeJS", url: "https://www.gatsbyjs.org/", comp: NodeJsLogo },
	{ name: "Express", url: "https://www.gatsbyjs.org/", comp: ExpressLogo },
	{ name: "PHP", url: "https://www.gatsbyjs.org/", comp: PhpLogo },
	{ name: "MongoDB", url: "https://www.gatsbyjs.org/", comp: MongoDbLogo },
	// { name: "JWT", url: "https://www.gatsbyjs.org/", comp: JWTLogo },
	{ name: "GraphQL", url: "https://www.gatsbyjs.org/", comp: GraphQlLogo },
	{ name: "Laravel", url: "https://www.gatsbyjs.org/", comp: LaravelLogo },
	{ name: "Socket.io", url: "https://www.gatsbyjs.org/", comp: SocketIOLogo },
]; 

class BackendSkills extends Component {


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

export default BackendSkills;