import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({name, asset}) => {

    const newAsset = useContext(AssetContext);

    console.log('New Asset' , newAsset);
    

    return (
        <div>
            <h3>{name}</h3>
            <p><small>Jewelry From Grandpa:</small> <span>{asset}</span></p>
            <p>NewAsset: {newAsset}</p>
        </div>
    );
};

export default Special;