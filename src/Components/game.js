import React, { Component } from 'react';
import VideoLogic from './videos/videoLogic';
import ButtonCard from './cards/buttonCard';
import CurrentVideoCard from './cards/currentVideoCard';
import NextVideoCard from './cards/nextVideoCard';

import './game.css'

export default class Game extends Component {

    constructor(props){
        super(props);

        this.newRound = this.newRound.bind(this);
        this.higherClick = this.higherClick.bind(this);
        this.lowerClick = this.lowerClick.bind(this); 

        this.videoLogic = new VideoLogic(this.props.videos);
        var currentVideos = this.videoLogic.getStartingVideos();

        this.state = {
            video1: currentVideos[0],
            video2: currentVideos[1],
            video3: currentVideos[2]
        }
    }

    componentDidMount(){
    }

    componentDidUpdate(prevProps){
        if (this.props.state === "new" && this.props.state != prevProps.state){
            this.newRound();
        }
    }

    higherClick(){
        let correct = this.state.video2.trending < this.state.video1.trending;
        correct ? this.props.correctHandler() : this.props.incorrectHandler();
    }

    lowerClick(){
        let correct = this.state.video2.trending > this.state.video1.trending;
        correct ? this.props.correctHandler() : this.props.incorrectHandler();
    }

    newRound(){
        let nextHigherOrLower = this.state.video2.trending > this.state.video3.trending;
        this.setState((before, props) => ({
            video1: before.video2,
            video2: before.video3,
            video3: this.videoLogic.getNextVideo()
        }));
    }

    render(){
        return (
            <div>
                <div className='game'>
                    <div className={'game-transition-' + this.props.state}>
                        <CurrentVideoCard 
                        title={this.state.video1.snippet.title} 
                        thumbnail={this.state.video1.snippet.thumbnails.maxres.url}/>
                        <NextVideoCard 
                        title={this.state.video2.snippet.title} 
                        thumbnail={this.state.video2.snippet.thumbnails.maxres.url}
                        higherClick={this.higherClick}
                        lowerClick={this.lowerClick}
                        state={this.props.state}
                        card={1}/>
                        <NextVideoCard 
                        title={this.state.video3.snippet.title} 
                        thumbnail={this.state.video3.snippet.thumbnails.maxres.url}
                        state={this.props.state}
                        card={2}/>
                    </div>
                </div>
            </div>
        )
    }
}