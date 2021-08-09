import React from 'react'
import './App.css';
import CharactersList from './Components/CharactersList';
import Header from './Components/Header';
import {Switch, Route} from 'react-router-dom'
// import Pagination from './Components/Pagination';
import Character from './Components/Character';

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route path='/' exact component={CharactersList} />
      <Route path='/character/:id' exact component={Character} />
      {/* <Route path='/search/:search' exact component={CharactersList}/> */}
      <Route path='/page/:number' exact component={CharactersList}/>
    </Switch>
    </>
  );
}

export default App;