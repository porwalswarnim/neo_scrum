import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import axios from "axios";

// qsacvlkGl6

const useStyles = makeStyles((theme) => ({
  containerLogin: {
    height: "80vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  loginGrid: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const history = useHistory();

  const submitFormHandler = async (e) => {
    e.preventDefault();
    // history.push("/feedback");
    const data = {
      email: loginEmail,
      password: loginPassword,
    };
    var config = {
      method: "post",
      url: "https://b7a148da068a.ngrok.io/DeveloperSignin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // ...data.getHeaders()
      },
      data: data,
    };
    console.log("data", data);
    var a = await axios(config);
    if (a) {
      history.push("/feedback");
    }
    console.log(a);
  };

  return (
    <Grid container component="main" className={classes.containerLogin}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.loginGrid}>
          <Typography component="h1" variant="h5">
            LOGIN
          </Typography>
          <form className={classes.form} onSubmit={submitFormHandler}>
            <TextField
              variant="outlined"
              margin="normal"
              onInput={(e) => setLoginEmail(e.target.value)}
              required
              fullWidth
              id="email"
              type="email"
              label="Email "
            />
            <TextField
              variant="outlined"
              margin="normal"
              onInput={(e) => setLoginPassword(e.target.value)}
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
            />

            <Button
              type="submit"
              fullWidth
              className={`${
                loginEmail && loginPassword ? "btn-primary" : "btn-disable"
              } ${classes.submit}`}
              disabled={!(loginEmail && loginPassword)}
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>

            <Grid item container justifyContent="flex-end">
              <Link href="/registration" variant="body2">
                {"Don't have an account? Register Here"}
              </Link>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginPage;