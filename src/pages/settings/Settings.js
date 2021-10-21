import React,{ useState,useContext } from "react";
import './settings.css';
import axios from 'axios';
import {Context} from "../../context/Context";
import {Helmet} from "react-helmet";

export default function Settings() {

	const { user,dispatch } = useContext(Context);

	const [file,setFile] = useState("");
	const [username,setUsername] = useState("");
	const [email,setEmail] = useState("");
	const [password,setPassword] = useState("");
	const [success,setSuccess] = useState(false);

	const PP = "http://localhost:5000/images/"

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({type: "UPDATE_START"});
		const updatedUser = {
			userId: user._id,
			username,
			email,
			password
		}
	if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			data.append("name",filename)
			data.append("file",file)
			updatedUser.profilePic = filename;
		try{
			await axios.post('http://localhost:5000/api/upload',data);
		}
		catch(err) {
			console.log(err.response)
			console.log(err);
		}
	}
		try{
		    const res = await axios.put('http://localhost:5000/api/users/'+user._id,updatedUser);
		    dispatch({type: "UPDATE_SUCCESS",payload: res.data});
		    setSuccess(true);

		}	
		catch(err) {
			console.log(err.response)
			console.log(err);
			dispatch({type: "UPDATE_FAILURE"});
		}
	}

	return (
		<div className="settings">
		<Helmet>
                <meta charSet="utf-8" />
                <title>Update your profile</title>
         </Helmet>
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">Update Your Account</span>
					<span className="settingsDeleteTitle">Delete Account</span>
				</div>
				<form className="settingsForm" onSubmit={handleSubmit}>
					<label>Profile Picture</label>
					<div className="settingsPP">
						<img
						src={file ? URL.createObjectURL(file) : PP + user.profilePic}
						alt=""

						/>
					<label htmlFor="fileInput">
						<i className="settingsPPIcon fas fa-plus"></i>
					</label>
					<input type="file" name="file" id="fileInput" style={{display: "none"}} onChange={(e) => setFile(e.target.files[0])}/>	
					</div>
					<label>Username</label>
					<input type="text" name="username" placeholder={user.username} onChange={e => setUsername(e.target.value)} required/>
					<label>Email</label>
					<input type="email" name="email" placeholder={user.email} onChange={e => setEmail(e.target.value)} required/>
					<label>Password</label>
					<input type="password" name="password" placeholder="Enter new password" onChange={e => setPassword(e.target.value)} required/>

					<button className="settingsSubmit" type="submit">Update</button>
					{success && <span style={{color: "green",textAlign: "center",marginTop: "20px"}}>Profile has been updated</span>}
				</form>
			</div>
		</div>
	)
}