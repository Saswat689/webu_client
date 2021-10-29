import React from "react";
import './register.css';
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import RegImg from '../register/undraw_project_team_lc5a.png'


export default function Register() {

	const [username,setUsername] = useState("");
	const [email,setEmail] = useState("");
	const [password,setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try{
			const res = await axios.post('http://localhost:5000/api/auth/register',{
			username,
			email,
			password
		});
			res.data && window.location.replace('/login')
		}
		catch(err) {
			console.log(err);
		}
	}


	return (
		<div className="register">
		<Helmet>
                <meta charSet="utf-8" />
                <title>Register on Webu</title>
         </Helmet>
			<form className="registerForm" onSubmit={handleSubmit}>
				<img src={RegImg} className="img-fluid png-resize"/>
				<span className="registerTitle">Register</span>
				
				<div className="icons">
					<a href="#" className="child"><i className="fab fa-facebook"></i></a>
					<a href="#" className="child"><i className="fab fa-twitter"></i></a>
					<a href="#" className="child"><i className="fab fa-google"></i></a>
				</div>
				<p className="sign-up">Or, register with email...</p>

				<div className="icon-box">
					<i className="far fa-user"></i>
					<input type="text" className="registerInput" placeholder="Enter your username" onChange={e => setUsername(e.target.value)}/>
				</div>

				<div className="icon-box">
					<i className="far fa-envelope-open"></i>
					<input type="email" className="registerInput" placeholder="Enter your email" onChange={e => setEmail(e.target.value)}/>
				</div>

				<div className="icon-box">
					<i className="fas fa-unlock"></i>
					<input type="password" className="registerInput" placeholder="Enter your password" onChange={e => setPassword(e.target.value)}/>
				</div>

				<button className="registerButton" type="submit">Register</button>
			</form>
			<button className="registerLoginButton">
				<Link className="link" to="/login">Login</Link>
			</button>
		</div>
		)
	}