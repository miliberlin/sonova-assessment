import React from "react";

export default function ListItem(props) {
  return (
    <li>
      <img src="/images/grey-tick.png" alt="" />
      <p>{props.text}</p>
    </li>
  );
}
