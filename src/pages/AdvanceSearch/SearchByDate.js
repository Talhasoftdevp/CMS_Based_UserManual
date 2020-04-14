import React from 'react';
import _ from '../../Language/Language';
import SearchByDate from '../../assets/Documents/SearchByDate.mp4';

class Search_By_Date extends React.Component {
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
					<h3>{_('To Perform Searching By Date Wise, please follow below mention steps:')}</h3>
					<ul>
						<h6>{_('Step # 1: Click on Date, Located at Side Navigation Bar')}</h6>
						<h6>
							{_('Step # 2: Select Field Values from their respective drop downs and click on Apply')}
						</h6>
						<h6>{_('Step # 3: Click on Advance Search Bar')}</h6>
						<h6>{_('Step # 4: Input the name of document, you want to search')}</h6>
						<h6>{_('Step # 5: Press Enter to complete Operation')}</h6>
					</ul>

					<video controls>
						<source src={SearchByDate} type="video/mp4" />
					</video>
				</div>
			</div>
		);
	}
}
export default Search_By_Date;
