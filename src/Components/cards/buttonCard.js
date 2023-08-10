import React, { Component } from 'react';
import GameButton1 from '../buttons/gameButton1';
import GameButton2 from '../buttons/gameButton2';

import './buttonCard.css';

export default class ButtonCard extends Component {

    render() {
        if (this.props.state === 'win3') {
            return null;
        }
            return (
                <div className='game-buttons'>
                    <GameButton1 class='higher' onClickHandler={this.props.onHigher} content="HIGHER" state={this.props.state}/>
                    <GameButton2 class='lower' onClickHandler={this.props.onLower} content="LOWER" state={this.props.state}/>
                </div>
            );
    }
}