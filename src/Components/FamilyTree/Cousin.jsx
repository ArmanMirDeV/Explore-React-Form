import React from 'react';
import Special from './Special';
import Friend from './Friend';

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === 'TomTom' && <Special asset={asset} name="Special" ></Special>
            }
            {
                name === "JerrJerr" && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;