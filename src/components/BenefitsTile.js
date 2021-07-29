import React from "react";

export default function BenefitsTile(props) {
  return (
    <div className="benefits__item">
      {props.number && props.text && (
        <>
          <p className="percentage">{props.number}%</p>
          <p>{props.text}</p>
        </>
      )}
      {!props.number && !props.text && <p>*Eurotrak 2018</p>}
    </div>
  );
}
