import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Hidden from '@material-ui/core/Hidden';
// import Link from '@material-ui/core/Link';
// import Button from '@material-ui/core/Button';
// import Divider from '@material-ui/core/Divider';
// import Container from '@material-ui/core/Container';

import { Link, Typography } from '@material-ui/core';

import { GitHubIcon, LinkedInIcon } from '@material-ui/icons/GitHub';

import './App.css';
import { Box, Card, CardHeader, CardContent, Avatar } from '@material-ui/core';

function App() {
  return (
    <div>
      <Card>
        <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            R
          </Avatar>
        } title="Chris Conner"
        subheader="Frontend Developer"
        />
        <Box component="span" m={1} color="text.primary">
        <CardContent>Testing</CardContent>
        </Box>
      </Card>
	    <div>
		    <h3>Experience</h3>
        <div>
          <p></p>
        </div>
	    </div>
	    <div>
		    <h3>Portfolio Projects</h3>
		  </div>
	    <Typography>
        <Link target="_blank" rel="noopener nofollow" ref="https://www.linkedin.com/in/chris-conner-86306b16a" >
          <LinkedInIcon fontSize="large" />
        </Link>
        <Link target="_blank" rel="noopener nofollow" href="https://github.com/cconner57" >
          <GitHubIcon fontSize="large" />
        </Link>
	    </Typography>
    </div>
  );
}

export default App;
