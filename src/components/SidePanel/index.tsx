import React from 'react';
import ReactDOM from 'react-dom';
import './SidePanel.css';

interface SidePanelProps {
	children: React.ReactNode;
}

const SidePanel: React.FC<SidePanelProps> = ({ children }) => {
	return ReactDOM.createPortal(
		<div className="side-panel">
			<h3 className="side-pannel-title">CREATE A NEW TODO</h3>
			{children}
			<div className="sidepanel-shape" />
		</div>,
		document.getElementById('side-panel-container') || document.body
	);
};

export { SidePanel };
