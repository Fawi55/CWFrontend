import React from "react";
import { Typography, Container, Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MetaData from "../component/layouts/MataData/MataData";
import TermsImage from "../Image/about/tc.jpg";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  about_us: {
    paddingTop: "8rem",
    paddingBottom: "4rem",
    backgroundColor: "white !important",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  container_12: {
    padding: "2rem",
    textAlign: "center",

    backgroundColor: "white !important",
    maxWidth: "100%",
  },
  image_about: {
    width: "100%",
    height: "auto",
    marginTop: "3rem",
    marginBottom: "2rem",
  },
  title_about: {
    color: "#414141",
    fontSize: "14px",
    padding: "2rem 1rem 2rem",
    fontFamily: "Roboto",
    fontWeight: "500 !important",
  },
  heading12_about: {
    fontSize: "1rem",
    padding: "2rem 1rem 2rem",
    fontWeight: "400 !important",
    color: "#414141",
    textAlign: "center",
  },
  introText_about: {
    maxWidth: "800px",

    lineHeight: "1.5",
    margin: "1.5rem 0",
    color: "#292929",
    fontSize: "1.2rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 1rem",
  },
  infoText_about: {
    lineHeight: "1.5",
    margin: "2rem 0",
    color: "#292929",
    fontSize: "1rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 1rem",
  },
  buttonContainer_about: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem 0",
    width: "100%",
    marginTop: "1rem",
  },
  button1_about: {
    backgroundColor: "#000000 !important",
    color: "white !important",
    width: "fit-content !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "3.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
  button2_about: {
    backgroundColor: "#292929 !important",
    color: "white   !important",
    width: "fit-content     !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "1.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
}));

const About_UsPage = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.about_us}>
        <MetaData title={"About Us"} />
        <Container className={classes.container_12}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <img
                src={TermsImage}
                alt="Elbaz"
                className={classes.image_about}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h2"
                component="h1"
                className={classes.title_about}
              >
                About Us
              </Typography>
              <Typography variant="body1" className={classes.introText_about}>
                Elbaz Company for Import and Export has since 2001 to be one of the leading companies in the field of import and export since 2001 and contributes effectively to providing all the necessary technology from major manufacturers and the wholesale market in Egypt. The belief of the company's need to provide appropriate solutions with competitive prices directly to the consumer, in the belief that the company sought to establish a company composed of a group of showrooms to provide all consumers with services at the highest level of sponsorship and product quality and availability, It was also sought to end this by harnessing the potential of all required technical, material, and interface resources with the major global producers of these technologies and securing access to the lounges and follow-up mechanisms of action and the level of performance to reach the desired results.
              </Typography>
              <Typography variant="body1" className={classes.introText_about}>
                
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.container_12}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.heading12_about}
          >
            Who We Are
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            We decided to work in the industrial sector and provide metal-forming equipment for factories and workshops. We provide our services honestly and reliably, and we specialize in importing the best international brands that are fully reliable and long-lasting.
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            Realizing the importance of this equipment in the industrial field and the progress of development, since 1995 we have been providing many modern systems as well as repair, restoration, and refurbishment of machines, giving them a new life to contribute to our business. part, to provide end customers with precise and balanced industrial products.
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            The comprehensive solution for metalworking and metal forming equipment is, for us, a profession that has allowed us, over time, to expand our knowledge of production lines for workshops, factories, and the entire industrial sector, guaranteeing technology, reliability, and service worldwide.
          </Typography>
        </Container>
        <Container className={classes.container_12}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.heading12_about}
          >
            Our Mission
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            In the wake of industrial progress, interest in manufacturing and maintenance has become a shared value all over the world. At El-Baz, we can make our contribution, thanks to the experience we have gained over time and the advanced technology used in our machines, industrial lines for metal forming, and workshop equipment, to provide consumers around the world with reliable products. safe, made according to the latest technology.
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            This belief, which we all share, is the cornerstone of our success, especially the satisfaction and appreciation of our industrial customers, for whom we have become a reference point in the entire industrial field.

The daily commitment of our employees and collaborators in our company, working in an honest and professional manner, has developed into expertise that is recognized worldwide and leads to authentic quality: quality products, quality services. The quality of human relations.
          </Typography>

          <div className={classes.buttonContainer_about}>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" className={classes.button1_about}>
                Our Products
              </Button>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" className={classes.button2_about}>
                Contact Us
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About_UsPage;
