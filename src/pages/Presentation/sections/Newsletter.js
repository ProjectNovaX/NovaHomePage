/* eslint-disable react/jsx-no-duplicate-props */
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
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Images
import iphone from "assets/images/iphone.jpg";

function Newsletter() {
  return (
    <MKBox component="section" pt={6} my={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid item sx={12} md={6}>
            <MKTypography color="text" variant="h4">
              Request accesss to the beta
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              Sign up for our beta release and information about upcoming release dates.
            </MKTypography>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <MKInput type="email" label="Email Here..." fullWidth />
              </Grid>
              <Grid item xs={4}>
                <MKButton variant="gradient" color="info" sx={{ height: "100%" }}>
                  Subscribe
                </MKButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" borderRadius="8px" src={iphone} alt="iphone" width="100%" />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Newsletter;
