import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import { Row, Col } from 'react-materialize';
import './Item.css';

class Item extends Component
{
    constructor(props) {
        super(props)
        this.state={};
    }

    render() {
        const { name, start } = this.props;
        return (
            <div className='line-item'>
                <Row>
                    <Col s={12} style={{ marginTop: '5px'}}>
                        Nome: { name }
                    </Col>
                    <Col s={12} style={{ marginTop: '20px'}}>
                        Inicio: { start }
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Item;