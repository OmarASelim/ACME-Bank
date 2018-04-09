
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { getAccountsData } from '../utils/api';

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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
      margin: theme.spacing.unit,
    },
    center:{
      textAlign: 'center',
    },
    row: {
      display: 'flex',
      justifyContent: 'center',
    },
});

class Dashboard extends Component {

  constructor() {
    super()
    this.state = { accounts: [] };
  }

  getAccountsData() {
    getAccountsData().then((accounts) => {
      this.setState({ accounts });
    });
  }

  componentDidMount() {
    this.getAccountsData();
  }

  render() {

    const { accounts }  = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Nav />
        <div className={classes.root}>
          <Grid container spacing={24}>
            { accounts.map((account, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper className={classes.paper}>
                    <div key={index}>  
                      <h3>{ account.accountType }</h3>
                  
                      <p> Current balance: { account.totalAmount } USD</p>
                    </div>
                  </Paper>
                </Grid> 
              ))}
          </Grid>
        </div>
        <div className={classes.center}>
        <Link to='/transactions'> 
          <Button variant="raised" color="primary" className={classes.button}>
          View All Transactions 
          </Button> 
        </Link>     
        </div>   
      </div>       
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Dashboard);