import React from 'react';
import _ from '../../Language/Language';
// import DownloadDocument from '../../assets/DownloadDocument.mp4'

class Download_Document extends React.Component {
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
					<h3>{_('To Download Document, please follow below mention steps:')}</h3>
					<ul>
						<h6>{_('Step # 1: Right Click on the Document ,to whom you want to Download')}</h6>
						<h6>{_('Step # 2: Click on Download icon, to proceed')}</h6>
					</ul>

					{/* <video controls>
            <source src={DownloadDocument} type="video/mp4" />
          </video> */}
				</div>
			</div>
		);
	}
}
export default Download_Document;
