import React, { Component } from 'react';

import { getUsersData } from '../utils/api';

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import TextField from 'material-ui/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
 
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  
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
    
    button: {
      margin: theme.spacing.unit * 2,
      
    },
    
    row: {
      display: 'flex',
      justifyContent: 'center',
    },
});



class Login extends Component {
  constructor() {
    super()
    this.state = { 
        users: [], 
        email: '',
        password: ''
    };
  }

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
      const { email,password } = this.state;
      this.props.history.push(`/home`);

      // axios.post('/', { email, password })
      //   .then((result) => {
      //     //access the results here....
      //   });      
    }

    render() { 
      const { users, email, password } = this.state;
      const { classes } = this.props;

        return (
            <div>
              <Grid container spacing={24}>
              <Grid item xs={12}>
                  <Paper className={classes.paper}>
                <form onSubmit={this.onSubmit}>
                  <h2>Welcome to ACME Bank</h2>
                  <h4>Log in</h4>
                  <div>
                  <TextField name="email" label="Email" className={classes.textField} onChange={this.onChange} margin="normal" required/>
                 </div>
                 <div>
                  <TextField name="password" label="Password" type="password"  className={classes.textField} onChange={this.onChange} margin="normal" required/>
                </div>
                
                 <Button className={classes.button} variant="raised" color="primary"  type="submit"> Log in</Button>
                </form>
                </Paper>
                </Grid> 
                </Grid>
            </div>
          )
    }
}
 
Login.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Login);