import React from 'react';
import _ from '../../Language/Language';
import MoveDocument from '../../assets/Documents/MoveDocument.mp4';

class Move_Document extends React.Component {
	state = {
		loadVideo: true
	};

	componentDidMount() {
		// If Document is on a dodgy connection, don't load the video at all
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
					<h3>{_('To Move Document, please follow below mention steps:')}</h3>
					<ul>
						<h6>{_('Step # 1: Right Click on the Document ,to whom you want to Move')}</h6>
						<h6>{_('Step # 2: Click on Move icon')}</h6>
						<h6>{_('Step # 3: Proceed to the Directory, where you want to Move your Document')}</h6>
						<h6>{_('Step # 4: Right Click and click on paste to complete operation')}</h6>
					</ul>

					<video controls>
						<source src={MoveDocument} type="video/mp4" />
					</video>
				</div>
			</div>
		);
	}
}
export default Move_Document;
