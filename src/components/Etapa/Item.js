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
        const { name, location, data, start, champion, title } = this.props;
        return (
            <div className='line-item' style={{borderLeft: '3px solid #424248'}}>
                <Row>
                    { title 
                        ? (
                            <Col s={12} style={{ padding: '10px'}} className='box-title'>
                                { name }
                            </Col>
                        )
                        :(
                            <Col s={12} style={{ marginTop: '5px'}}>
                                Nome: { name }
                            </Col>
                        )
                    }
                    <Col s={12} style={{ marginTop: '20px'}}>
                        Local: { location }
                    </Col>
                    <Col s={12} style={{ marginTop: '20px'}}>
                        Data: { data }
                    </Col>
                    <Col s={12} style={{ marginTop: '20px'}}>
                        Inicio: { start }
                    </Col>
                    <Col s={12} style={{ marginTop: '20px'}}>
                        Campeao: { champion }
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Item;