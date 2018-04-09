import React, { Component } from 'react';
import Nav from './Nav';
import { getUsersData } from '../utils/api';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

import Avatar from 'material-ui/Avatar';
import deepOrange from 'material-ui/colors/deepOrange';

import Modal from 'material-ui/Modal';


function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }


const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    
    },
    menu: {
      width: 200,
    },
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing.unit * 2,
        margin: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        
      },
      paperModal:{
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
      },
      button: {
        margin: theme.spacing.unit,
      },
      input: {
        display: 'none',
      },
      avatar: {
        margin: '10',
        textAlign: 'center',

      },
      orangeAvatar: {
        width: 80,
        height: 80,
        textAlign: 'center',
        margin: 'auto',
        color: '#fff',
        backgroundColor: deepOrange[500],
      },
      
      row: {
        display: 'flex',
        justifyContent: 'center',
      },
  });
  


class Profile extends Component {
    constructor() {
        super()
        this.state = { 
            users: [], 
            email: '',
            password: '',
            address: '',
            city: '',
            phone: '',

            open: false,
        };
      }
      handleOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };
      getUsersData() {
        getUsersData().then((users) => {
          this.setState({ users });
        });
      }
    
      componentDidMount() {
        this.getUsersData();
      }

      onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }
        
      onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        
        // axios.post('/', { this.state })
        //   .then((result) => {
        //     //access the results here....
        //   });
        this.handleClose()
      }
      
    render() { 
        const { users } = this.state;
        const { classes } = this.props;

        return (
            <div>
                <Nav/>
                <div className="{classes.root}">
                    { users.map((user, index) => (
                        <div key={index}>  
                            <Grid container spacing={24}>
                        
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        <Avatar className={classes.orangeAvatar}>J</Avatar>

                                            <h3>{ this.state.name ? this.state.name :  user.userName  }</h3>
                                            <p> { this.state.email ? this.state.email : user.userEmail } </p>
                                            <p> { this.state.address ? this.state.address : user.userAddress } </p>
                                            <p> { this.state.city ? this.state.city : user.userCity } </p>
                                            <p> { this.state.phone ? this.state.phone : user.userPhone } </p>
                                            
                                            <Button onClick={this.handleOpen} variant="raised" className={classes.button}>
                                                Edit Profile
                                            </Button>

                                            <Modal open={this.state.open} onClose={this.handleClose}>
                                                <div style={getModalStyle()}  className={classes.paperModal}>
                                                    <form onSubmit={this.onSubmit} className={classes.container}  autoComplete="off">
                                                        <TextField fullWidth name="name" label="Name" placeholder={ user.userName } className={classes.textField} onChange={this.onChange} margin="normal"/>

                                                        <TextField fullWidth name="email" label="Email" placeholder={ user.userEmail } className={classes.textField} onChange={this.onChange} margin="normal"/>
                                                        
                                                        <TextField fullWidth id="password" label="Password" type="password" className={classes.textField} onChange={this.onChange} margin="normal"/>
                                                        
                                                        <TextField fullWidth name="address" label="Address" placeholder={ user.userAddress } className={classes.textField} onChange={this.onChange} margin="normal"/>
                                                        
                                                        <TextField fullWidth name="city" label="City" placeholder={ user.userCity } className={classes.textField} onChange={this.onChange} margin="normal"/>
                                                        
                                                        <TextField fullWidth name="phone" label="Phone" placeholder={ user.userPhone } className={classes.textField} onChange={this.onChange} margin="normal"/>

                                                        <Button type="submit" variant="raised" className={classes.button} >Submit</Button>
                                                    </form>
                                                </div>
                                            </Modal>
                                    </Paper>
                                </Grid> 
                            </Grid>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
        
Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Profile);