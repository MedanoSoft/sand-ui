import React, { Component } from 'react';

import PropTypes from 'prop-types';

import defaultStyles from './styles';

import { css } from 'aphrodite/no-important';

class Dropdown extends Component {
	constructor() {
		super();

		this.state = {
			toggleList: false
		};

		this.setList = this.setList.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	setList() {
		const { list } = this.props;
		return list.map((node, i) => (
			<li key={i} className={css(defaultStyles.item)}>
				{(typeof node === typeof {}) ?
					(<a {...node.props} className={css(defaultStyles.text)} href={node.link || '#'}>{node.name}</a>) :
					(<span key={i} className={css(defaultStyles.text)}>{node}</span>)
				}
			</li>
			));
	}

	handleClick() {
		this.setState((state) => ({
			toggleList: !state.toggleList
		}));
	}

  render() {
  	const { label } = this.props;
  	const { toggleList } = this.state;
  	const passedProps = {
      ...this.props
    };
    delete(passedProps.label);
    delete(passedProps.list);
    return (
    	<div className={css(defaultStyles.wrapper)}>
    	<button className={css(defaultStyles.caption)} onClick={this.handleClick}>{label}</button>
      <ul {...passedProps} className={css((toggleList) ? defaultStyles.listVisible : defaultStyles.listInvisible)}>
        {this.setList()}
      </ul>
      </div>
    );
  }
}

Dropdown.propTypes = {
	list: PropTypes.array.isRequired,
	label: PropTypes.string
}

Dropdown.defaultProps = {
	list: []
}

export default Dropdown;
