import React from 'react';
import './Sidebar.css';

function Sidebar({ loading, children }) {
	return (
		<section className="sidebar">
			<div className="profile">
				<h3 className="sidebar-name">WILL STARS</h3>
				<img
					className="user-hero"
					src="man-face-with-vintage-hairstyles-bun-undercut-line-art-illustration-white-alpha.png"
					alt="Girl in a jacket"
					width="300"
				/>
				<p>willstars@mail.com</p>
			</div>
			<div className="sidebar-shape" />
			{React.Children.toArray(children).map((child) =>
				React.cloneElement(child, { loading })
			)}
		</section>
	);
}
export { Sidebar };
