import React, { Component } from 'react';
import MenuButton from './buttons/menuButton';

import './startMenu.css';

// add component that tracks the loading of videos from yotuube api to display "loading"

export default class StartMenu extends Component {

    constructor(props){
        super(props);

        this.startPressed = this.startPressed.bind(this);
    }

    startPressed(){
        this.props.startGameFunction();
    }

    render () {
        return (
            <div className='start-menu'>
                <p className='intro'>which video is trending higher?</p>
                <div className='start'>
                    <MenuButton
                    content={this.props.text}
                    onClickHandler={this.startPressed}
                    />
                </div>
            </div>
        )
    }
}