import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import HomeIcon from '@material-ui/icons/Home';
import StarIcon from '@material-ui/icons/AccountBalanceWallet';
import '../containers/App.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class Nav extends Component {
  state = {
    auth: true,
    anchorEl: null,
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const sideList = (
      <div className={classes.list}>
      <Link to="/home">
        <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </Link>
    <Link to="/transactions">
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
    <ListItemText primary="Transactions" />
    </ListItem>
    </Link>
    <Link to="/profile">
    <ListItem button>
      <ListItemIcon>
        <AccountCircle />
      </ListItemIcon>
     <ListItemText primary="Profile" />
    </ListItem>
    </Link>
      </div>
    );
    return (
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>        
          <IconButton className={classes.menuButton}   onClick={this.toggleDrawer('left', true)} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            ACME Bank
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}><Link to="/profile">Profile</Link></MenuItem>
                <MenuItem onClick={this.handleClose}><Link to="/">Logout</Link></MenuItem>

              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
    </div>
      
    );
  }
}
Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Nav);
