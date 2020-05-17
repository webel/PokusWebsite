import React from "react";

const About = () => (
  <div style={styles}>
    <h3>
      A physical manifestation of your <i style={{ color: "#E9C46A" }}>focus</i>
    </h3>
    <h5>
      Pokus is a smart device that enables you to tap into your focus by
      politely informing your surroundings that you do not wish to be disturbed,
      while providing you with at a glance minutes focused.
    </h5>
  </div>
);

let styles = {
  "@media (maxWidth: 800px)": {
    marginLeft: "2%",
    marginRight: "2%",
  },
  marginLeft: "10%",
  marginRight: "10%",
};

export default About;
