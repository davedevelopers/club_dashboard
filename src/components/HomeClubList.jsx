import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "./HomeClubList.css";

const useStyles = makeStyles({
  root: {
    width: 275,
    background: "#F2F5FA",
    margin: "2rem 0 1rem 6px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  divlogo: {
    textAlign: "center",
    margin: "1rem 0",
  },
  logo: {
    width: "59px",
    border: "100px",
  },
  button: {
    background: "#6A5FDE",
    color: "white",
  },
  actionbutton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0rem 0 1rem",
  },
});

function HomeClubList(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      {props.clubs.map((club) => {
        return (
          <Grid item md={3}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography className={classes.title} gutterBottom>
                  {club.clubName}
                </Typography>
                <div className={classes.divlogo}>
                  <img src={club.clubLogo} alt="" className={classes.logo} />
                  <Typography variant="body2" component="p">
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </div>
              </CardContent>
              <CardActions className={classes.actionbutton}>
                <Button
                  variant="outlined"
                  className={classes.button}
                  size="small"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </React.Fragment>
  );
}

export default HomeClubList;
