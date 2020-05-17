import React from "react";

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
    </div>
  );
};

export default GetInTouch;
