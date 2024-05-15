import './TodoSearch.css'
import { TodoContext } from '../TodoContext';
import React from 'react';

function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext);


    return (
        <input value={searchValue} className='TodoSearch' placeholder="Set a TODO description" onChange={(e) => {
            setSearchValue(e.target.value);
        }} ></input>
    );
};

export { TodoSearch };
