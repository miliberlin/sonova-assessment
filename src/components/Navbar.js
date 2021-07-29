import React from "react";

export default function Navbar() {
  return (
    <nav className="side-padding">
      <div id="nav-logo">
        <img src="/images/geers-logo-dk.png" alt="" />
      </div>
      <div id="nav-phone-number">
        <p>030 1234 5678</p>
        <p>
          Mo - Sa<span></span>9 - 18 Uhr
        </p>
      </div>
    </nav>
  );
}
