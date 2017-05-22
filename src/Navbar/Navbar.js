import React, { Component } from 'react';

import PropTypes from 'prop-types';

import look from 'react-look';

import defaultStyles from './styles';

class Navbar extends Component {
	constructor() {
		super();
		this.setSearchbar = this.setSearchbar.bind(this);
	}

	setSearchbar() {
		const { placeholder } = this.props;
		return (
			<form className={defaultStyles.searchbar} onSubmit={(e) => {e.preventDefault; this.props.onSearch(this.searchInput.value);}}>
				<input className={defaultStyles.searchInput} type="search"  placeholder={placeholder} ref={(input) => this.seatchInput = input} />
			</form>
		);
	}
	render() {
		const { title, middle, right } = this.props;
		return (
			<nav className={defaultStyles.bar}>
				<header className={defaultStyles.title}>{title}</header>
				{middle && (<div>{middle}</div>)}
				{this.props.searchbar && this.setSearchbar()}
				{right && (<div>{right}</div>)}
			</nav>
		);
	}
}

Navbar.propTypes = {
	title: PropTypes.node,
	middle: PropTypes.node,
	right: PropTypes.node,
	searchbar: PropTypes.bool,
	onSearch: PropTypes.function,
	placeholder: PropTypes.string
}

Navbar.defaultProps = {
	onSearch: () => {},
	searchbar: false,
	placeholder: 'Search'
}

export default look(Navbar);
