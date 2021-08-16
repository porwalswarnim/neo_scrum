import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FeedbackAddCard from "./FeedbackAddCard";
import { GET_ALL_RECEIVERS } from "../utils";
import { ADD_FEADBACK } from "../utils";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../header/Header";

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
});

const FeedbackAdd = (props) => {
  const classes = useStyles(props);
  const [allReceivers, setAllReceivers] = useState([]);
  const [allFeedback, setAllFeedback] = useState([]);
  useEffect(() => {
    const data = {
      token: localStorage.getItem("token"),
    };
    var config = {
      method: "post",
      url: GET_ALL_RECEIVERS,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    };
    try {
      (async () => {
        const res = await axios(config);
        setAllReceivers(res?.data || []);
      })();
    } catch (err) {
      setAllReceivers([]);
      alert("Failed to login");
    }
  }, []);

  const handleSubmitFeedback = (data) => {
    var config = {
      method: "post",
      url: ADD_FEADBACK,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    };
    try {
      (async () => {
        const res = await axios(config);
        setAllFeedback(res?.data?.Feadbacks || []);
      })();
    } catch (err) {
      setAllFeedback([]);
      alert("Failed to login");
    }
  };

  return (
    <Container className={classes.containerFeedback}>
      <Header />
      <Grid container item xs={12}>
        {allReceivers.map((ele, i) => {
          return (
            <Grid item xs={12} key={i} sm={4}>
              <FeedbackAddCard
                data={ele}
                handleSubmitFeedback={handleSubmitFeedback}
              />
            </Grid>
          );
        })}
      </Grid>
      
    </Container>
  );
};

export default FeedbackAdd;
