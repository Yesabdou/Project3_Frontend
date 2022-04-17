import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [show, setShow] = useState(true);
  const controlSearchBAr = () => {
    if (window.scrollY > 800) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlSearchBAr);

    return () => {
      window.removeEventListener("scroll", controlSearchBAr);
    };
  }, []);

  return <div className={`SearchBar ${show || "visibility"}`}></div>;
};

export default SearchBar;

//pour l'authenfication regarder le truc de robin projet management client    Client
