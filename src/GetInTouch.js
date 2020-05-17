import React from "react";
import FadeInOut from "./FadeInOut";

const GetInTouch = () => {
  return (
    <div style={styles}>
      <FadeInOut>
        <h3>
          Send us an email on
          <a className="contact-us" href="mailto:info@pokus.rocks">
            {" "}
            info@pokus.rocks
          </a>
        </h3>
        <h5> We'll get back to you shortly! </h5>

        <p>
          <i>
            {" "}
            This website is a showcase of a product designed back in 2016, the
            email is no longer valid. If you are interested, please get in touch
            with me on{" "}
            <a className="contact-us" href="mailto:info@pokus.rocks">
              {" "}
              evitastenqvist@gmail.com
            </a>
          </i>
        </p>
      </FadeInOut>
    </div>
  );
};

let styles = {
  "@media (maxWidth: 800px)": {
    marginLeft: "2%",
    marginRight: "2%",
  },
  marginLeft: "10%",
  marginRight: "10%",
};

export default GetInTouch;
