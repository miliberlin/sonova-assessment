import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <section id="hero" className="side-padding">
      <div id="hero__info-box">
        <h2>quis commodo odio aenean sed adipiscing diam donec adipiscing</h2>
        <Button btnTxt="montes" />
        <div id="awards">
          <img src="/images/DKA.png" alt="" />
          <img src="/images/trusted-shops-logo.png" alt="" />
          <img src="/images/trust-logo.png" alt="" />
          <div id="stars">
            <img src="/images/stars.png" alt="" />
            <p>4.1/5</p>
          </div>
        </div>
      </div>
    </section>
  );
}
