import './heroes.css';
import HeroesTable from '../cards/HeroesTable' 
import axios from 'axios';
import React , {useEffect,useState} from 'react';
import Search from '../navbar/Search';

const hash = "fa9883441e882554b74df48ab1fb7bb1";

const Heroes = ()=> {
  const[items,setItems] = useState([])
  const[isLoading,setLoading] = useState(true)
  const [query,setQuery] = useState('')

  useEffect(()=>{
      const fetch = async()=>{
        if(query===''){
          // checking if array is empty or does not exist
          
            const result = await axios.get(` https://gateway.marvel.com/v1/public/characters?ts=1&apikey=b6f7c0bedbe13be6fde215ac21c638cb&hash=${hash}`)
            // console.log(result.data.data.results)
            setItems(result.data.data.results)
            setLoading(false) 
          
        }else{
          const result = await axios.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=b6f7c0bedbe13be6fde215ac21c638cb&hash=${hash}`)
          // console.log(result.data.data.results)
          setItems(result.data.data.results)
          setLoading(false)
        }
      
    }

    fetch()
  },[query])

  return (
    <div className="container">
      <Search search={(q)=>setQuery(q)}></Search>
      <HeroesTable items={items} isLoading={isLoading} />
    </div>
  );
}


export default Heroes;