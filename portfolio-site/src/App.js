import React from 'react';

import classes from './App.css'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import { Avatar, Box, Button, Card, CardContent, CardHeader, Container as Grid, Paper, Typography } from '@material-ui/core';
import { GridList, GridListTile, ListSubheader } from '@material-ui/core';
import ProfileImage from './assets/images/avatar/chris.jpg';

import AngularImage from './assets/images/experience/angular.png';
import AWSImage from './assets/images/experience/aws.png';
import CSSImage from './assets/images/experience/css.png';
import ExpressImage from './assets/images/experience/express.png';
import HtmlImage from './assets/images/experience/html5.png';
import JSImage from './assets/images/experience/javascript.png';
import MongoDBImage from './assets/images/experience/mongodb.png';
import MySqlImage from './assets/images/experience/mysql.png';
import NodeImage from './assets/images/experience/node.jpg';
import PythonImage from './assets/images/experience/python.png';
import ReactImage from './assets/images/experience/react.png';
import SassImage from './assets/images/experience/sass.png';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  return (
    <div>
      <Grid>
        <Card>
          <CardHeader
          avatar={
            <Avatar alt="Chris" src={ProfileImage} />
          } title="Chris Conner"
          subheader="Frontend Developer"
          />
        </Card>
        <Box component="span" m={1} color="text.primary">
            <CardContent>Testing</CardContent>
        </Box>
      </Grid>

      <Grid className={classes.root} >
        <ListSubheader>Experience</ListSubheader>  
        <Grid item xs={12} sm={6}>
          <Paper>
            Testing
          </Paper>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
        {/* <Grid>
          <Grid item xs={3}>
          <Avatar alt="HTML5" src={HtmlImage} className={classes.bigAvatar} />
          </Grid>
          <Grid item xs={3}>
          <Avatar alt="HTML5" src={CSSImage} className={classes.bigAvatar} />
          </Grid>
          <Avatar alt="HTML5" src={JSImage} className={classes.bigAvatar} />
          <Avatar alt="HTML5" src={PythonImage} className={classes.bigAvatar} />
          <Avatar alt="HTML5" src={MongoDBImage} className={classes.bigAvatar} />
          <Avatar alt="HTML5" src={ExpressImage} className={classes.bigAvatar} />
          <Avatar alt="HTML5" src={AngularImage} className={classes.bigAvatar} />
          <Avatar alt="HTML5" src={NodeImage} className={classes.bigAvatar} />
          <Avatar alt="HTML5" src={ReactImage} className={classes.bigAvatar} />
          <Avatar alt="HTML5" src={SassImage} className={classes.bigAvatar} />
          <Avatar alt="HTML5" src={MySqlImage} className={classes.bigAvatar} />
          <Avatar alt="HTML5" src={AWSImage} className={classes.bigAvatar} />
        </Grid> */}
      </Grid>

	    <Grid>
        <GridList cellHeight={180} >
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">Personal Projects</ListSubheader>
          </GridListTile>  
        </GridList>
      </Grid>

      <Grid>
        <Typography>
          <Button target="_blank" href="https://www.linkedin.com/in/chris-conner-86306b16a" >
            <LinkedInIcon fontSize="large" />
          </Button>
          <Button target="_blank" href="https://github.com/cconner57" >
            <GitHubIcon fontSize="large" />
          </Button>
        </Typography>
      </Grid>
    </div>
  );
}

export default App;
