import React, { Component } from 'react';

import './menuButton.css';

export default class MenuButton extends Component {

    render() {
        return (
            <button href="#" className="testing" data-text={this.props.content} onClick={this.props.onClickHandler}>
                {this.props.content}
            </button>
        );
    }
}