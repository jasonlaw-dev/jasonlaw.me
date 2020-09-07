/* eslint-disable max-len,react/jsx-one-expression-per-line */
import { Avatar, Container, Divider, Link, makeStyles, Typography } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import React, { ReactNode, useContext } from 'react';
import { DataContext } from '../contexts/data-context';
import { HistoryCard } from './history-card';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    paddingBottom: '50px',
    '& .MuiCard-root': {
      marginBottom: '15px',
    },
  },
  header: {
    paddingTop: '50px',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  card: {
    margin: '10px 0',
  },
  sectionHeader: {
    paddingBottom: '1rem',
  },
  avatarText: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: '10px',
    width: '30px',
    height: '30px',
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

const Bullet = ({ children }: { children: ReactNode }) => (
  <span style={{ display: 'flex' }}>
    <span style={{ display: 'inline-block', padding: '0 10px' }}>•</span>
    <span style={{ display: 'inline-block' }}>
      {children}
    </span>
  </span>
);

export const AboutMe = () => {
  const classes = useStyles();
  const data = useContext(DataContext);

  const exp = (
    <div>
      <Typography className={classes.sectionHeader} variant="h5">
        <div className={classes.avatarText}>
          <Avatar className={classes.avatar} sizes="">
            <SchoolIcon fontSize="small" />
          </Avatar>
          <div>Education</div>
        </div>
      </Typography>
      <HistoryCard
        name="Carnegie Mellon University"
        date="Aug 2020 - Dec 2021 (expected)"
        body="Master of Science in Mobile and IoT Engineering"
        fluidImageObject={data.cmu.childImageSharp.fluid}
        imgObjectPosition="100% 0%"
      />
      <HistoryCard
        name="The University of Hong Kong"
        date="Sep 2013 - Jun 2017"
        body={(
          <div>
            Bachelor of Economics and Finance
            <br />
            Minor in Computer Science
          </div>
        )}
        fluidImageObject={data.hku.childImageSharp.fluid}
      />
      {/*<Typography className={classes.sectionHeader} variant="h5">*/}
      {/*  <div className={classes.avatarText}>*/}
      {/*    <Avatar className={classes.avatar}>*/}
      {/*      <WorkIcon />*/}
      {/*    </Avatar>*/}
      {/*    <span>Work</span>*/}
      {/*  </div>*/}
      {/*</Typography>*/}
      {/*<HistoryCard*/}
      {/*  name="Kadensa Capital Limited (Hedge Fund)"*/}
      {/*  date="Jun 2017 - Jul 2020"*/}
      {/*  body="Software Engineer"*/}
      {/*  fluidImageObject={data.kadensa.childImageSharp.fluid}*/}
      {/*/>*/}
      {/*<HistoryCard*/}
      {/*  name="DBS Bank (Hong Kong) Limited"*/}
      {/*  date="Sep 2015 - Dec 2016"*/}
      {/*  body="Part-time Junior Developer"*/}
      {/*  fluidImageObject={data.dbs.childImageSharp.fluid}*/}
      {/*  imgObjectPosition="0% 50%"*/}
      {/*/>*/}
    </div>
  );

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <div className={classes.header}>
          <Typography variant="h2">
            About Me
          </Typography>
          <Typography variant="h6" color="textSecondary">
            <Link color="textSecondary" href="files/Chi_Kin_Jason_Law_resume.pdf">
              Resume (PDF)
            </Link>
          </Typography>
        </div>
        <Divider style={{ margin: '10px 0' }} />
        <Typography className={classes.sectionHeader} variant="h4">
          My education
        </Typography>
        <Typography variant="body1">
          I am now a student pursuing a master&apos;s degree in mobile and IoT engineering in Carnegie Mellon University.
          <br />
          <br />
          I came from a finance background, with a bachelor&apos;s degree of economics and finance and a minor in computer science from the University of Hong Kong.
          <br />
          <br />
        </Typography>

        <Typography className={classes.sectionHeader} variant="h4">
          My work experience
        </Typography>

        <Typography variant="body1">
          I have three years of full-stack development experience using Java, C++, TypeScript and React in a hedge fund in Hong Kong.
          <br />
          <br />
          My proudest project is called Research Management System — a one-stop hybrid web / desktop app for research analysts, traders and portfolio managers to query firm-specific data.
          <br />
          <Bullet>
            It aggregates start of day positions, market data feed from Bloomberg Desktop API and real-time trading fills to calculate exposure and P&L in real-time for every security in the fund portfolio.
            <br />
            And the best part is, one can travel back in time to see the intra-day change.
          </Bullet>
          <Bullet>
            It visualizes how stock prices, trades, position sizes and profits change over time in multiple interactive charts. One can see when and how they made a good / bad decision!
          </Bullet>
          <Bullet>
            It presents every stock-specific data that we scraped, such as shareholding data, short interest, and many more!
          </Bullet>
          <br />
        </Typography>
      </Container>
      <div style={{ background: 'rgb(246, 246, 246)', padding: '25px 0' }}>
        <Container maxWidth="md">
          <Typography className={classes.sectionHeader} variant="h6">
            From finance to software engineering
          </Typography>
          <Typography variant="body1">
            I began my journey as a software engineer in the summer of my sophomore year when I worked as a compliance intern in a local bank in Hong Kong.
            The job required a lot of repetitive manual work on the bank&apos;s mainframe system, and I loathed it.
            <br />
            <br />
            My reluctance to do repetitive tasks persuaded me learn VBA by myself, and wrote a program to simulate keystrokes on the mainframe system and extract information from it.
            It was my first program, and the very program that led to my pursuit of a minor in computer science and a career in software engineering.
            <br />
            <br />
            I started working as a part-time junior developer in DBS Bank in my junior year, and had been in love with programming ever since.
          </Typography>
        </Container>
      </div>
      <br />
      <Container maxWidth="md">
        <Typography className={classes.sectionHeader} variant="h4">
          What I love
        </Typography>
        <Typography variant="body1">
          I love doing leetcode questions! I have been participating in leetcode contests on a weekly basis. Check out my progress <Link href="https://leetcode.com/jasonlaw-dev/" target="_blank" rel="noopener">here</Link>.
          <br />
          <br />
          Cooking — I am in love with cooking steaks lately.
          <br />
          <br />
        </Typography>
      </Container>
      <Container maxWidth="md">
        <Typography className={classes.sectionHeader} variant="h4">
          Want to know more?
        </Typography>
        <Typography variant="body1">
          Get in touch by <Link href="mailto:jasonlaw.dev@gmail.com">email</Link>, <Link href="https://linkedin.com/in/jasonlaw-dev" target="_blank" rel="noopener">LinkedIn</Link> or <Link href="https://github.com/jasonlaw-dev" target="_blank" rel="noopener">GitHub</Link>.
        </Typography>
      </Container>
    </div>
  );
};
