import React from 'react'
import SingleDrink from './SingleDrink'

const Drinks = ({ data: { drinks } }) => {

  return (
    <div className='grid grid-cols-3 max-w-7xl mx-auto'>
        { drinks.map(drink => (
            <SingleDrink key={drink.idDrink} drink={drink} />
        )) }
    </div>
  )
}

export default Drinks