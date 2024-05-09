import React, { useContext } from 'react';
import MyContext1 from './MyStore';

const DisplayFormData = () => {
    const { data, editFun, deleteFun } = useContext(MyContext1);
console.log(data,'===========');
    return (
        <div>
            <ul>
                {data.array.map((item, index) => (
                    <li key={index}>
                        {`Name: ${item.name}, 
                          Email: ${item.email}, 
                          Password: ${item.password}`} 
                        <button onClick={() => editFun(index)}>edit</button>
                        <button onClick={() => deleteFun(index)}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayFormData;
