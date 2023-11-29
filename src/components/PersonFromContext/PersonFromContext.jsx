import React, { useContext, useEffect } from 'react';
import { namesContext } from '../../App';
function PersonFromContext() {
    const person = useContext(namesContext);
    console.log(person)
    return (
        <div>            
            <div>
                {
                    person.map((item) => (
                        <p>{item}</p>
                    ))}
            </div>
        </div>
    );
}

export default PersonFromContext
