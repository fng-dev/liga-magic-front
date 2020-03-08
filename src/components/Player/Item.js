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
        const { name, dci, email } = this.props;
        return (
            <div className='line-item'>
                <Row>
                    <Col s={12} style={{ marginTop: '5px'}}>
                        Nome: { name }
                    </Col>
                    <Col s={12} style={{ marginTop: '20px'}}>
                        DCI: { dci }
                    </Col>
                    <Col s={12} style={{ marginTop: '20px'}}>
                        Email: { email }
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Item;