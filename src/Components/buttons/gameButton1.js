import React, { Component } from 'react';

import './gameButton1.css'

export default class GameButton1 extends Component {


    render() {
        return (
            <button className={"arrow-button-" + this.props.state} onClick={this.props.onClickHandler}>{this.props.content}
            </button>
        );
    }
}

// <button
//             className='main-button'
//             onClick={this.props.onClickHandler}
//             disabled={this.props.disabled}>
//             <span className='front-button'>
//                 {this.props.content}
//             </span>
//             </button>