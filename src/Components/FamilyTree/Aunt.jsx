import React from 'react';
import Cousin from './Cousin';

const Aunt = ({asset}) => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex' >
                <Cousin  asset={asset} name='TomTom' ></Cousin>
                <Cousin name='JerrJerr' ></Cousin>
            </section>
        </div>
    );
};

export default Aunt;

