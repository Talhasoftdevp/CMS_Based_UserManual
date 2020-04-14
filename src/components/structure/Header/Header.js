import React from 'react';
import SearchSite from '../../SearchSite';
import _ from '../../../Language/Language';

class Header extends React.Component {
	componentDidMount() {
		let mVarDefaultlang = localStorage.getItem('language');
		if (mVarDefaultlang === undefined) {
			localStorage.setItem('language', 'en');
		}
	}

	handleChange = (e) => {
		let mValue = e.target.value;
		localStorage.setItem('language', mValue);
		window.location.reload();
	};

	render() {
		return (
			<header
				style={{
					position: 'fixed',
					backgroundColor: 'rgb(232,232,232)',
					boxShadow:
						'0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
					height: '3.0rem',
					zIndex: '1',
					left: '0',
					right: '0'
				}}
			>
				<div
					style={{
						paddingLeft: '1.05rem',
						paddingRight: '1.05rem',
						display: 'flex',
						alignItems: 'center',
						width: '150%',
						height: '150%'
					}}
				>
					<h4
						style={{
							display: 'flex',
							alignItems: 'center',
							width: '20%',
							fontSize: '21px',
							marginBottom: '30px'
						}}
					>
						{_('Silver Docs')}
					</h4>
					<h4
						style={{
							paddingLeft: '14.05rem',
							paddingRight: '1.05rem',
							display: 'flex',
							alignItems: 'center',
							width: '100%',
							height: '100%'
						}}
					>
						<SearchSite />
						<div />
					</h4>

					<div className="input-group mb-3 dropDown">
						<select
							value={localStorage.getItem('language')}
							className="input-group-text"
							onChange={this.handleChange.bind(this)}
						>
							<option style={{ fontSize: 15 }} value="en">
								ENGLISH
							</option>
							<option style={{ fontSize: 15 }} value="ar">
								ARABIC
							</option>
						</select>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
