import React, { useState, useEffect } from 'react'
import { Typography, AppBar } from "@mui/material"
import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';
import { makeStyles } from '@mui/styles';
import { DialogTitle, Dialog, DialogContent, DialogContentText } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };


  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Info</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Video chat is a simple web application which enables two colleagues to meet visually.
            An ID is automatically generated in every visit to the application, copy your ID and share it to your colleague
            who will paste it into the allocated space to call you.
            You can call yourself.
          </DialogContentText>
        </DialogContent>
    </Dialog>
  );
}

function App() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setOpen(true)
  }, [])
  

  return (
      <div className={classes.wrapper} >
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography variant="h2" align="center" >
            Video Chat
          </Typography>
        </AppBar>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      <SimpleDialog
        open={open}
        onClose={() => setOpen(false)}
      />
      </div>
  );
}

export default App;
