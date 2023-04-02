import {
  createStyles,
  Image,
  Accordion,
  Grid,
  Col,
  Container,
  Title,
} from "@mantine/core";
import Navbar from "../../components/Navbar/Navbar";
import FAQImage from "../FaqPage/image.jpg";
import React, { useRef } from "react";
import "./FAQcss.css";
import LeafImage from "./Mail Green.png";
import { sendMessageToAdmin } from "../../util/utils";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
  },

  title: {
    marginBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  item: {
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
  },
}));

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.";

export default function FAQpage(props) {
  const isLoggedIn = useSelector((state) => state.userIsLoggedIn);
  const { classes } = useStyles();
  const navigate = useNavigate();
  const queryRef = useRef();
  const fullnameRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const details = {
      fullname: fullnameRef.current.value,
      type: "Contact Us / Suggestion",
      message: queryRef.current.value,
      email: props.user.email,
    };
    // Send the current details to the admin -> messages using function
    sendMessageToAdmin(details);
    alert('Message Created and Sent');
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className={classes.wrapper}>
        <Container size="lg">
          <Grid id="faq-grid" gutter={50}>
            <Col span={12} md={6}>
              <Image src={FAQImage} alt="Frequently Asked Questions" />
            </Col>
            <Col span={12} md={6}>
              <Title order={2} ta="left" className={classes.title}>
                Frequently Asked Questions
              </Title>

              <Accordion chevronPosition="right" variant="separated">
                <Accordion.Item className={classes.item} value="reset-password">
                  <Accordion.Control>
                  Why ECOHUB?
                  </Accordion.Control>
                  <Accordion.Panel>ECOHUB itself is the idea which ponders on the
								pure electric-ness of the world, which primarily
								indicates go green!</Accordion.Panel>
                </Accordion.Item>
                  
                <Accordion.Item
                  className={classes.item}
                  value="another-account"
                >
                  <Accordion.Control>
                  What is our aim?
                  </Accordion.Control>
                  <Accordion.Panel>Our aim is to enhance the usage of green
								products and to bring out much colour to our
								life.</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="newsletter">
                  <Accordion.Control>
                  How are we different from others?
                  </Accordion.Control>
                  <Accordion.Panel>We are a lot different when compared to others,
								could be idea, could be the implementation of
								the idea, we strive to be unique from the rest
								of our competitors.</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="credit-card">
                  <Accordion.Control>
                    What are the uses of electric products?
                  </Accordion.Control>
                  <Accordion.Panel>Starting from toasters to refrigerators, microwaves, washing machines, 
                    dishwashers, electrical chimneys, and many more appliances which are simple to use and made
                     for the convenience of day-to-day activities use electricity to function.
                  </Accordion.Panel>
                </Accordion.Item>

                {/*<Accordion.Item className={classes.item} value="payment">
                  <Accordion.Control>
                    What payment systems to you work with?
                  </Accordion.Control>
                  <Accordion.Panel>{placeholder}</Accordion.Panel>
                </Accordion.Item> */}
              </Accordion>
            </Col>
          </Grid>
        </Container>
      </div>
      {isLoggedIn && (
        <div className="contact1" id="FAQ_contactUs">
          <div className="container-contact1">
            <form
              className="contact1-form validate-form"
              onSubmit={submitHandler}
            >
              <span className="contact1-form-title"> Try contacting us </span>

              <div
                className="wrap-input1 validate-input"
                data-validate="Name is required"
              >
                <input
                  className="input1 input_faq"
                  type="text"
                  name="name"
                  placeholder="Name"
                  id="name"
                  defaultValue={props.user.fullname}
                  ref={fullnameRef}
                  required
                />
                <span className="shadow-input1"></span>
              </div>

              <div
                className="wrap-input1 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="input1 input_faq"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={props.user.email}
                  disabled={true}
                  readOnly={true}
                  id="email"
                  required
                />
                <span className="shadow-input1"></span>
              </div>

              <div
                className="wrap-input1 validate-input"
                data-validate="Subject is required"
              >
                <input
                  className="input1 input_faq"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  id="subject"
                  value="Contact Us / Suggestion"
                  disabled={true}
                  readOnly={true}
                  required
                />
                <span className="shadow-input1"></span>
              </div>

              <div
                className="wrap-input1 validate-input"
                data-validate="Message is required"
              >
                <textarea
                  ref={queryRef}
                  className="input1 input_textarea"
                  name="message"
                  placeholder="Message"
                  id="message"
                  required
                ></textarea>
                <span className="shadow-input1"></span>
              </div>

              <div className="container-contact1-form-btn">
                <button className="contact1-form-btn" type="submit">
                  <span>
                    Get in Touch
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </span>
                </button>
              </div>
            </form>
            <div className="contact1-pic js-tilt" data-tilt>
              <img src={LeafImage} alt="img" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
