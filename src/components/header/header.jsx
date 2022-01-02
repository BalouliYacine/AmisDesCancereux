import React from "react";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import "./header.css";
import CabcerLogo from "./headerImg/10.png";
import Arrow from "./headerImg/arrow.png";

function Header() {
  // Animation
  const h1 = useRef();
  const h2 = useRef();
  const h3 = useRef();
  const h4 = useRef();
  useEffect(() => {
    let tl = gsap.timeline();
    tl.fromTo(
      h1.current,
      { y: 100, opacity: 0 },
      { y: -50, duration: 0.8, opacity: 1 }
    )
      .fromTo(h2.current, { y: 100, opacity: 0 }, { y: -50, opacity: 1 })
      .fromTo(h3.current, { opacity: 0 }, { opacity: 1, duration: 0.5 })
      .fromTo(h4.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    gsap.fromTo(
      h4.current,
      { y: -40 },
      { y: 0, repeat: -1, yoyo: true, duration: 2 }
    );
  });

  //

  return (
    <header>
      <h1 ref={h1}>Amis Des Cancereux</h1>
      <h2 ref={h2}>Association à But Non Lucratif d'Annaba, Annaba.</h2>
      <div className="pinkCancerLogo">
        <img ref={h3} src={CabcerLogo} alt="" />
      </div>
      <div className="arrow" ref={h4}>
        <a href="#join">
          <img src={Arrow} alt="" />
        </a>
      </div>
    </header>
  );
}
export default Header;
