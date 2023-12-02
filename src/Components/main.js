import React, { Component } from 'react';
import StartMenu from './startMenu';
import GameState from './gameState';

import './main.css'

export default class Main extends Component {

    constructor(props){
        super(props);

        this.startGame = this.startGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
        this.loadVideos = this.loadVideos.bind(this);
        this.loadingHolder = this.loadingHolder.bind(this);

        this.state = { 
            gameStart: false, 
            loaded: false 
        };
    }


    async loadVideos(){
        const videos = await fetch("https://trending-loader.onrender.com/data")
        return await videos.json();
    }

    componentDidMount() {
        setTimeout(() => {
            this.loadVideos().then(videos => {
                this.setState({
                    videos: videos,
                    loaded: true
                })
            })
        });
    }
    
    startGame(){
        return this.setState({ gameStart: true })
    }

    restartGame(){
        this.setState({ loaded: false })
        this.setState({ gameStart: false })
        setTimeout(() => {
            this.loadVideos().then(videos => {
                this.setState({
                    videos: videos,
                    loaded: true
                })
            })
        }, 750);
    }

    loadingHolder(){
        return 0;
    }

    render() {
        return (
            <div className='menu-box'>
                {this.state.loaded ? this.state.gameStart ? <GameState videos={this.state.videos} startGameFunction={this.restartGame}/> : <StartMenu text="START" startGameFunction={this.startGame}/> : <StartMenu text="loading" startGameFunction={this.loadingHolder}/>}
            </div>
        );
    }
}

// add "about" page
// add trending count to the left card
// clean up in game buttons