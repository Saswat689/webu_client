import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {Link} from 'react-router-dom'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CategoryIcon from '@material-ui/icons/Category';
import CreateIcon from '@material-ui/icons/Create';
import CodeIcon from '@material-ui/icons/Code';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

const useStyles = makeStyles((theme) => ({
	appbar: {
		backgroundColor: '#011627'
	},
  root: {
    // flexGrow: 1,
		// backgroundColor: 'red'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
	containerbox:{
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
  title: {
    // flexGrow: 1,
  },
	toggle:{
		display: 'block',
		[theme.breakpoints.up("sm")]:{
			display: "none"
		},
	},
	login:{
		marginRight: '20px'
	},
	ul:{
		display: 'flex',
		alignItems: 'center',
		listStyle: 'none',
		gap: '1.7rem'
	},
	items:{
		display: 'none',
		// display: 'block',
		[theme.breakpoints.up("sm")]:{
			display: "block",
		},
		alignItems: 'center',
		marginTop: '15px'
	},
	link: {
		color: "white"
	},
	list:{
		width: '250px',
		paddingTop: '10px'
	}

}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <div className={classes.containerbox}>
						<Typography className={classes.title}>
						<Link className="link" to="/">Webu</Link>
						</Typography>
						<Typography className={classes.items}>
							<ul className={classes.ul}>
								<li><Link className="link" to="/">Home</Link></li>
								<li><Link className="link" to="/write">Write</Link></li>
								<li><Link className="link" to="/categories">Categories</Link></li>
							</ul>
						</Typography>
						<Typography className={classes.login}><Link className="link" to="/login">Login</Link></Typography>
					</div>
            <div className={classes.toggle}>
							<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer" onClick={handleMenu}>
            		<MenuIcon />
          		</IconButton>
              <SwipeableDrawer
								className={classes.menu}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                open={open}
                onClose={handleClose}
              >
                <div className={classes.list}>
									<MenuItem onClick={handleClose}><ListItemIcon><CodeIcon fontSize="small"/></ListItemIcon> <Link className="link" to="/">Home</Link></MenuItem>
									<MenuItem onClick={handleClose}><ListItemIcon><CreateIcon fontSize="small"/></ListItemIcon><Link className="link" to="/write">Write</Link></MenuItem>
									<MenuItem onClick={handleClose}><ListItemIcon><CategoryIcon fontSize="small"/></ListItemIcon><Link className="link" to="/categories">Categories</Link></MenuItem>
								</div>
              </SwipeableDrawer>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}


// import React from 'react'
// import {makeStyles, AppBar, Toolbar, Typography} from '@material-ui/core'

// const useStyles = makeStyles ((theme) => ({
// 	toolbar: {
// 		display: "flex",
// 		alignItems: 'center',
// 		justifyContent: "space-between"
// 	},
// 	lists:{
// 		display: "flex",
// 		alignItems: 'center',
// 		gap: '1rem',
// 		listStyle: "none",
// 		marginTop: '20px'
// 	},
// 	li:{
// 		textDecoration: 'none'
// 	}
// }));


// const Navbar = () => {
// 	const classes = useStyles();
// 	return (
// 		<AppBar>
// 			<Toolbar className={classes.toolbar}>
// 				<Typography variant="h6">
// 					Webu Blog
// 				</Typography>
// 				<Typography>
// 					<div className={classes.pages}> 
// 						<ul className={classes.lists}>
// 							<li>Home</li>
// 							<li>Write</li>
// 							<li>Categories</li>
// 						</ul>
// 					</div>
// 				</Typography>
// 				<Typography>
// 					Login
// 				</Typography>

// 			</Toolbar>
// 		</AppBar>
// 	);
// };

// export default Navbar;













// import React from "react";
// import './topbar.css';
// import { Link } from "react-router-dom";
// import { useContext,useState,useEffect } from "react";
// import { Context } from "../../context/Context";
// import axios from "axios";

// export default function TopBar() {
	
// 	const { user,dispatch } = useContext(Context);

// 	const PP = "http://localhost:5000/images/"

// 	const handleLogout = () => {
// 		dispatch({type: "LOGOUT"});
// 	}
// 	const [cats,setCats] = useState([]);

// 	useEffect(() => {
// 		const getCats = async () => {
// 			const res = await axios.get('http://localhost:5000/api/categories');
// 			setCats(res.data);
// 		}
// 		getCats();
// 	},[]);


// 	return (
// 		<nav className="navbar navbar-expand-lg navbar-light bg-light nav">
//   <Link className="navbar-brand" to="/">Webu</Link>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav mr-auto">
//       		<li className="nav-item">
// 					<Link className="link nav-link" to="/">HOME</Link>
// 			</li>
// 			<li className="nav-item">
// 				<Link className="link nav-link" to="/write">WRITE</Link>
// 			</li>
// 			<li className="nav-item" onClick={handleLogout}>
// 					<a className="nav-link">{user && "LOGOUT"}</a>
// 			</li>
//       <li className="nav-item dropdown">
//         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           CATEGORIES
//         </a>
//         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//           { cats.map(c => (
// 			<Link to={`/?cat=${c.name}`} className="link"  key={c._id}>
// 				<li className="dropdown-item link">{c.name}</li>
// 			</Link>	
// 			))
// 		}
//         </div>
//       </li>
//     </ul>
//     <div className="topRight">
// 			{
// 				user ? (
// 				<Link to="/settings" className="link">
// 					<img 
// 				className="topImg"
// 				src={PP + user.profilePic}
// 				 alt="" />
// 				 </Link>
// 				) : (
// 					<>
// 					<li className="nav-item">
// 						<Link className="nav-link link" to="/login">LOGIN</Link>
// 					</li>
// 					</>
// 				)
// 			}
// 				<i className="topSearchIcon fas fa-search"></i>
// 		</div>
//   </div>
// </nav>
// 	)
// }