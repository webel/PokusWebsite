import React from "react";
import { Link } from "react-router-dom";
import Radium from "radium";
import Variables from "./Variables";

let pulse = Radium.keyframes({
  "0%": {
    boxShadow: "0 0 50px rgba(233, 196, 106, 0.5) inset 0 0 5px #E9C46A",
    background: "rgba(233, 196, 106, 0.5)",
  },
  "10%": { opacity: 0 },
  "22%": { boxShadow: "0 0 46px #E9C46A, inset 0 0 14px #E9C46A" },
  "40%": { opacity: 0 },
  "73%": { opacity: 1 },
  "84%": { opacity: 0 },
  "100%": { boxShadow: "0 0 8px #E9C46A, inset 0 0 8px #E9C46A" },
});

let styles = {
  encapsulator: {
    overflowY: "scroll",
    scrollbar: {
      display: "none",
    },
    width: "100%",
    margin: 0,
  },

  layout: {
    alignItems: "center",
    display: "flex",
    flexBasis: "max-content",
    flexDirection: "column",

    "@media (max-width: 800px)": {
      marginLeft: "2%",
      marginRight: "2%",
    },
    marginLeft: "10%",
    marginRight: "10%",
  },

  img: {
    width: "100%",
    height: "100%",
    marginBottom: "auto",
  },

  right: {
    marginLeft: "auto",
  },

  nugget: {
    alignSelf: "baseline",
  },

  narrow: {
    width: "3em",
    alignSelf: "flexStart",
  },

  quirky: {
    fontFamily: "Abril Fatface",
    fontSize: "3rem",
    alignSelf: "baseline",
  },

  sporadicLight: {
    height: "100px",
    width: "100px",
    marginLeft: "auto",
    marginTop: "-35%",
    marginBottom: "40px",

    backgroundColor: "#E9C46A",
    borderRadius: "50px",
    animation: "x 10s linear 5s infinite both",
    animationName: pulse,
  },

  content: {
    maxWidth: Variables.minPanelWidth,
    minWidth: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  distractedUser: {
    fontFamily: "Shadows Into Light",
    fontSize: "1.2rem",
  },
};

const Features = (props) => {
  return (
    <div style={styles.encapsulator}>
      <div style={styles.layout}>
        <h1 style={[styles.narrow, styles.quirky]}>
          Your focus suffers
          <i style={props.accent}> everyday </i>
        </h1>

        <h3 style={styles.right}>At the mercy of social media</h3>

        <div style={styles.content}>
          <h4 style={styles.nugget}>
            {" "}
            23 minutes &#8212; the time it takes you to regain your focus...{" "}
          </h4>
          <h4 style={styles.nugget}>
            ...every 3 minutes, the average time a person gets distracted by a
            personal device{" "}
          </h4>
        </div>

        <h3 style={styles.right}>
          Friendly, yet extremely distracting coworkers
        </h3>

        <div style={styles.content}>
          <h4 style={styles.nugget}>
            {" "}
            9/10 &#8212; the number of people that, according to our research,
            feel they can't ask a colleague to go away, even thought they want
            to.{" "}
          </h4>
          <h5>
            Wouldn't it be really nice if you could let your colleagues,
            friends, strangers and your dog know that <i> I'm focusing </i>.
            Your in a state of mind, you don't want to throw that out to gossip
            or to look at a cat gif!{" "}
          </h5>
        </div>

        <h3 style={styles.right}>Your monkey mind</h3>

        <div style={styles.content}>
          <h4 style={styles.nugget}>
            Chances are that not only notifications tug at your attention, but
            your {"{reddit, Facebook, instagram, product hunt...}"} addiction
            too.
          </h4>
          <h5>
            In this day and age, "defaulting" to browsing when we get stuck is
            beyond common. We <i> need </i> to rewire that habit, it is a habit
            after all.
          </h5>
        </div>

        <h1 style={[styles.narrow, styles.quirky]}>
          Pokus
          <i style={props.accent}> solution? </i>
        </h1>

        <h3 style={styles.right}>Focus in the front</h3>

        <img
          style={styles.img}
          src="../assets/test.png"
          alt="Pokus device on computer"
        />

        <div style={styles.content}>
          <h4 style={styles.nugget}>Press the button and your away</h4>
          <h5>
            {" "}
            Pokus keeps it simple, all you need to do is press the button. Give
            it a go on our virtual Pokus to the right! It's nice, right?{" "}
          </h5>
          <h5>
            {" "}
            The more you press that button, and <i>actually</i> focus for the
            full round, the liklier you are to be focused. We're mapping a habit
            to an action, *click*... focus... Click.. Focus.. Click. Focus.{" "}
          </h5>
          <h5>
            {" "}
            <b>Synapses that fire together, wire together.</b>{" "}
          </h5>
          <h5>
            {" "}
            Pokus takes inspiration from one of the best methodologies for
            focusing to date &#8212; The Pomodoro Timer. Sure, you could get it
            as an app on your phone, but we are certain that there are others
            out there like us...{" "}
            <i>
              {" "}
              I'll just check how long till the end of the pomodoro... oh look,
              a message!{" "}
            </i>{" "}
          </h5>
          <h5>
            {" "}
            Instead of hiding the time, it's just <i> there </i>, so you have a
            clear indication of how long you've been focusing at all time!{" "}
          </h5>

          <h5>
            {" "}
            <i style={styles.distractedUser}>
              {" "}
              So, it's basicallt a fancy timer with a clip?{" "}
            </i>{" "}
          </h5>
          <h5>
            {" "}
            Hold your horses...! We've only started! Not only does the button
            trigger the light sequence, but the device can connect to your
            computer with bluetooth and solve one more problem for you &#8212;
            your online addictions. Full withdrawl. Cold turkey. Well, just for
            25 minutes (or number of minutes of your choosing). Upon button
            press, a blacklist of your choice is blocked. You simply will have
            nothing better to do than to <i> focus </i>{" "}
          </h5>
        </div>

        <h3 style={styles.right}>Focus in the back</h3>

        <div style={styles.content}>
          <h4 style={styles.nugget}>
            {" "}
            Not only do you know you are focusing, but so does your surroundings{" "}
          </h4>
          <h5>
            {" "}
            No need to politely nod at a chatty coworker while you're trying to
            work, because they'll now know when it's appropiate to approach you!{" "}
          </h5>
          <h5>
            {" "}
            <i style={styles.distractedUser}>
              {" "}
              So, how is this done again...?{" "}
            </i>{" "}
          </h5>
          <h5>
            {" "}
            The back panel of the device is a led panel, it lights up at the
            same time as the push of the button!{" "}
          </h5>

          <h4 style={props.accent}>
            {" "}
            What are you waiting for?{" "}
            <Link to="/getInTouch" style={{ color: "black" }}>
              {" "}
              Get in touch!{" "}
            </Link>{" "}
          </h4>
        </div>

        <img
          style={styles.img}
          src="../assets/world_red3.png"
          alt="Pokus device from the back"
        />
      </div>
    </div>
  );
};

export default Radium(Features);
