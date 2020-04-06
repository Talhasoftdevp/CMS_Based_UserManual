import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SearchMenu from './SearchMenu';
import Menu from './Menu';

const activeStyle = {
	color: '#0057e7',
	fontWeight: 600,
	fontSize: '0.95rem'
};

class SideNavigation extends React.Component {
	state = { search_string: '' };

	handleChange = (e) => {
		this.setState({
			search_string: e.target.value
		});
	};

	render() {
		return (
			<div className="sidebar-wrapper">
				<SearchMenu StoreValue={this.handleChange} />
				<Menu UserInput={this.state.search_string} />;
			</div>
		);
	}
}
export default SideNavigation;
