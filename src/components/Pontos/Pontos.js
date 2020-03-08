import React, { Component } from "react";
import './Pontos.css';

class Pontos extends Component
{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='container'>
                <div className='box'>
                    <div className='box-title'>Pontos</div>
                    <div className='box-content'>Content</div>
                </div>
            </div>
        )
    }
}

export default Pontos;
