import React, { Component } from 'react';
import Nav from './Nav';
import { getTransactionsData } from '../utils/api';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
 
  table: {
    minWidth: 700,
  },
 
    paper: {
      margin: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      
    },
    
    button: {
      margin: theme.spacing.unit,
    },
    
    row: {
      display: 'flex',
      justifyContent: 'center',
    },
});


class Transactions extends Component {
    
  constructor() {
    super()
    this.state = { transactions: [] };
  }

  getTransactionsData() {
    getTransactionsData().then((transactions) => {
      this.setState({ transactions });
    });
  }

  componentDidMount() {
    this.getTransactionsData();
  }
    render() { 
        const { transactions }  = this.state;
        const { classes } = this.props;

        return ( 
            <div >
                <Nav/>
                <div className={classes.root}>
                { transactions.map((transaction, index) => (
                  
                  <div key={index}>
                
                  <Grid container spacing={24}>
                    <Grid item xs={12} >
                      <Paper className={classes.paper}>
                        <ExpansionPanel>
                          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>{ transaction.accountType }</Typography>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails>
                            <Table className={classes.table}>
                              <TableHead>
                                <TableRow>
                                  <TableCell>Transaction Description</TableCell>
                                  <TableCell>Transaction Date</TableCell>
                                  <TableCell>Transaction Type</TableCell>
                                  <TableCell>Transaction Amount</TableCell>
                                  
                                </TableRow>
                              </TableHead>
                              
                              <TableBody>
                                <TableRow >
                                  <TableCell>{ transaction.transactionDesc } </TableCell>
                                  <TableCell >{ transaction.transactionDate }</TableCell>
                                  <TableCell >{ transaction.transactionType }</TableCell>
                                  <TableCell >{ transaction.transactionAmount} USD</TableCell>
                                </TableRow> 
                              </TableBody>
                            </Table>
                          </ExpansionPanelDetails>
                        </ExpansionPanel>
                      </Paper>
                    </Grid> 
                  </Grid>
                </div>
                ))}
                </div>
            </div>
            )
    }
}
 
Transactions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Transactions);
