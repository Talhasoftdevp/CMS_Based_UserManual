import React from 'react';

import DeleteRepository from '../../assets/Repositories/DeleteRepository.mp4';

class Delete_Repository extends React.Component {
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
					<h3>To Delete Repository, please follow below mention steps:</h3>
					<ul>
						<h6>Step # 1: Right Click on the Repository ,to whom you want to Delete</h6>
						<h6>Step # 2: Click on Delete, to proceed</h6>
					</ul>

					<video controls>
						<source src={DeleteRepository} type="video/mp4" />
					</video>
				</div>
			</div>
		);
	}
}
export default Delete_Repository;
