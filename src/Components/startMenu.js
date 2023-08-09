import React, { Component } from 'react';
import MenuButton from './buttons/menuButton';

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
            <MenuButton
            className="startButton"
            content="START"
            onClickHandler={this.startPressed}
            />
        )
    }
}