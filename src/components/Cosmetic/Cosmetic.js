import React from 'react';
import { addToDb, deleteFromDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    console.log(props.cosmetic);
    const { name, _id, balance, gender } = props.cosmetic;
    const handlePurchase = id => {
        //set to local storage
        console.log(id);
        addToDb(id);
    }

const handleRemove=id=>{
    deleteFromDb(id);
}

    return (
        <div>
            <h2>name: {name}</h2>
            <p>_id:{_id} </p>
            <p>balance: {balance}</p>
            <p><small>Gender: {gender}</small></p>
            <button onClick={() => handlePurchase(_id)}>Purchase Now</button>
            <button onClick={()=>handleRemove(_id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;