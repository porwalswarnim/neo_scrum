import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";

const FeedbackCard = ({data}) => {
  return (
    <Grid container>
      <Card style={{ width: "100%", margin: 40, padding: 0}}>
        <CardContent>
          <Grid
            item
            container
            justifyContent="space-between"
            style={{ backgroundColor: "#e6faff", padding: "8px" }}
          >
            <Typography>Feedbacks</Typography>
            <Typography>in 6 Hours</Typography>
          </Grid>
          <Grid>
            <Box mt={5} mb={10}>
              <Typography style={{ fontWeight: "bold" }}>
                {data?.feadback}
              </Typography>
            </Box>
          </Grid>
          <Grid container direction="column">
            <Typography
              style={{
                textAlign: "right",
                fontSize: "small",
                backgroundColor: "whitesmoke",
              }}
            >
              sent by : {data?.name}
            </Typography>
            <Typography
              style={{
                textAlign: "right",
                fontSize: "small",
                backgroundColor: "whitesmoke",
              }}
            >
              posted on : {data?.date}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default FeedbackCard;
