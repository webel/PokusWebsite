import React, { PropTypes } from "react";
import { Link } from "react-router";

const GetInTouch = () => {
  return (
    <div>
      <h3>
        Send us an email on
        <a className="contact-us" href="mailto:info@pokus.rocks">
          {" "}
          info@pokus.rocks
        </a>
      </h3>
      <h5> We'll get back to you shortly! </h5>
    </div>
  );
};

export default GetInTouch;
