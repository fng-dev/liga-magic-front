import React, { Component } from 'react';
import LeftNavBar from './../LeftNavBar/LeftNavBar'

import './Main.css';

class Main extends Component
{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { children } = this.props;
        return (
            <>
                <LeftNavBar />
                <main>
                    { children }
                </main>
            </>
            

        )
    }
}

export default Main;
