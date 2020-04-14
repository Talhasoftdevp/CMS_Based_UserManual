import React from 'react';
import _ from '../../Language/Language';
import CreateTemplate from '../../assets/Templates/CreateNewTemplate.mp4';

class Create_New_Template extends React.Component {
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
					<h3>{_('To Create New Template, please follow below mention steps:')}</h3>
					<ul>
						<h6>{_('Step # 1: Proceed to Settings')}</h6>
						<h6>{_('Step # 2: Click on Templates')}</h6>
						<h6>{_('Step # 3: On Templates screen proceed to  +  sign')}</h6>
						<h6>
							{_(
								'Step # 4: In General Tab, assign your template name, write discription, for fields values click on + sign and add Details for your fields'
							)}
						</h6>
						<h6>
							{_(
								'Step # 5: Proceed to Security Tab, select Privilages by clicking on +  sign and select group to assign Template Fields rights'
							)}{' '}
						</h6>
						<h6>
							{_(
								'Step # 6: Click on the newly added group in Privilages area,and proceed to Fields Access rights to assign rights of template fields to the selected group'
							)}
						</h6>
						<h6>{_('Step # 7: Click on save to Successfully create Template')}</h6>
					</ul>

					<video controls>
						<source src={CreateTemplate} type="video/mp4" />
					</video>
				</div>
			</div>
		);
	}
}
export default Create_New_Template;
