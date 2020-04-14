import React from 'react';
import _ from '../../Language/Language';
import EditUser from '../../assets/Users/EditUser.mp4';

class Edit_User extends React.Component {
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
					<h3>{_('To Edit User, please follow below mention steps:')}</h3>
					<ul>
						<h6>{_('Step # 1: Click on the User ,to whom you want to edit')}</h6>
						<h6>
							{_('Step # 2: Change Field Values , reassign or add multiple Groups as per your needs')}
						</h6>
					</ul>

					<video controls>
						<source src={EditUser} type="video/mp4" />
					</video>
				</div>
			</div>
		);
	}
}
export default Edit_User;
