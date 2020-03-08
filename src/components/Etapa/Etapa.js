import React, { Component } from "react";
import './Etapa.css';

class Etapa extends Component
{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='container'>
                <div className='box'>
                    <div className='box-title'>Etapa</div>
                    <div className='box-content'>Content</div>
                </div>
            </div>
        )
    }
}

export default Etapa;
