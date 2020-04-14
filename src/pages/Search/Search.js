import React from 'react';
import _ from '../../Language/Language';
import SearchDocument from '../../assets/SearchDocument/SearchDocument.mp4';

class Search_Document extends React.Component {
	state = {
		loadVideo: true
	};

	componentDidMount() {
		// If Group is on a dodgy connection, don't load the video at all
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
					<h3>{_('To Search Document, Please follow below mention steps:')}</h3>
					<ul>
						<h6>{_('Step # 1: Click on Search Bar, located at top right in Navigation Bar')}</h6>
						<h6>{_('Step # 2: Input the name of document, you want to search')}</h6>
						<h6>{_('Step # 3: Press Enter to perform operation')}</h6>
					</ul>

					<video controls>
						<source src={SearchDocument} type="video/mp4" />
					</video>
				</div>
			</div>
		);
	}
}
export default Search_Document;
