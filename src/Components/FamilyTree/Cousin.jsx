import React from 'react';
import Special from './Special';

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === 'TomTom' && <Special asset={asset} name="Special" ></Special>
            }
        </div>
    );
};

export default Cousin;