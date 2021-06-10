import React, {useState} from 'react'
import logo from '../img/marvel-logo.png'

const Search = ({search}) => {
    const[text,setText] = useState('')

    const onSearch= (e)=>{
        setText(e.target.value);
        search(e.target.value);
    }

    return (
        <section >
            <form>
            <img src= {logo} alt='marvel' width='50px' />
            <i class="fas fa-search"></i><input type="text"
                placeholder="Find a character.."
                onChange={onSearch}
                value={text} />
                <i class="far fa-star"></i>
            </form>
        </section>
    )
}

export default Search