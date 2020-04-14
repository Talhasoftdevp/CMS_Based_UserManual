import React from 'react';
import _ from '../../Language/Language';
import EditGroup from '../../assets/Groups/EditGroup.mp4';

class Edit_Group extends React.Component {
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
					<h3>{_('To Edit Group, please follow below mention steps:')}</h3>
					<ul>
						<h6>{_('Step # 1: Double Click on the Group ,to whom you want to edit')}</h6>
						<h6>
							{_(
								'Step # 2: Change Field Values , reassign rights or add multiple Directories with rights as per your needs'
							)}
						</h6>
					</ul>

					<video controls>
						<source src={EditGroup} type="video/mp4" />
					</video>
				</div>
			</div>
		);
	}
}
export default Edit_Group;
