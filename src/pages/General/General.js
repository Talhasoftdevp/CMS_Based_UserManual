import React from 'react';
import _ from '../../Language/Language';
import General_Video from '../../assets/General/General.mp4';

class General extends React.Component {
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
					<h3>{_('Enter Your Company Details:')}</h3>
					<ul>
						<h6>{_('Step # 1: Input Field Values, with respective to your Company')}</h6>
						<h6>
							"{_(
								'Step # 2: Proceed to SMTP Configuration tab for Email sending/recieving configurations'
							)}"
						</h6>
					</ul>
					<video controls>
						<source src={General_Video} type="video/mp4" />
					</video>
				</div>
			</div>
		);
	}
}
export default General;
