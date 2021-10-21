import React from "react";
import { useState,useEffect } from "react";
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import './home.css';
import axios from "axios";
import { useLocation } from "react-router";
import {Helmet} from "react-helmet";

export default function Home() {
	const [posts,setPosts] = useState([]);
	const {search} = useLocation();	
	console.log(search)

	useEffect(() => {
		async function fetchPosts() {
			const res = await axios.get('http://localhost:5000/api/posts' + search);
			setPosts(res.data);		
		}
		fetchPosts()		
	},[search])

	return (
		<>
		<Helmet>
                <meta charSet="utf-8" />
                <title>Home | Webu</title>
         </Helmet>
		<Header />
		<div className="home">
			<Posts posts={posts}/>
		</div>
		</>
	)
}