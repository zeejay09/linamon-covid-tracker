import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import './Cards.css';

class Cards extends Component {
    
    render() {
        return (
            <CardDeck>
                <Card>
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' asdasd '}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </CardDeck>
        );
    }
}

export default Cards