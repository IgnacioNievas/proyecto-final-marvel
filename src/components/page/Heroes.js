import HeroesTable from '../cards/HeroesTable' 
import axios from 'axios';
import React , {useEffect,useState} from 'react';
import Search from '../navbar/Search';

const hash = "fa9883441e882554b74df48ab1fb7bb1";
const pukey ="b6f7c0bedbe13be6fde215ac21c638cb";

const Heroes = ()=> {
  const[items,setItems] = useState([])
  const[isLoading,setLoading] = useState(true)
  const [query,setQuery] = useState('')

  useEffect(()=>{
      const fetch = async()=>{
        if(query===''){
          // checking if array is empty or does not exist
          
            const result = await axios.get(` https://gateway.marvel.com/v1/public/characters?orderBy=name&ts=1&apikey=${pukey}&hash=${hash}&limit=100`)
            // console.log(result.data.data.results)
            setItems(result.data.data.results)
            setLoading(false) 
          
        }else{
          const result = await axios.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&orderBy=name&ts=1&apikey=${pukey}&hash=${hash}`)
          // console.log(result.data.data.results)
          setItems(result.data.data.results)
          setLoading(false)
        }
      
    }

    fetch()
  },[query])

  return (
    <div >
      <Search search={setQuery}></Search>
      <HeroesTable items={items} isLoading={isLoading} />
    </div>
  );
}


export default Heroes;