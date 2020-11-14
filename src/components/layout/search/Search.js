import React from 'react';
import scss from './search.module.scss';
import SelectCat from '../../ui/select/Select';
import InputSearch from '../../ui/input/input';


const Search = () => {

    return (
        <form className={scss['search']}>
            <SelectCat />
            <InputSearch />
        </form>
    )
}

export default Search
