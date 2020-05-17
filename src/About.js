import React, { PropTypes } from "react";
// import { Link } from 'react-router';

// const About = () => (
//   <div style={{ maxWidth: "400px", padding: "20px" }}>
//     <h1 style={{ fontFamily: "Dancing Script", fontSize: "100px" }}>Pokus</h1>

//     <h3>
//       A physical manifestation of your <i>focus</i>
//     </h3>
//     <p>
//       Focus enables you to tap into your focus by being the polite middle finger
//       to your surroundings and providing at a glance minutes focused.
//     </p>
//     <a
//       className="center"
//       style={{ textDecoration: "none" }}
//       href="mailto:focus@pokus.io"
//     >
//       <p style={{ paddingBottom: "40px" }} className="contact-us">
//         <b>Get in touch </b>
//       </p>
//     </a>
//   </div>
// );

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

// <text transform="matrix(1.0406 0 0 1 439.0505 404.9899)" fontFamily="'Roboto-Thin'" fontSize="61.0309px">by</text>
//        <g>
//          <text transform="matrix(1 0 0 1 139.8576 280)" fill="#B5441B" stroke="#F15A24" stroke-miterlimit="10" fontFamily="PT Mono" fontSize="240px">Focus</text>
//        </g>
