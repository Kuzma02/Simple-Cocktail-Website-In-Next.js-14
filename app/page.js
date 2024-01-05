const fetchDrinks = async () => {
  const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a");
  if(!response.ok){
    throw new Error("Failded request to CocktailDB");
  }
  const data = await response.json();
  return data;
}

import Drinks from '@/components/Drinks';
import React from 'react'

const HomePage = async () => {
  const data = await fetchDrinks();
  return (
    <Drinks data={data} />
  )
}

export default HomePage
