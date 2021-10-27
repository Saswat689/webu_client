import React from "react";
import './register.css';
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

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
			<span className="registerTitle">Register</span>
			<form className="registerForm" onSubmit={handleSubmit}>

				<label className="registerFormLabel"><i className="fas fa-user"></i> Username</label>
				<input type="text" className="registerInput" placeholder="Enter your username" onChange={e => setUsername(e.target.value)}/>

				<label className="registerFormLabel"> <i className="fas fa-envelope-open"></i> Email</label>
				<input type="email" className="registerInput" placeholder="Enter your email" onChange={e => setEmail(e.target.value)}/>

				<label className="registerFormLabel"><i className="fas fa-unlock-alt"></i> Password</label>
				<input type="password" className="registerInput" placeholder="Enter your password" onChange={e => setPassword(e.target.value)}/>

				<button className="registerButton" type="submit">Register</button>
			</form>
			<button className="registerLoginButton">
				<Link className="link" to="/login">Login</Link>
			</button>
		</div>
		)
	}