import React from 'react';
import { Link } from 'gatsby';
import svgRightArrow from '../images/right-arrow.svg';
import styled from 'styled-components';
import { side_bar } from '../ArrayOfObjects/sideBarData';
import { filter_data } from '../ArrayOfObjects/dataToFilter';

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

class Menu extends React.Component {
	state = {
		Admin_isOpen: true,
		User_isOpen: true,
		General_isOpen: true,
		Group_isOpen: true,
		Template_isOpen: true,
		Integerator_isOpen: true,
		WorkFlow_isOpen: true,
		Desktop_isOpen: true,
		repository_isOpen: true,
		Document_isOpen: true,
		Search_isOpen: true,
		RecycleBin_isOpen: true,
		SearchResults_isOpen: true,
		AdvanceSearch_isOpen: true,
		ContextualSearch_isOpen: true,
		SearchByDate_isOpen: true,
		SearchByTemplate_isOpen: true
	};

	/***************  Side Nav Toggles *************/

	/** Toggle ***/

	toggleSideNav = (e) => {
		// e.preventDefault()
		let { toggle } = e.target.closest('div').dataset;
		this.setState((prevState) => ({
			[toggle]: !prevState[toggle]
		}));
	};

	render() {
		let side_bar_filtered = '';
		if (this.props.UserInput == '') {
			return (
				(side_bar_filtered = side_bar) && (
					<StyledSidebar className="sidebar-wrapper">
						<div className="sidebar">
							{side_bar_filtered.map((value, index) => {
								return (
									<div>
										<div
											style={{
												display: 'flex',
												justifyContent: 'space-between',
												cursor: 'pointer'
											}}
											data-toggle={value.data_toggle}
											onClick={(e) => this.toggleSideNav(e)}
										>
											<h5>{value.title}</h5>
											<img
												src={svgRightArrow}
												style={{
													height: '25px',
													transition: '475ms',
													transform: `rotate(${this.state[value.data_toggle] ? 90 : 0}deg)`
												}}
												alt="right arrow"
											/>
										</div>
										{value.childs.length > 0 &&
										this.state[value.data_toggle] && (
											<ul className="sidenav">
												<li>
													{value.childs.map((value, index) => {
														return (
															<div key={index}>
																<div
																	style={{
																		display: 'flex',
																		justifyContent: 'space-between',
																		cursor: 'pointer'
																	}}
																	data-toggle={value.data_toggle}
																	onClick={(e) => this.toggleSideNav(e)}
																>
																	<h6>{value.title}</h6>
																	<img
																		src={svgRightArrow}
																		style={{
																			height: '15px',
																			transition: '475ms',
																			transform: `rotate(${this.state[
																				value.data_toggle
																			]
																				? 90
																				: 0}deg)`
																		}}
																		alt="right arrow"
																	/>
																</div>
																{value.childs.length > 0 &&
																this.state[value.data_toggle] && (
																	<ul>
																		{value.childs &&
																			value.childs.map((value, key) => {
																				return (
																					<li
																						className="list-group"
																						key={key}
																					>
																						<Link
																							to={value.route}
																							activeClassName="active"
																						>
																							<small>{value.title}</small>
																						</Link>
																					</li>
																				);
																			})}
																		<br />
																	</ul>
																)}
															</div>
														);
													})}
												</li>
												<br />
											</ul>
										)}
									</div>
								);
							})}
						</div>
					</StyledSidebar>
				)
			);
		} else this.props.UserInput !== '';
		{
			return (
				(side_bar_filtered = filter_data.filter((menu) => {
					return menu.title.toLowerCase().indexOf(this.props.UserInput.toLowerCase()) !== -1;
				})) && (
					<StyledSidebar className="sidebar-wrapper">
						<div className="sidebar">
							{side_bar_filtered.map((value, key) => {
								return (
									<ul>
										<li className="list-group" key={key}>
											<Link to={value.route} activeClassName="active">
												<small>{value.title}</small>
											</Link>
										</li>
									</ul>
								);
							})}
						</div>
					</StyledSidebar>
				)
			);
		}
	}
}

export default Menu;
