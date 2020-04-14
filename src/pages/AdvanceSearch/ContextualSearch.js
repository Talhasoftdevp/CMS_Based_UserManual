import React from 'react';
import _ from '../../Language/Language';
import ContextualSearch from '../../assets/Documents/ContextualSearch.mp4';

class Contextual_Search extends React.Component {
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
					<h3>
						{_('To Perform Contextual Search (Content/Title/Keywords), please follow below mention steps:')}
					</h3>
					<ul>
						<h6>
							{_(
								'Step # 1: Click on Search Options, Located at Side Navigation Bar located in Advance Search Tab'
							)}
						</h6>
						<h6>
							{_(
								'Step # 2: Tickmark your Choice, either you want to perform Search by Content Wise/Title Wise/Keyword Wise'
							)}{' '}
						</h6>
						<h6>{_('Step # 3: Click on Advance Search Bar')}</h6>
						<h6>{_('Step # 4: Input the name of document, you want to search')}</h6>
						<h6>{_('Step # 5: Press Enter to complete Operation')}</h6>
					</ul>

					<video controls>
						<source src={ContextualSearch} type="video/mp4" />
					</video>
				</div>
			</div>
		);
	}
}
export default Contextual_Search;
