import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
             <Grid item xs={4}>
          <Paper className={classes.paper}>Name=Berger</Paper>
        </Grid>
        </div>
    );
};

export default Home;