import React from 'react';
import Player from './Player';
import players from './players';

const PlayersList = () => {
    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '2rem'
    };

    return (
        <div style={containerStyle}>
            {players.map((player, index) => (
                <Player key={index} {...player} />
            ))}
        </div>
    );
};

export default PlayersList; 