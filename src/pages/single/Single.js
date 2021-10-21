import React,{ useState,useEffect,useContext } from "react";
import './single.css';
import SinglePost from '../../components/singlePost/SinglePost';
import {Helmet} from "react-helmet";
import axios from "axios";
import { useLocation } from "react-router";

export default function Single() {

		const location = useLocation();

	const path = location.pathname.split('/')[2]; //get the userId
	const [post,setPost] = useState({});

	useEffect(() => {
		const getPost = async () => {
			const res = await axios.get('http://localhost:5000/api/posts/' + path);
			setPost(res.data);
		};
		getPost();
	},[path]);

	return (
		<div className="single">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{post.title}</title>
            </Helmet>
			<SinglePost  post={post}/>
		</div>
	)
}