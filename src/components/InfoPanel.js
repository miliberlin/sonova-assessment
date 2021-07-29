import React from "react";

export default function InfoPanel(props) {
  return (
    <section
      id={`info-panel-${props.topic}`}
      className="info-panel side-padding"
    >
      <div className="info-panel__wrapper">
        <div className="info-panel__image"></div>
        <div className="info-panel__txt">
          <p>{props.text}</p>
        </div>
      </div>
    </section>
  );
}
