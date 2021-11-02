import React,{ useRef,useContext,useState } from "react";
import './login.css';
import { Link } from "react-router-dom";
import { Context } from '../../context/Context';
import axios from 'axios';
import {Helmet} from "react-helmet";
import LoginImg from '../login/undraw_happy_feeling_slmw.png'
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
	loginImg:{
		width: '180px',
	},
	loginFont:{
		fontWeight: 'bolder',
		color: '#333'
	}
})



export default function Login() {
	const classes = useStyles();
	const userRef = useRef();
	const passwordRef = useRef();
	const [userNotFound,setUserNotFound] = useState(false);
	const [passwordNotFound,setPasswordNotFound] = useState(false);
	const { dispatch,isFetching } = useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({type: 'LOGIN_START'});
		console.log(userRef.current.value);
		console.log(passwordRef.current.value)
		try{
			const res = await axios.post('http://localhost:5000/api/auth/login',{
				username: userRef.current.value,
				password: passwordRef.current.value
			})
			if (res.data.success) {
				dispatch({type: "LOGIN_SUCCESS",payload: res.data})
			}
		}
		catch(err) {
			console.log(err.response)
			if (err.response.data.message == "username not found") {
				setPasswordNotFound(false);
				setUserNotFound(true);
			}
			if (err.response.data.message == "password not found") {
				setUserNotFound(false);
				setPasswordNotFound(true);
			}
			dispatch({type: "LOGIN_FAILURE"})
		}	
	}


	return (
		<div className="login">
		<Helmet>
                <meta charSet="utf-8" />
                <title>Login on Webu</title>
         </Helmet>

			
			<form className={classes.container} onSubmit={handleSubmit}>
				<div className={classes.imgBox}><img src={LoginImg} className={classes.loginImg}/></div>
				<Typography className={classes.title}><h2 className={classes.loginFont}>Login</h2></Typography>
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
					Login
				</Button>
				<Typography className={classes.or}>----------or----------</Typography>
			</form>
			
			{/* <form className="loginForm" onSubmit={handleSubmit}>
				<img src={LoginImg} className="img-fluid png-resize"/>
				<span className="loginTitle">Login</span>
				
				<div className="icon-box">
					<i className="far fa-user"></i>
					<input type="text" className="loginInput" placeholder="Username" ref={userRef}/>
				</div>
				
				<div className="icon-box">
					<i className="fas fa-unlock"></i>
					<input type="password" className="loginInput" placeholder="Password" ref={passwordRef}/>	
				</div>


				<button className="loginButton" type="submit" disabled={isFetching}>Login</button>
				{userNotFound && (
					<span style={{color: "green",textAlign: "center",marginTop: "20px"}}>User not found</span>
				)}
				{passwordNotFound && (
					<span style={{color: "green",textAlign: "center",marginTop: "20px"}}>Password not found</span>
				)}
				<p className="sign-up">Or, login with...</p>
				<div className="icons">
					<a href="#" className="child"><i className="fab fa-facebook"></i></a>
					<a href="#" className="child"><i className="fab fa-twitter"></i></a>
					<a href="#" className="child"><i className="fab fa-google"></i></a>
				</div>
			</form> */}
			<button className="loginRegisterButton">
				<Link className="link" to="/register">Register</Link>
			</button>
		</div>
	)
}	