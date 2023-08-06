import './ChangeAlert.css';
import { withStorageListener } from './withStorageListener';

function ChangeAlert({ show, toggleShow }) {
	if (show) {
		return (
			<div className="alert-bg">
				<div className="alert-container">
					<p>TODOS has changed on another tab!</p>
					<p>Do you want to sincronize them now?</p>
					<button
						className="alet-button alert-button--add"
						onClick={() => toggleShow(false)}
					>
						Yes!
					</button>
				</div>
			</div>
		);
	} else return null;
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
