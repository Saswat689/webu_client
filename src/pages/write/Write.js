import React,{ useState,useContext } from "react";
import './write.css';
import axios from 'axios';
import {Context} from "../../context/Context";
import {Helmet} from "react-helmet";

export default function Write() {

	const [title,setTitle] = useState("");
	const [desc,setDesc] = useState("");
	const [file,setFile] = useState("");
	const { user } = useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newPost = {
			username: user.username,
			title,
			desc,
		}
	if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			data.append("name",filename)
			data.append("file",file)
			newPost.photo = filename;
		try{
			await axios.post('http://localhost:5000/api/upload',data);
		}
		catch(err) {
			console.log(err);
		}
	}
		try{
		    const res = await axios.post('http://localhost:5000/api/posts',newPost)
		    console.log(res)
		    window.location.replace("/post/" + res.data._id + "/" + `${res.data.title.split(' ').join('-').toLowerCase()}`);
		}	
		catch(err) {
			console.log(err);
		}
	}

	return (
		<div className="write">
		<Helmet>
                <meta charSet="utf-8" />
                <title>Write a blog on Webu</title>
           </Helmet>
		{file && (
			<img
				src={URL.createObjectURL(file)} //create a url of the file and show
				alt=""
				className="writeImg"

				/>
		)}
			<form className="writeForm" onSubmit={handleSubmit}>
				<div className="writeFormGroup">
					<label htmlFor="fileInput">
						<i className="writeIcon fas fa-plus"></i>
					</label>	
					<input type="file" id="fileInput" style={{display: "none"}} onChange={e=>setFile(e.target.files[0])}/>
					<input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
				</div>
				<div className="writeFormGroup">
					<textarea placeholder="Tell your story..." type="text" className="writeInput writeText" onChange={e=>setDesc(e.target.value)}></textarea>
				</div>
				<button className="writeSubmit" type="submit">Publish</button>
			</form>
		</div>
		)
	}