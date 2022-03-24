import React, { useContext, useState } from 'react';
import { Grid, Typography, Paper, } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { SocketContext } from '../SocketContext';
import { Mic, MicOff } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();
  const [muted, setMuted] = useState(true)
  const [otherMuted, setOtherMuted] = useState(true)

  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted={muted} ref={myVideo} autoPlay className={classes.video} />
          </Grid>
          {muted ? (
            <div onClick={() => setMuted(false)}>
              <MicOff fontSize="large" />
            </div>
          ) : (
            <div onClick={() => setMuted(true)}>
              <Mic fontSize="large" />
            </div>
          )}
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
          </Grid>
          {otherMuted ? (
            <div onClick={() => setOtherMuted(false)}>
              <MicOff fontSize="large" />
            </div>
          ) : (
            <div onClick={() => setOtherMuted(true)}>
              <Mic fontSize="large" />
            </div>
          )}
        </Paper>
      )}
    </Grid>
  );
}

export default VideoPlayer