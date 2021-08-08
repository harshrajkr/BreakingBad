import React from 'react'
import Card from './Card'
import loader from './../Images/loader.gif'

function Character({characters, isLoading}) {
    return isLoading ? (
    <img src={loader} className='spinner' alt='Loading'/>
    ) : (
    <section className="cards">
        {characters.map(items =>(
            <Card key={items.char_id} char = {items}/> 
        ))}
    </section>)
}

export default Character
