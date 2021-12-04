import React from "react";
import Info from "./Info";

export default function (props) {
  return (
    <div>
      <h1>The user</h1>
      <p>The user is: {props.name}</p>
      <Info logo={props.logo}/>
    </div>
  );
}
