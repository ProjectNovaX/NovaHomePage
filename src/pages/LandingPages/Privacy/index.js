import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import footerRoutes from "footer.routes";
import routes from "routes";
import rgba from "assets/theme/functions/rgba";
import bgImage from "assets/images/concert.jpg";

function PrivacyPolicy() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          brand="tiso"
          action={{
            type: "external",
            route: "https://tiso.app",
            label: "free download",
            color: "primary",
          }}
        />
      </MKBox>
      <Grid
        container
        spacing={3}
        backgroundColor={({ palette: { black } }) => rgba(black.main, 0.8)}
        alignItems="center"
      >
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            // sx={{
            //   backgroundColor: ({ palette: { black } }) => rgba(black.main, 0.8),
            // }}

            sx={{ backgroundImage: `url(${bgImage})` }}
          />
        </Grid>
        <Grid
          //   sx={{
          //     backgroundColor: ({ palette: { black } }) => rgba(black.main, 0.8),
          //   }}
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            // bgColor="black"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="primary"
              coloredShadow="primary"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Privacy Policy
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                Our app collects certain information when users interact with it, such as device
                type, operating system, and other technical data. We may also request access to the
                users camera and contact information in order to provide certain features of the
                app.
              </MKTypography>
              <MKTypography variant="body2" color="text" mb={3}>
                We use the collected information to provide and improve our app, and to communicate
                with our users. We may also use the information to personalize user experience and
                to understand how users interact with our app.
              </MKTypography>
              <MKTypography variant="body2" color="text" mb={3}>
                We do not sell or share any personal information with third parties. However, we may
                share the collected information with our partners and service providers who assist
                us in delivering the apps functionality. We may also disclose the information if
                required by law, regulation, or other legal process.
              </MKTypography>
              <MKTypography variant="body2" color="text" mb={3}>
                We take appropriate measures to safeguard the collected information, including
                encryption and secure storage. However, no method of transmission or storage is
                completely secure, and we cannot guarantee absolute security of the information.
              </MKTypography>
              <MKTypography variant="body2" color="text" mb={3}>
                We may update this privacy policy from time to time, and we will notify users of any
                significant changes. Users are encouraged to review this privacy policy
                periodically.
              </MKTypography>
              <MKTypography variant="body2" color="text" mb={3}>
                By using our app, you consent to the terms of this privacy policy.
              </MKTypography>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        {/* Replace with your footer component */}
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default PrivacyPolicy;
