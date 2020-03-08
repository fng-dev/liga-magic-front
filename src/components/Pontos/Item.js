import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import { Row, Col } from 'react-materialize';

class Item extends Component
{
    constructor(props) {
        super(props)
        this.state={};
    }

    render() {
        const { name, victory, lose, draw, champion } = this.props;
        console.log(name)
        return (
            <div className={ champion ? 'line-item champion' : 'line-item'}>
                <Row>
                    <Col s={4} style={{ marginTop: '20px'}}>
                        { name }
                    </Col>
                    <Col s={2} style={{ marginTop: '20px'}}>
                        <span>Vitorias:</span> { victory }
                    </Col>
                    <Col s={2} style={{ marginTop: '20px'}}>
                        <span>Derrotas:</span> { lose }
                    </Col>
                    <Col s={2} style={{ marginTop: '20px'}}>
                        <span>Empates:</span> { draw }
                    </Col>
                    <Col s={2} style={{ marginTop: '20px', fontWeight: 'bolder', color: '#6e6e6e'}}>
                        <span>Total:</span> { (victory * 3) + (draw * 1) }
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Item;