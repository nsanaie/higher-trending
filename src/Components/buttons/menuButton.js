import React, { Component } from 'react';

export default class MenuButton extends Component {

    render() {
        return (
            <button className={this.props.class} onClick={this.props.onClickHandler}>
                {this.props.content}
            </button>
        );
    }
}