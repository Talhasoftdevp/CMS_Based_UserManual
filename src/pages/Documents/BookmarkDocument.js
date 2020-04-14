import React from 'react';
import _ from '../../Language/Language';
import BookmarkDocument from '../../assets/Documents/BookmarkDocument.mp4';

class Bookmark_Document extends React.Component {
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
					<h3>{_('To Bookmark Document, please follow below mention steps:')}</h3>
					<ul>
						<h6>{_('Step # 1: Right Click on the Document ,to whom you want to Bookmark')}</h6>
						<h6>{_('Step # 2: Click on Bookmark icon, to proceed')}</h6>
					</ul>

					<video controls>
						<source src={BookmarkDocument} type="video/mp4" />
					</video>
				</div>
			</div>
		);
	}
}
export default Bookmark_Document;
