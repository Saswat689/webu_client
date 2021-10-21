import React,{ useEffect,useRef,useState } from "react";
import './post.css'
import { Link } from "react-router-dom";

export default function Post({post}) {

	const PP = "http://localhost:5000/images/"

	let previewRef = useRef();
	let [previewText,setPreviewText] = useState('');

	useEffect(() => {
		setPreviewText(previewRef.current.childNodes[0].textContent);
	},[])

	console.log(previewText)

	return (
		<div className="post">

		 {post.photo && (
			<img
			className="postImg"
			src={PP + post.photo}
			 />
		)}	 
			 <div className="postInfo">
			 	<div className="postCats">
			 	{
			 		post.categories.map(c => (
			 			<span className="postCat">{c}</span>
			 		))
			 	}
			 	</div>

			 <Link to={`/post/${post._id}/${post.title.split(' ').join('-').toLowerCase()}`} className="link">	
			 	<span className="postTitle">
			 		{post.title}
			 	</span>
			 </Link>	
			 	<span className="postDate">{new Date(post.createdAt).toDateString()}</span>
			 </div>
			 <div ref={previewRef} dangerouslySetInnerHTML={{__html: post.sanitizedHtml}} style={{display: "none"}}></div>
			 <div className="postDesc">{previewText}</div> 
		</div>
	)
}



