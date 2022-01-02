import React from "react";
// import { gsap } from "gsap";
// import { useRef, useEffect } from "react";
import "./nacbar.css";
import Logo from "./logo.png";
import Bmenu from "./list.png";

export default function Navbar() {
  // const nav = useRef();
  // useEffect(() => {
  //   gsap.fromTo(nav.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
  // });
  return (
    <nav>
      <a href="">
        <img src={Logo} alt="" />
      </a>
      <ul>
        <li>{/* <a href="">Menu</a> */}</li>
        <li className="tohide">
          <a href="#about">About us</a>
        </li>

        <li>
          <a href="#donation" className="donation">
            Donation
          </a>
        </li>
      </ul>
      {/* <div className="mqImg">
        <img src={Bmenu} alt="" />
      </div> */}
    </nav>
  );
}
