import React from 'react';
import _ from '../../Language/Language';
import EditWorkFlow from '../../assets/WorkFlow/EditWorkFlow.mp4';

class Edit_WorkFlow extends React.Component {
	state = {
		loadVideo: true
	};

	componentDidMount() {
		// If user is on a dodgy connection, don't load the video at all
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
					<h3>{_('To Edit Work Flow, please follow below mention steps:')}</h3>
					<ul>
						<h6>{_('Step # 1: Click on the work flow you want to edit')}</h6>
						<h6>
							{_(
								'Step # 2: Change field values, or add new actions, remove actions, add routing desicions as per your needs'
							)}
						</h6>
						<h6>{_('Step # 3: Click on save button, to save changes')}</h6>
					</ul>

					<video controls>
						<source src={EditWorkFlow} type="video/mp4" />
					</video>
				</div>
			</div>
		);
	}
}
export default Edit_WorkFlow;
