import React from 'react'
import { Card, Button} from 'react-bootstrap'

export default function SubCard(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.dogs.image} width= "300" height="300" />
                <Card.Body>
                    <Card.Title>{props.dogs.name}</Card.Title>
                    <Card.Text>
                    {props.dogs.description}
                    </Card.Text>
                    <Button variant="danger" onClick={() => props.deleteCard(props.index)}>Don't click me</Button>
                </Card.Body>
                </Card>
        </div>
    )
}
