import React from 'react';
import Special from './Special';

const Myself = ({asset}) => {
    return (
        <div>
            <h3>Arman</h3>
            <Special asset={asset} name='Qamarun' ></Special>
        </div>
    );
};

export default Myself;