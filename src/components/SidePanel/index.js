import React from "react";
import ReactDOM from "react-dom";
import "./SidePanel.css";

function SidePanel({ children }) {
  return ReactDOM.createPortal(
    <div className="side-panel">
      <h3 className="side-pannel-title">CREATE A NEW TODO</h3>
      {children}
      <div className="sidepanel-shape" />
    </div>,
    document.getElementById("side-panel-container")
  );
}
export { SidePanel };
