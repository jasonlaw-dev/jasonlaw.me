import { Grid, makeStyles, Typography } from '@material-ui/core';
import GatsbyImage from 'gatsby-image';
import React, { useContext } from 'react';
import { DataContext } from '../contexts/data-context';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    background: '#e0ebe8',
  },
  imageGrid: {
    padding: '0 100px',
    [theme.breakpoints.down('sm')]: {
      padding: '0 50px',
    },
  },
  image: {
    transform: 'rotate(-3deg)',
    maxHeight: '40vh',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      maxHeight: '50vh',
      transform: 'none',
    },
  },
  introGrid: {
    padding: '20px 30px',
    [theme.breakpoints.down('md')]: {
      padding: '20px 10px 40px',
      alignItems: 'initial',
    },
  },
  introHeader: {
    paddingBottom: '15px',
    [theme.breakpoints.only('xs')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '3rem',
    },
  },
}));

export const Home = () => {
  const classes = useStyles();
  const data = useContext(DataContext);
  return (
    <Grid className={classes.root} container justify="center">
      <Grid className={classes.imageGrid} container item lg={5} sm={12} alignItems="center" justify="center">
        <GatsbyImage className={classes.image} alt="This is Jason" fluid={data.jason.childImageSharp.fluid} imgStyle={{ objectFit: 'contain' }} loading="eager" />
      </Grid>
      <Grid className={classes.introGrid} container item lg={7} alignItems="center" justify="center">
        <div>
          <Typography className={classes.introHeader} variant="h2">
            Hi, my name is Jason.
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Student at CMU
            <br />
            Software Engineer
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};
