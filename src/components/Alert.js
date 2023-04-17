import React from "react";
import { getTitleCase } from "../utils";

export default function Alert(props) {
  return (
    <div style={{height: '50px'}}>
    {props.alert && <div>
      <div className={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show`} role="alert">
        <strong>{getTitleCase(props.alert.type)}</strong>: {props.alert.message}
      </div>
    </div>}
    </div>
  );
}
