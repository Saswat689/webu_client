import React from "react";
import './singlePost.css';
import { useState,useEffect,useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useLocation } from "react-router";

export default function SinglePost({post}) {

	const location = useLocation();

	const path = location.pathname.split('/')[2]; //get the userId

	const { user } = useContext(Context);
	const PP = "http://localhost:5000/images/"
	const [updateMode,setupdateMode] = useState(false);

	const [title,setTitle] = useState("");
	const [desc,setDesc] = useState("");

	useEffect(() => {
		setTitle(post.title);
		setDesc(post.desc);
	},[path]);

	const handleDelete = async () => {
		try{
			await axios.delete('http://localhost:5000/api/posts/' + path,{
				data: {username: user.username}
			});
			window.location.replace('/');
		}
		catch(err) {
			console.log(err.response)
			console.log(err);
		}
	}
	const handleUpdate = async () => {
		try{
			const res = await axios.put('http://localhost:5000/api/posts/' + path,{
					username: user.username,
					title: title,
					desc: desc,
			});
			console.log(res);
			// setupdateMode(false);
		}
		catch(err) {
			console.log(err.response)
		}
	}

	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
			{post.photo && (
				<img
				src={PP + post.photo}
				alt=""
				className="singlePostImg"

				/>
			)}
				{
					updateMode ? <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="singlePostTitleInput" autoFocus/> : (
						<h1 className="singlePostTitle">{title}
						{post.username === user?.username && (
					<div className="singlePostEdit">
						<i className="singlePostIcon far fa-edit" onClick={() => setupdateMode(true)}></i>
						<i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
					</div>
				)} 
				</h1>
					)
				}
				<div className="singlePostInfo">

				<Link to={`/?user=${post.username}`} className="link">
					<span className="singlePostAuthor">Author: <b>{post.username}</b></span>
				</Link>

					<span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
				</div>
				{updateMode ? <textarea value={desc} onChange={e => setDesc(e.target.value)} className="singlePostDescInput"/> : (
				
					<div className="singlePostDesc" dangerouslySetInnerHTML={{__html: post.sanitizedHtml}} />
			
				)}
				{updateMode && <button className="singlePostButton" onClick={handleUpdate}>Update</button>}
			</div>
		</div>
	)
}