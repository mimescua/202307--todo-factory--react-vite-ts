import React from "react";
import ReactDOM from 'react-dom'
import "./SidePanel.css";

function SidePanel({ children }) {
  return ReactDOM.createPortal(
    <div className="side-panel">
        { children }
    </div>,
    document.getElementById('side-panel-container')
  );
}
export { SidePanel };
