import React from 'react';
import _ from '../../Language/Language';
import CopyDocument from '../../assets/Documents/CopyDocument.mp4';

class Copy_Document extends React.Component {
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
					<h3>{_('To Copy Document, please follow below mention steps:')}</h3>
					<ul>
						<h6>{_('Step # 1: Right Click on the Document ,to whom you want to Copy')}</h6>
						<h6>{_('Step # 2: Click on Copy icon')}</h6>
						<h6>{_('Step # 3: Proceed to the Directory, where you want to paste your copied Document')}</h6>
						<h6>{_('Step # 4: Right Click and click on paste to complete operation')}</h6>
					</ul>

					<video controls>
						<source src={CopyDocument} type="video/mp4" />
					</video>
				</div>
			</div>
		);
	}
}
export default Copy_Document;
