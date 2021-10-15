import React from "react";

export default function Title(props) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="wpo-section-title">
          <span></span>
          <h2>{props.title}</h2>
        </div>
      </div>
    </div>
  );
}
