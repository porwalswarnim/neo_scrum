import {  Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FeedbackCard from "./FeedbackCard";

import Header from "../header/Header";

const useStyles = makeStyles({
  containerFeedback: {
    backgroundColor: "white",
    marginTop: 40,
    padding: 0,
  },
});


const FeedbackPage = (props) => {
  const classes = useStyles(props);
  
  return (
    <Container className={classes.containerFeedback}>
      <Header />
      <Grid container item xs={12}>
        {[1, 2, 3, 4, 5, 6].map((e, i) => {
          return (
            <Grid item xs={12} sm={4} key={i}>
              <FeedbackCard />{" "}
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default FeedbackPage;
