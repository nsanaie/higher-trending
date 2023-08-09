import React, { Component } from 'react';

import './currentVideoCard.css';

export default class CurrentVideoCard extends Component {


    render () {
        return (
        <div className='video-card1'>
            <div className='about1'>
                <p className='title1'>{this.props.title}</p>
            </div>
            <div className='background1' style={{backgroundImage: `url(${this.props.thumbnail})`}}></div>
        </div>
        );
    }
}