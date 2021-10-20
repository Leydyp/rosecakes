
import React from 'react'
import { useState } from 'react';

const Hello = ({name}) => {

    return <h1>Hello {name}!</h1>;
}

function ItemCount (){
    const [name, setName] = useState ('Agustin');

    const onClick = () => {
        setName('Mercedes')
    }
    return (
        <div  class=""onClick={onClick}> 

        <Hello name={name}></Hello>
        
        </div>
    )
}

export default ItemCount


