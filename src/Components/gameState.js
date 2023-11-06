import React, { Component } from 'react'
import Game from './game';
import EndMenu from './endMenu';

import './gameState.css'

// store round status, score, high score, end and restart game here as well as the animations of score etc here in the game wrapper

export default class GameState extends Component{

    constructor(props){
        super(props);

        this.roundWin = this.roundWin.bind(this);
        this.roundLoss = this.roundLoss.bind(this);


        this.test = this.props.videos

        this.state = {
            score: 0,
            round: 0,
            state: "new",
            playing: true
        }
    }

    roundWin(){
        let prevScore = this.state.score;
        let prevRound = this.state.round;
        this.setState({ 
            score: prevScore + 1,
            round: prevRound + 1,
            state: "win1"
        });
        setTimeout(() => {
            this.setState({ state: "win2" })
        }, 1000)
        setTimeout(() => {
            this.setState({ state: "win3" })
        }, 1300)
        setTimeout(() => {
            this.setState({ state: "new" })
        }, 2300)

    }
    
    roundLoss(){
        this.setState({
            playing: false
        })
    }

    render(){
        if (!this.state.playing){
            return(
                <EndMenu 
                startGameFunction={this.props.startGameFunction}
                score={this.state.score}/>
            )
        }
        return(
            <div className='game-handler'>
                <p className='score'>SCORE: {this.state.score}</p>
                <div className='vs-circle'>
                    <img className='arrow' src="https://cdn-icons-png.flaticon.com/512/21/21173.png"></img>
                    <div className={'anim-circle-' + this.state.state}></div>
                </div>
                <div className={'bar1-' + this.state.state}></div>
                <div className={'bar2-' + this.state.state}></div>
                <Game 
                videos={this.props.videos}
                correctHandler={this.roundWin}
                incorrectHandler={this.roundLoss}
                state={this.state.state}
                />
            </div>
        )
    }
}