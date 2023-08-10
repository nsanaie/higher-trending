import React, { Component } from 'react';

import './endButton.css';

export default class EndButton extends Component {

    render() {
        return (
            <button href="#" className="testing2" data-text={this.props.content} onClick={this.props.onClickHandler}>
                {this.props.content}
            </button>
        );
    }
}