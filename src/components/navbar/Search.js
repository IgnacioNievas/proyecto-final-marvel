import React, {useState} from 'react';
import logo from '../img/marvel-logo.png';
import { SearchStyle } from './SearchStyle';

const Search = ({search}) => {
    const[text,setText] = useState('')

    const onSearch= (e)=>{
        setText(e.target.value);
        search(e.target.value);
    }

    return (
        <SearchStyle>
        <div >
        <img src= {logo} alt='marvel' />
            <form>
            <i class="fas fa-search"></i><input type="text"
                placeholder="Find a character.."
                onChange={onSearch}
                value={text} />
            </form>
            <i class="far fa-star fav "></i>
            </div>  
        </SearchStyle>
    )
}

export default Search