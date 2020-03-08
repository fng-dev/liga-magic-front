import React, { Component } from "react";
import { Row, Col, Button } from 'react-materialize';
import Item from './Item';
import './Etapa.css';

class Etapa extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            etapas: [
                {
                    id: 0,
                    name:'4 Etapa Liga Modern de Magic',
                    location:'Joker Games',
                    data:'10-05-2020',
                    start:'08:00',
                    champion:'Franco Nascimento',
                },
                {
                    id: 1,
                    name:'4 Etapa Liga Modern de Magic',
                    location:'Joker Games',
                    data:'10-05-2020',
                    start:'08:00',
                    champion:'Franco Nascimento',
                }
            ]
        };
    }

    render() {
        const { etapas } = this.state;
        return (
            <div className='container-fluid'>
                <div className='box'>
                    <div className='box-title'>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar-alt" className="svg-inline--fa fa-calendar-alt fa-w-14" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"/></svg>
                        <span>
                            Etapa
                        </span>
                    </div>
                    <div className='box-content'>
                        <Row>
                            <Col s={12} style={{ textAlign: 'right' }}>
                                <Button
                                    node="button"
                                    style={{
                                    background: '#23232e',
                                    marginTop: '15px'
                                    }}
                                    waves="light"
                                >Nova Etapa </Button>   
                            </Col>
                        </Row>
                        
                        {etapas.map((item) => {
                            return (
                                <Item 
                                    title
                                    name={ item.name }
                                    location={ item.location }
                                    data={ item.data}
                                    start={item.start}
                                    champion={item.champion}
                                    key={item.id}
                                />
                            )
                        })}

                    </div>
                </div>
            </div>
        )
    }
}

export default Etapa;
