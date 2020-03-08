import React, { Component } from "react";
import './Pontos.css';
import Item from './Item';

class Pontos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points: [
                {
                    id: 0,
                    name: "Franco Nascimento",
                    victory: 3,
                    lose: 2,
                    draw: 0,
                    champion: true
                },
                {
                    id: 1,
                    name: "Marcos Vinicius",
                    victory: 3,
                    lose: 2,
                    draw: 0,
                    champion: false
                }
            ]
        };
    }

    render() {
        const { points } = this.state;
        return (
            <div className='container-fluid'>
                <div className='box'>
                    <div className='box-title'>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="stream" className="svg-inline--fa fa-stream fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M16 128h416c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H16C7.16 32 0 39.16 0 48v64c0 8.84 7.16 16 16 16zm480 80H80c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm-64 176H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16z" /></svg>
                        <span>
                            Pontos
                        </span>
                    </div>
                    <div className='box-content'>
                        {points.map((player) => {
                            return (
                                <Item
                                    key={ player.id }
                                    name={ player.name }
                                    victory={ player.victory }
                                    lose={ player.lose }
                                    draw={ player.draw }
                                    champion={ player.champion }
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Pontos;
