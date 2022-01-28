/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
// import bgFront from "assets/images/concert.png";
import bgBack from "assets/images/concert.jpg";

// be cool for this.
// have one side of the card the dash.
// the other side the messaging / event view

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                color="primary"
                image={bgBack}
                icon="dashboard"
                title={
                  <>
                    See upcoming
                    <br />
                    events
                  </>
                }
                description="All of those important events in your life. In one place. Never double book again."
              />
              <RotatingCardBack
                color="primary"
                image={bgBack}
                title="Discover More"
                description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "start with header",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color="primary"
                  icon="people"
                  title="Private Network"
                  description="Connect and invite only those contacts in your phone. A guest list you can get on board with."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color="primary"
                  icon="event"
                  title="Full Calendar"
                  description="Fully fledged Calendar with all the features you need."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color="primary"
                  icon="create"
                  title="Pencil In"
                  description="We know it's hard getting people together. Pencil in events to get the ball rolling earlier."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color="primary"
                  icon="notifications-active-icon"
                  title="Notification Control"
                  description="Fine tune notifications to exactly your taste. Only care if the date changes? No problem."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
