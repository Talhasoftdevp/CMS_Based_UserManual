import React from 'react';

import CreateDocumentShortcut from '../../assets/Documents/CreateDocumentShortcut.mp4';

class Create_Document_Shortcut extends React.Component {
	state = {
		loadVideo: true
	};

	handleVideoClick = (e) => {
		e.target.pause();
		e.target.currentTime = 0;
		e.target.load();
		e.target.play();
	};

	componentDidMount() {
		// If Docuemnt is on a dodgy connection, don't load the video at all
		if ('connection' in navigator) {
			if (navigator.connection.downlink < 5) {
				this.setState({ loadVideo: false });
			}
		}
	}
	render() {
		const { loadVideo } = this.state;

		return (
			<div>
				<div>
					<h3>To Create a shortcut of your Document, please follow below mention steps:</h3>
					<ul>
						<h6>Step # 1: Right Click on the Document ,to whom you want to Create a shortcut</h6>
						<h6>Step # 2: Click on Create Shortcut, to proceed</h6>
					</ul>

					<video controls>
						<source src={CreateDocumentShortcut} type="video/mp4" />
					</video>
				</div>
			</div>
		);
	}
}
export default Create_Document_Shortcut;
