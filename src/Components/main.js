import React, { Component } from 'react';
import StartMenu from './startMenu';
import GameState from './gameState';

import './main.css'

export default class Main extends Component {

    constructor(props){
        super(props);

        this.startGame = this.startGame.bind(this);
        this.loadVideos = this.loadVideos.bind(this);

        this.state = { 
            gameStart: false, 
            loaded: false 
        };
    }


    async loadVideos(){
        let unshuffledVideos = [];
        let popURL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=AIzaSyCk_fD6qrE5WsxDBxsq81ivcY06nRxUXYA';
        let response = await fetch(popURL);
        let data = await response.json();
        unshuffledVideos = unshuffledVideos.concat(data.items);
        while (data.nextPageToken != null){
            popURL = popURL + "&pageToken=" + data.nextPageToken;
            response = await fetch(popURL);
            data = await response.json();
            unshuffledVideos = unshuffledVideos.concat(data.items);
        }
        for (let i=0; i<unshuffledVideos.length; i++){
            unshuffledVideos[i].trending = i+1;
            let title = unshuffledVideos[i].snippet.title;
            unshuffledVideos[i].snippet.title = '"' + title + '"';
            if (!('maxres' in unshuffledVideos[i].snippet.thumbnails)){
                unshuffledVideos[i].snippet.thumbnails.maxres = {url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"}
            }
        }
        let shuffledVideos = unshuffledVideos
            .map(value => ({ value, sort: Math.random() }))
            .sort((a,b) => a.sort - b.sort)
            .map(({ value }) => value)

        console.log("loaded!")
        console.log(unshuffledVideos)
        return shuffledVideos;
    }

    componentDidMount() {
        setTimeout(() => {
            this.loadVideos().then(videos => {
                this.setState({
                    videos: videos,
                    loaded: true
                })
            })
        }, 1000);
    }
    
    startGame(){    
        return this.setState({ gameStart: true })
    }

    render() {
        return (
            <div className='menu-box'>
                {this.state.loaded ? this.state.gameStart ? <GameState videos={this.state.videos}/> : <StartMenu startGameFunction={this.startGame}/> : <h1>loading</h1>}
            </div>
        );
    }
}