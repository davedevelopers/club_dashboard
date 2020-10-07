import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";

import "./HomeContent.css";
import HomeClubList from "./HomeClubList";

function HomeContent() {
  const [clubs, setClubs] = useState([
    {
      id: 1,
      clubName: "DSC RTU",
      clubLogo:
        "https://res.cloudinary.com/devncode/image/upload/v1575267757/production_devncode/community/1575267756355.jpg",
    },
    {
      id: 2,
      clubName: "DSC RTU",
      clubLogo:
        "https://res.cloudinary.com/devncode/image/upload/v1575267757/production_devncode/community/1575267756355.jpg",
    },
    {
      id: 2,
      clubName: "DSC RTU",
      clubLogo:
        "https://res.cloudinary.com/devncode/image/upload/v1575267757/production_devncode/community/1575267756355.jpg",
    },
    {
      id: 2,
      clubName: "DSC RTU",
      clubLogo:
        "https://res.cloudinary.com/devncode/image/upload/v1575267757/production_devncode/community/1575267756355.jpg",
    },
    {
      id: 2,
      clubName: "DSC RTU",
      clubLogo:
        "https://res.cloudinary.com/devncode/image/upload/v1575267757/production_devncode/community/1575267756355.jpg",
    },
  ]);
  return (
    <React.Fragment>
      <Grid container>
        <Grid item md={8}>
          <Grid container>
            <Grid item xs={12}>
              <h1>
                About <span id="forbold">Us</span>
              </h1>
            </Grid>
            <Grid item xs={12}>
              <Paper
                elevation={0}
                variant="outlined"
                className="home__content__paper"
              >
                Nam sed congue mi. Pellentesque aliquam, purus vel euismod
                interdum, erat mi posuere orci, vel hendrerit nulla libero vel
                mauris. Curabitur vitae tellus fermentum, aliquet quam sed,
                dapibus nibh. Nunc interdum enim vel arcu feugiat, vel blandit
                velit viverra. Cras at turpis ultricies, dignissim ipsum sed,
                consectetur metus. Praesent faucibus felis turpis, sed molestie
                nunc ullamcorper sit amet. Aenean lacinia pulvinar nunc, in
                dignissim ligula euismod sit amet. Mauris ut placerat ligula,
                vitae vehicula dui. In dapibus eu nibh ultricies tincidunt.
                Suspendisse iaculis odio non ante egestas sagittis. Morbi sed
                urna dui. Nam efficitur velit odio, nec pharetra leo pulvinar
                sed. Fusce eu turpis pharetra, dignissim nulla id, feugiat nisi.
                Quisque urna arcu, mollis eu lectus eu, ultricies ornare risus.
                Sed a congue justo, ac porttitor orci. In vitae sem ultrices,
                bibendum elit nec, laoreet risus.
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} className="home__content__image">
          <img src="./images/home__image.png" alt="" />
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <HomeClubList clubs={clubs} />
      </Grid>
    </React.Fragment>
  );
}

export default HomeContent;
