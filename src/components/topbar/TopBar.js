import React from "react";
import './topbar.css';
import { Link } from "react-router-dom";
import { useContext,useState,useEffect } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function TopBar() {
	
	const { user,dispatch } = useContext(Context);

	const PP = "http://localhost:5000/images/"

	const handleLogout = () => {
		dispatch({type: "LOGOUT"});
	}
	const [cats,setCats] = useState([]);

	useEffect(() => {
		const getCats = async () => {
			const res = await axios.get('http://localhost:5000/api/categories');
			setCats(res.data);
		}
		getCats();
	},[]);


	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light nav">
  <Link className="navbar-brand" to="/">Webu</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      		<li className="nav-item">
					<Link className="link nav-link" to="/">HOME</Link>
			</li>
			<li className="nav-item">
				<Link className="link nav-link" to="/write">WRITE</Link>
			</li>
			<li className="nav-item" onClick={handleLogout}>
					<a className="nav-link">{user && "LOGOUT"}</a>
			</li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          CATEGORIES
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          { cats.map(c => (
			<Link to={`/?cat=${c.name}`} className="link"  key={c._id}>
				<li className="dropdown-item link">{c.name}</li>
			</Link>	
			))
		}
        </div>
      </li>
    </ul>
    <div className="topRight">
			{
				user ? (
				<Link to="/settings" className="link">
					<img 
				className="topImg"
				src={PP + user.profilePic}
				 alt="" />
				 </Link>
				) : (
					<>
					<li className="nav-item">
						<Link className="nav-link link" to="/login">LOGIN</Link>
					</li>
					</>
				)
			}
				<i className="topSearchIcon fas fa-search"></i>
		</div>
  </div>
</nav>
	)
}