import React, { Component } from "react";
import './Liga.css';

class Liga extends Component
{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='container'>
                <div className='box'>
                    <div className='box-title'>Liga</div>
                    <div className='box-content'>Content</div>
                </div>
            </div>
        )
    }
}

export default Liga;
