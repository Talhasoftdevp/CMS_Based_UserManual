import React from 'react';
import _ from '../../Language/Language';
import RenameRepository from '../../assets/Repositories/RenameRepository.mp4';

class Rename_Repository extends React.Component {
	state = {
		loadVideo: true
	};

	componentDidMount() {
		// If Repository is on a dodgy connection, don't load the video at all
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
					<h3>{_('To Rename Repository, please follow below mention steps:')}</h3>
					<ul>
						<h6>{_('Step # 1: Right Click on the Repository ,to whom you want to rename')}</h6>
						<h6>{_('Step # 2: assign new name to your folder')}</h6>
					</ul>

					<video controls>
						<source src={RenameRepository} type="video/mp4" />
					</video>
				</div>
			</div>
		);
	}
}
export default Rename_Repository;
