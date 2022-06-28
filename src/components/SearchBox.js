import React from "react";

const SearchBox = ({ searchfield, searchChanged }) => {
    return(
        <div className='pa'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots' 
                onChange={searchChanged}
            />
        </div>
    );
}

export default SearchBox; 