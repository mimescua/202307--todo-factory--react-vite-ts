import React from 'react';
import './ChangeAlert.css';
import { useStorageListener } from './useStorageListener';

interface ChangeAlertProps {
	sincronize: () => void;
}

const ChangeAlert: React.FC<ChangeAlertProps> = ({ sincronize }) => {
	const { show, toggleShow } = useStorageListener(sincronize);

	if (show) {
		return (
			<div className="alert-bg">
				<div className="alert-container">
					<p>TODOS has changed on another tab!</p>
					<p>Do you want to sincronize them now?</p>
					<button className="alet-button alert-button--add" onClick={() => toggleShow(false)}>
						Yes!
					</button>
				</div>
			</div>
		);
	} else return null;
};

export { ChangeAlert };
