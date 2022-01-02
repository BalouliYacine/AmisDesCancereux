import React from "react";
import "./activities.css";
import Ac1 from "./actvitiesImg/act1.jpg";

function Activities() {
  return (
    <div className="act">
      <section className="activities">
        <h3>Activities</h3>
      </section>
      <div className="activitieItems">
        <div className="aItem">
          <h4>Activi 1</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto minus
            hic ipsa, tempora nihil aliquam officiis id aspernatur accusantium
            sint, modi corrupti et. Minima soluta accusantium id perferendis
            rerum! Recusandae.
          </p>
          <img src={Ac1} alt="" />
        </div>

        <div className="aItem">
          <h4>Activi 2</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto minus
            hic ipsa, tempora nihil aliquam officiis id aspernatur accusantium
            sint, modi corrupti et. Minima soluta accusantium id perferendis
            rerum! Recusandae.
          </p>
          <img src={Ac1} alt="" />
        </div>

        <div className="aItem">
          <h4>Activi 3</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto minus
            hic ipsa, tempora nihil aliquam officiis id aspernatur accusantium
            sint, modi corrupti et. Minima soluta accusantium id perferendis
            rerum! Recusandae.
          </p>
          <img src={Ac1} alt="" />
        </div>
        <div className="aItem">
          <h4>Activi 4</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto minus
            hic ipsa, tempora nihil aliquam officiis id aspernatur accusantium
            sint, modi corrupti et. Minima soluta accusantium id perferendis
            rerum! Recusandae.
          </p>
          <img src={Ac1} alt="" />
        </div>
      </div>
      <div className="actBtn">
        <h5>More</h5>
      </div>
    </div>
  );
}

export default Activities;
