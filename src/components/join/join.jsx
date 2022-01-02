import React from "react";
import "./join.css";
import Img1 from "./joinImages/img1.jpg";
import Img2 from "./joinImages/img2.jpg";
import Img3 from "./joinImages/img3.jpg";
import Img4 from "./joinImages/img4.jpg";
import Img5 from "./joinImages/img5.jpg";

function Join() {
  return (
    <section className="join" id="join">
      <div className="jointxt">
        <h3>The community</h3>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste
          quos maiores perspiciatis, temporibus obcaecati.
        </p> */}
      </div>
      <div className="AlljoinIMG">
        <img src={Img1} alt="" className="joinImg img1" />
        <img src={Img2} alt="" className="joinImg img2" />
        <img src={Img3} alt="" className="joinImg img2" />
        <img src={Img4} alt="" className="joinImg img2 img3" />
        <img src={Img5} alt="" className="joinImg img2 img3" />
      </div>
    </section>
  );
}

export default Join;
