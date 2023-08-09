import React, { Component } from 'react';
import ButtonCard from './buttonCard';

import './nextVideoCard.css';

export default class NextVideoCard extends Component {


    render () {
        this.trending = 'is-trending2-show';
        if (this.props.card === 1){
            if (this.props.state !== 'win3'){
                this.trending = 'is-trending2-show';
            } else {
                this.trending = 'is-trending2-'
            }
        }
        return (
        <div className='video-card2'>
            <div className='about2'>
                <p className='title2'>{this.props.title}</p>
                <p className={this.trending}>is trending</p>
                <div className='actions'>
                        <ButtonCard onHigher={this.props.higherClick} onLower={this.props.lowerClick} state={this.props.state}/>
                </div>
            </div>
            <div className='background2' style={{backgroundImage: `url(${this.props.thumbnail})`}}></div>
        </div>
        );
    }
}