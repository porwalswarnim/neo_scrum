import { Button, Container } from "@material-ui/core";
import FormData from "form-data";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import { REGISTER_URL } from "../utils";
const useStyles = makeStyles({
  containerregister: {
    backgroundColor: "white",
    marginTop: 40,
    height: "80vh",
  },
  headerRegister: {
    textAlign: "center",
    paddingTop: "50px",
  },
  formregistration: {
    width: "100%",
    marginTop: "20px",
  },
  employeeNameRegister: {
    width: "100%",
    marginTop: "40px",
  },
  emailRegister: {
    width: "100%",
    marginTop: "30px",
  },
  fileupload: {
    marginTop: "20px",
  },
  buttonRegister: {
    marginTop: "20px",
  },
  link: {
    marginTop: "40px",
  },
});
const RegistrationPage = (props) => {
  const classes = useStyles(props);
  const [employeeName, setEmployeeName] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const submitFormHandlerRegister = async (e) => {
    e.preventDefault();
    var data = new FormData();
    data.append("profileImage", selectedFile);
    data.append("email", emailRegister);
    data.append("name", employeeName);
    var config = {
      method: "post",
      url: REGISTER_URL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // ...data.getHeaders()
      },
      data: data,
    };
    var a = await axios(config);
  };
  return (
    <Container maxWidth="sm" className={classes.containerregister}>
      <form
        className={classes.formregistration}
        onSubmit={submitFormHandlerRegister}
      >
        <Typography variant="h5" className={classes.headerRegister}>
          ENTER NEW DEVELOPER
        </Typography>
        <TextField
          className={classes.employeeNameRegister}
          variant="outlined"
          margin="normal"
          onInput={(e) => setEmployeeName(e.target.value)}
          required
          fullWidth
          label="Employee Name"
          type="text"
        />
        <TextField
          className={classes.emailRegister}
          variant="outlined"
          margin="normal"
          onInput={(e) => setEmailRegister(e.target.value)}
          required
          fullWidth
          id="email"
          type="email"
          label="Email"
        />

        {/* <TextField type="file" className={classes.fileupload}
          onChange={(e) => setSelectedFile(e.target.value)}>
          {" "}
        </TextField> */}
        <Button
          variant="contained"
          component="label"
          className={classes.fileupload}
        >
          <input
            onChange={(e) => setSelectedFile(e.target.files[0])}
            type="file"
          />
        </Button>
        <Button
          type="submit"
          fullWidth
          className={`${
            employeeName && emailRegister ? "btn-primary" : "btn-disable"
          } ${classes.buttonRegister}`}
          disabled={!(employeeName && emailRegister)}
          variant="contained"
          color="primary"
        >
          SUBMIT
        </Button>

        <Grid item container justifyContent="flex-end">
          <Link href="/login" variant="body2" className={classes.link}>
            {"Already have an account, Login here"}
          </Link>
        </Grid>
      </form>
    </Container>
  );
};

export default RegistrationPage;
