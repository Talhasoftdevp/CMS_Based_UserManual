import React from 'react';
import _ from '../../Language/Language';
import EditTemplate from '../../assets/Templates/EditTemplate.mp4';

class Edit_Template extends React.Component {
	state = {
		loadVideo: true
	};

	componentDidMount() {
		// If Template is on a dodgy connection, don't load the video at all
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
					<h3>{_('To Edit Template, please follow below mention steps:')}</h3>
					<ul>
						<h6>{_('Step # 1: Double Click on the Template ,to whom you want to edit')}</h6>
						<h6>
							{_(
								'Step # 2: Change Field Values , add new fields, reassign rights of template fields to groups or add more groups as per your needs'
							)}
						</h6>
					</ul>

					<video controls>
						<source src={EditTemplate} type="video/mp4" />
					</video>
				</div>
			</div>
		);
	}
}
export default Edit_Template;
