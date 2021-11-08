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