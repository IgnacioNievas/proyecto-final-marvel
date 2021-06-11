import React from 'react';
import {HeoreCard} from './CardStyle';

const HereosCards = ({item}) => {

    return (<div>
          <HeoreCard>
              <img src={item.thumbnail.path + "." + item.thumbnail.extension} alt={item.name}/>
              <h1>{item.name}</h1>
              <i class="far fa-star"></i>
          </HeoreCard>
      </div>

    )
}

export default HereosCards;