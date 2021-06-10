import React from 'react';
import HeroesCards from './HeroesCards';
import './card.css';

const HeroesTable = ({items,isLoading}) => {
    return isLoading ? <h1>Loading...</h1> :
    <section className="contents">
        {
            items.map(item=>(
                <HeroesCards key={item.id} item={item}></HeroesCards>
            ))
        }
    </section>
}

export default HeroesTable;