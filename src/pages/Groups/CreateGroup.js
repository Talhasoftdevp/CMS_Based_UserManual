import React from 'react';
import _ from '../../Language/Language';
import CreateGroup from '../../assets/Groups/CreateNewGroup.mp4';

class Create_New_Group extends React.Component {
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
					<h3>{_('To Create New Group, please follow below mention steps:')}</h3>
					<ul>
						<h6>{_('Step # 1: Proceed to Settings')}</h6>
						<h6>{_('Step # 2: Click on Groups')}</h6>
						<h6>{_('Step # 3: On Groups screen proceed to + sign')}</h6>
						<h6>
							{_(
								'Step # 4: Input in Manadatory Fields, Provide Group Details & assign the Group with desired Rights'
							)}
						</h6>
						<h6>
							{_(
								'Step # 5: Proceed to Directories Tab, select directory, to whom you want to assign rights'
							)}
						</h6>
						<h6>{_('Step # 6: In Rights, tick mark the rights you want to assign to directory')}</h6>
						<h6>{_('Step # 7: Click on + sign to Successfully add that directory with rights')}</h6>
						<h6>{_('Step # 8: Click on save to Successfully create Group')}</h6>
					</ul>

					<video controls>
						<source src={CreateGroup} type="video/mp4" />
					</video>
				</div>
			</div>
		);
	}
}
export default Create_New_Group;
