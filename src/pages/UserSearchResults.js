import React from 'react';
import { filter_data } from '../ArrayOfObjects/dataToFilter';
import { Link } from 'gatsby';
import _ from '../Language/Language';

class UserSearchResults extends React.Component {
	render() {
		let filtered_site = filter_data.filter((menu) => {
			return menu.title.toLowerCase().indexOf(this.props.location.state.value.toLowerCase()) !== -1;
		});
		console.log('VALUE', filtered_site);
		return (
			<div className="">
				{filtered_site.map((value, key) => {
					return (
						<ul className="CustomList">
							<li className="Customli" key={key}>
								<Link to={value.route}>
									<h4>{value.title}</h4>
									<h6>{value.content}</h6>
								</Link>
							</li>
						</ul>
					);
				})}
			</div>
		);
	}
}

export default UserSearchResults;
