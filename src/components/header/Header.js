import React from "react";
import './header.css';

export default function Header() {
	return (
		<div className="header">
			<div className="headerTitles">
				<span className="headerTitleSm">React & Node</span>
				<span className="headerTitleLg">Blog</span>
			</div>
			<img className="headerImg"
			src="https://i1.wp.com/www.estidia.eu/wp-content/uploads/2018/04/Savin-NY-Website-Background-Web.jpg?fit=848%2C477&ssl=1"
			alt=""
			/>
		</div>
	)
}