import React from 'react';
import './card.css';
const HereosCards = ({item}) => {

  

    return (
        <div className='content'>
        <div className='content-front'>
          
         
            <img src={item.thumbnail.path + "." + item.thumbnail.extension} alt={item.name} />
              <h1>{item.name}</h1>
           
        </div>
      </div>

    )
}

export default HereosCards;