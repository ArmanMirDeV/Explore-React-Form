import React from 'react';
import Myself from './Myself';
import Bro from './Bro';
import Sis from './Sis';

const Dad = ({asset}) => {
    return (
        <div>
            <h3>Dad</h3>
            <section className='flex' >
                <Myself asset={asset} ></Myself>
                <Bro></Bro>
                <Sis></Sis>
            </section>
        </div>
    );
};

export default Dad;