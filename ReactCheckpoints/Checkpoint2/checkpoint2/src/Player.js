import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    const cardStyle = {
        width: '18rem',
        margin: '1rem',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer'
    };

    return (
        <Card style={cardStyle} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <Card.Img variant="top" src={imageUrl} style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <p>Team: {team}</p>
                    <p>Nationality: {nationality}</p>
                    <p>Jersey Number: {jerseyNumber}</p>
                    <p>Age: {age}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

Player.defaultProps = {
    name: "Unknown Player",
    team: "Free Agent",
    nationality: "Not Specified",
    jerseyNumber: 0,
    age: 20,
    imageUrl: "https://via.placeholder.com/150"
};

export default Player; 