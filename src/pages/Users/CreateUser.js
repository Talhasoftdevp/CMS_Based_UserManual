import React from 'react';
import _ from '../../Language/Language';
import CreateUser from '../../assets/Users/CreateUser.mp4';

class Create_New_User extends React.Component {
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
					<h3>{_('To Create New User, please follow below mention steps:')}</h3>
					<ul>
						<h6>{_('Step # 1: Proceed to Settings')}</h6>
						<h6>{_('Step # 2: Click on Users')}</h6>
						<h6>{_('Step # 3: On users screen proceed to + sign')}</h6>
						<h6>
							{_(
								'Step # 4: Input in Manadatory Fields, Provide User Details & assign the Group with desired Rights'
							)}
						</h6>
						<h6>{_('Step # 5: Click on save to Successfully create User')}</h6>
					</ul>

					<video controls>
						<source src={CreateUser} type="video/mp4" />
					</video>
				</div>
			</div>
		);
	}
}
export default Create_New_User;
