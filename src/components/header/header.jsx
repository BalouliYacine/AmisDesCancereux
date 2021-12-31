import React from "react";
import { useRef, useEffect } from "react";
import "./header.css";
import { gsap } from "gsap";

function Header() {
  // Animation
  const h1 = useRef();
  const h2 = useRef();
  useEffect(() => {
    gsap.fromTo(
      h1.current,
      { x: 100 },
      { x: 0, color: "red", repeat: -1, yoyo: true, duration: 3 }
    );
    gsap.fromTo(h2.current, { x: 100 }, { x: 0, color: "green" });
  });

  //
  return (
    <div>
      <h1 ref={h1}>hihihi</h1>
      <h2 ref={h2}>lol</h2>
    </div>
  );
}
export default Header;
