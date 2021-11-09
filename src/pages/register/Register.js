import React from "react";
import './register.css';
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import RegImg from '../register/undraw_project_team_lc5a.png'
import TextField from '@material-ui/core/TextField'
import { Button,  Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	container:{
		width: '420px',
		'@media (max-width: 425px)' : {
			width: '300px'
		},
		backgroundColor: 'white',
		color: '#333',
		padding: '2rem',
		borderRadius: '5px'
	},
	title:{
		textAlign: 'center',
		marginTop: '15px',
		marginBottom: '15px',
		color: 'black'
	},
	inputs:{
		marginBottom: '10px'
	},
	btn:{
		backgroundColor: 'green',
		'&:hover': {
      background: "#42ba96",
    },
		fontWeight: '500',
		color: 'white',
		marginTop: '10px'
	},
	or:{
		textAlign: 'center',
		marginTop: '15px',
		color: 'gray'
	},
	imgBox:{
		textAlign: 'center'
	},
	regImg:{
		width: '200px',
	},
	loginFont:{
		fontWeight: 'bolder',
		color: '#333'
	}
})

export default function Register() {
	const classes = useStyles();
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
			
				 <form className={classes.container} onSubmit={handleSubmit}>
				<div className={classes.imgBox}><img src={RegImg} className={classes.regImg}/></div>
				<Typography className={classes.title}><h2 className={classes.loginFont}>Register</h2></Typography>
				<TextField
					className={classes.inputs}
					variant="standard"
					type="text"
					label="Username"
					placeholder="enter username"
					fullWidth
					required
				/>
				<TextField
					className={classes.inputs}
					variant="standard"
					type="email"
					label="Email"
					placeholder="enter email"
					fullWidth
					required
				/>
				<TextField
					className={classes.inputs}
					variant="standard"
					type="password"
					label="Password"
					placeholder="enter password"
					fullWidth
					required
				/>
				<Button
					className={classes.btn}
					type="submit"
					fullWidth
					variant="contained"
				>
					Register
				</Button>
				<Typography className={classes.or}>----------or----------</Typography>
			</form>
			{/* <button className="registerLoginButton">
				<Link className="link" to="/login">Login</Link>
			</button> */}
		</div>
		)
	}