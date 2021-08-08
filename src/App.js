import axios from 'axios';
import React, {useEffect, useState} from 'react'
import './App.css';
import Header from './Components/Header';
import Character from './Components/Character';
import Search from './Components/Search';
import ReactPaginate from 'react-paginate';

function App() {
  const [offset, setOffset] = useState(0)
  const [perPage, setPerPage] = useState(10)
  const [pageCount, setPageCount] = useState(0)
  const [characters, setChar] = useState([])
  const [isLoading, setisLoading] = useState([true])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${search}`)
      // console.log(result.data)
      setChar(res.data)
      setisLoading(false)
    }
    fetchItems();
  },[search])

  return (
    <div className="container">
      <Header/>
      <Search searchQuery={(searchText)=>setSearch(searchText)}/>
      <Character isLoading={isLoading} characters={characters}/>
    </div>
  );
}

export default App;