import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Avatar from '@material-ui/core/Avatar';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import CharacterCounter from 'react-character-counter'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin : 10,
    
  },
  media: {
    height: 200,
  },
  feedbackInput :{
      marginTop: 20,
      padding: 5
  },
  large: {
    width: theme.spacing(11),
    height: theme.spacing(11),
  },
}));

const FeedbackAddCard =({ data, handleSubmitFeedback }) => {
  const classes = useStyles();
  const history = useHistory();
  const [feedback, setFeedback] = useState("");

  const submitFeedback = (e) => {
    e.preventDefault();
  };

  const handleSubmit = () => {
    
    const req = {
      token: localStorage.getItem('token'),
      email: data.email,
      name: data.name,
      feadback: feedback
    }
    handleSubmitFeedback(req)
    history.push("/feedback")
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
          <CardContent>
        <CardMedia
          className={classes.media}
          image="background.jpg"
        />
          <Avatar alt="My Image" src="loginbackground.jpg" className={classes.large} />
          </CardContent>
        <CardContent>
          <Typography  variant="h5" component="h2" style={{ marginTop:'20px' ,fontWeight: "bold", textAlign :'center' }}>
            {data.name}
          </Typography>
          <form className={classes.feedbackInput} onSubmit={submitFeedback}>
            <TextField
              variant="outlined"
              onInput={(e) => setFeedback(e.target.value)}
              required
              fullWidth
              id="text"
              inputProps={{ maxLength: 100 }}
              type="text"
              label="Write your feedback here.. "
            />
            <Grid
             item
             container
             justifyContent="space-between">
            <Typography
              style={{
                textAlign: "left",
                fontSize: "small", 
              }}
            >
             Max 100 characters
          
            </Typography>
            <Typography>   {feedback.length}/100</Typography>
            </Grid >
            <Grid container item justifyContent="flex-end">
            <Button
          style={{ marginTop:'20px' , textAlign :'center' }}
                  type="submit"
                  value="Submit"
                  variant="contained"
                  disabled={feedback.length<1}
                  color="primary"
                  onClick={() => handleSubmit()}
                >
                  Submit Feedback 
                </Button>
                </Grid>
            </form>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default FeedbackAddCard