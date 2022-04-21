import "./modal.css";
import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const Modal = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="modal" data-aos="fade-down">
      {props.children}
    </div>
  );
};

export default Modal;
