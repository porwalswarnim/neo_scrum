import { useHistory } from "react-router-dom";
import { Button, Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import FeedbackAddCard from "./FeedbackAddCard";

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
})

const FeedbackAdd = (props) =>{
    const classes = useStyles(props);
    const history = useHistory();
    return(
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
                  onClick={() => history.push("/login")}
                  type="submit"
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
        {[1, 2, 3].map((e, i) => {
          return (
            <Grid item xs={12} key={i} sm={4}>
              <FeedbackAddCard />{" "}
            </Grid>
          );
        })}
      </Grid>
        </Container>
    )
}

export default FeedbackAdd