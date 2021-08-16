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
    const { feedback } = props;
    const filteredRecords = feedback.filter(ele => ele.name || ele.date);
  return (
    <Container className={classes.containerFeedback}>
      <Header />
      <Grid container item xs={12}>
        {filteredRecords.map((ele, i) => {
          return (
            <Grid item xs={12} sm={4} key={i}>
              <FeedbackCard data={ele} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default FeedbackPage;
