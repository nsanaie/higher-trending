import React, { Component } from 'react';

export default class VideoLoader extends Component {

    constructor(props){
        super(props);

        this.loadVideos = this.loadVideos.bind(this);
        this.loaded = false;
    }

    async loadVideos(loaded){
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
        console.log(unshuffledVideos);
        let shuffledVideos = unshuffledVideos
            .map(value => ({ value, sort: Math.random() }))
            .sort((a,b) => a.sort - b.sort)
            .map(({ value }) => value)

        console.log(shuffledVideos);
        loaded=true;
        return shuffledVideos;
        
    }
}
