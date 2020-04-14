import React from 'react';
import styled from 'styled-components';
import _ from '../Language/Language';
const StyledSidebar = styled.aside`
	a {
		color: #0175d8;
		text-decoration: none;
		box-shadow: none;
	}

	a:hover {
		color: #0175d8;
		box-shadow: none;
	}
`;

class SearchMenu extends React.Component {
	render() {
		return (
			<StyledSidebar>
				<input
					className="inputMenuSearch"
					type="text"
					aria-label="Search"
					placeholder={_('Search Menu...')}
					value={this.props.search_string}
					onChange={this.props.StoreValue}
				/>
				{/* <div className="bp3-input-group .modifier">
					<span className="bp3-icon bp3-icon-search" />
					<input className="bp3-input" type="search" placeholder="Search input" dir="auto" />
				</div> */}
			</StyledSidebar>
		);
	}
}

export default SearchMenu;
