import React from 'react';
import { navigate } from 'gatsby';
import _ from '../Language/Language';

class SearchBar extends React.Component {
	state = {
		search_string: ''
	};
	handleChange = (e) => {
		this.setState({
			search_string: e.target.value
		});
		navigate('/UserSearchResults', {
			state: { value: this.state.search_string }
		});
	};

	render() {
		return (
			<input
				className="inputSiteSearch"
				type="text"
				aria-label="Search"
				placeholder={_('Search Site...')}
				value={this.state.search_string}
				onChange={this.handleChange}
			/>
		);
	}
}
export default SearchBar;
