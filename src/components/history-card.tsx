import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import GatsbyImage, { FluidObject } from 'gatsby-image';
import React, { ReactNode } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '200px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  media: {
    minWidth: '300px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '250px',
    },
  },
  image: {
    height: '100%',
  },
  content: {
    width: '100%',
  },
  nameDateContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
}));

export interface HistoryCardProps {
  children?: ReactNode;
  imgObjectPosition?: string;
  fluidImageObject: FluidObject | FluidObject[];
  name?: ReactNode;
  date?: ReactNode;
  body?: ReactNode;
}

export const HistoryCard = (props: HistoryCardProps) => {
  const { children, imgObjectPosition, fluidImageObject, name, date, body } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media}>
        <GatsbyImage
          className={classes.image}
          alt="image"
          fluid={fluidImageObject}
          loading="eager"
          imgStyle={{ objectPosition: imgObjectPosition }}
        />
      </CardMedia>
      <CardContent className={classes.content}>
        {children || (
          <div>
            <div className={classes.nameDateContainer}>
              <Typography variant="h6" component="div">
                {name}
              </Typography>
              <Typography variant="body2" component="div" color="textSecondary">
                {date}
              </Typography>
            </div>
            <Typography variant="body1" component="div">
              {body}
            </Typography>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
