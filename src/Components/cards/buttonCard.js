import React, { Component } from 'react';
import GameButton from '../buttons/gameButton';

import './buttonCard.css';

export default class ButtonCard extends Component {

    render() {
        if (this.props.state === 'win3') {
            return null;
        }
            return (
                <div className='game-buttons'>
                    <GameButton class='higher' onClickHandler={this.props.onHigher} content="HIGHER" state={this.props.state}/>
                    <GameButton class='lower' onClickHandler={this.props.onLower} content="LOWER" state={this.props.state}/>
                </div>
            );
    }
}