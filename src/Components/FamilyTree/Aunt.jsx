import React, { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunt = ({asset}) => {

    const [money , setMoney] = use(MoneyContext)

    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex' >
                <Cousin  asset={asset} name='TomTom' ></Cousin>
                <Cousin name='JerrJerr' ></Cousin>
                <button onClick={() => setMoney(money+ 5000)} >Add  5000 tk</button>
            </section>
        </div>
    );
};

export default Aunt;

