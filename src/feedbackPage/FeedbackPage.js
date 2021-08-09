import { useHistory } from "react-router-dom";
import { Button,  Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FeedbackCard from "./FeedbackCard";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles({
  containerFeedback: {
    backgroundColor: "white",
    marginTop: 40,
    padding: 0,
  },
  headerFeedback: {
    backgroundColor: "#40d2cb6b",
  },
  title: {
    color: "black",
  },
  buttonLogoutFeedback: {
    marginRight: "10px",
  },
});
const FeedbackPage = (props) => {
  const classes = useStyles(props);
  const history = useHistory();

  return (
    <Container className={classes.containerFeedback}>
      <AppBar position="static" className={classes.headerFeedback}>
        <Toolbar>
          <Grid container>
            <Grid item xs>
              <Typography variant="h6" className={classes.title}>
                Swarnim Porwal
              </Typography>
            </Grid>
            <Grid item>
              <Button
                className={classes.buttonLogoutFeedback}
                onClick={() => history.push("/feedbackAdd")}
                type="submit"
                value="Submit"
                size="small"
                variant="contained"
                color="primary"
              >
                Add Feedback
              </Button>
              <Button
                onClick={() => history.push("/login")}
                type="submit"
                size="small"
                value="Submit"
                variant="contained"
                color="secondary"
              >
                Logout
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
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
