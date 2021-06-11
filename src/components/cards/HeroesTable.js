import React from 'react';
import { Contents } from './TableStyle';
import HeroesCards from './HeroesCards';


const HeroesTable = ({items,isLoading}) => {
    return isLoading ? <h1>Loading...</h1> :
    <Contents>
        {
            items.map(item=>(
                <HeroesCards key={item.id} item={item}></HeroesCards>
            ))
        }
    </Contents>
}

export default HeroesTable;