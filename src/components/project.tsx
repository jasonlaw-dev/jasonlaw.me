import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import React, { ReactNode } from 'react';

export interface ProjectProps {
  title: ReactNode
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '20rem',
    // background: 'linear-gradient(15deg, #09a4d1, #34a250)',
  },
  image: {
    // background: 'linear-gradient(15deg, #09a4d1, #34a250)',
  },
}));

export const Project = ({ title }: ProjectProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5">
          {title}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="h5">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};
