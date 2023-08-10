import React, { Component } from 'react';
import EndButton from './buttons/endButton';

import './endMenu.css';

export default class EndMenu extends Component {

    constructor(props){
        super(props);

        this.startPressed = this.startPressed.bind(this);
    }

    startPressed(){
        this.props.startGameFunction();
    }

    render () {
        return (
            <div className='end-menu'>
                <p className='score-report'>{"you scored: " + this.props.score}</p>
                <div className='restart'>
                    <EndButton
                    content="PLAY AGAIN"
                    onClickHandler={this.startPressed}
                    />
                </div>
            </div>
        )
    }
}