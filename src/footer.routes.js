// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/favicon.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "tiso",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/",
    },
  ],
  menus: [
    // {
    //   name: "company",
    //   items: [{ name: "about us", href: "https://www.creative-tim.com/presentation" }],
    // },
    {
      name: "help & support",
      items: [{ name: "contact us", href: "https://localhost:3000/contact-us" }],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://www.tiso.app" },
        { name: "privacy policy", href: "https://www.tiso.app" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date}{" "}
      <MKTypography
        component="a"
        href="https://www.tiso.app"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Tiso App
      </MKTypography>
      .
    </MKTypography>
  ),
};
