import React from 'react';

import DeleteWorkFlow from '../../assets/WorkFlow/DeleteWorkFlow.mp4';
import _ from '../../Language/Language';
class Delete_WorkFlow extends React.Component {
	state = {
		loadVideo: true
	};

	componentDidMount() {
		// If WorkFlow is on a dodgy connection, don't load the video at all
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
					<h3>{_('To Delete WorkFlow, please follow below mention steps:')}</h3>
					<ul>
						<h6>{_('Step # 1: Click on the WorkFlow ,to whom you want to Delete')}</h6>
						<h6>{_('Step # 2: Click on Trash icon, to proceed')}</h6>
					</ul>

					<video controls>
						<source src={DeleteWorkFlow} type="video/mp4" />
					</video>
				</div>
			</div>
		);
	}
}
export default Delete_WorkFlow;
