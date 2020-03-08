import React, { Component } from "react";
import './Player.css';

class Player extends Component
{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='container'>
                <div className='box'>
                    <div className='box-title'>Player</div>
                    <div className='box-content'>Content</div>
                </div>
            </div>
        )
    }
}

export default Player;
