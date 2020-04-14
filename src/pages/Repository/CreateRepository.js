import React from 'react';
import _ from '../../Language/Language';
import CreateNewFolder from '../../assets/Repositories/CreateNewFolder.mp4';

class Create_New_Repository extends React.Component {
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
					<h3>{_('To Create New Repository, please follow below mention steps:')}</h3>
					<ul>
						<h6>
							{_(
								'Step # 1: Proceed to Left Side Navigation Bar, and Right Click on DMS Repositories to create Main folder'
							)}{' '}
						</h6>
						<h6>{_('Step # 2: Or Right Click on existing folder to create sub folder')}</h6>
						<h6>{_('Step # 3: Click on Create Folder')}</h6>
						<h6>{_('Step # 4: Give Name to your folder')}</h6>
					</ul>

					<video controls>
						<source src={CreateNewFolder} type="video/mp4" />
					</video>
				</div>
			</div>
		);
	}
}
export default Create_New_Repository;
