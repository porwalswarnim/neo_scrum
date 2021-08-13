import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Avatar from '@material-ui/core/Avatar';
import Toolbar from "@material-ui/core/Toolbar";
import {
  useLocation
} from "react-router-dom";

const useStyles = makeStyles({
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
const Header = (props) => {
  let location = useLocation();
  const classes = useStyles(props);
  const history = useHistory();
  const logoutHandler = () =>{
    localStorage.clear();
    history.push("/login")
  }
  return (
    <AppBar position="static" className={classes.headerFeedback}>
      <Toolbar>
        <Grid container>
          <Grid item container row xs>
            <Avatar alt="Remy Sharp" src={localStorage.getItem('profile')} />
            <Typography variant="h6" className={classes.title}>
              {localStorage.getItem("name")}
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
              onClick={logoutHandler}
              type="button"
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
  );
};

export default Header;
