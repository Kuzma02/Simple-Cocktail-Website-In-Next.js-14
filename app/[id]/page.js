import Image from "next/image";
import React from "react";

const getSingleDrink = async (id) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await response.json();
  return data;
};

const SingleDrinkPage = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  console.log(data.drinks[0].strDrink);
  return (
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="text-6xl">{data.drinks[0].strDrink}</h1>
      <Image className="mx-auto mt-10" src={data.drinks[0].strDrinkThumb} width="400" height="400" alt={data.drinks[0].strDrink} />
      <p className="text-2xl mt-5">Category: { data.drinks[0].strCategory ? data.drinks[0].strCategory : "No category" }</p>
      <p className="text-2xl mt-5">Is alcoholic?: { data.drinks[0].strAlcoholic }</p>
      <p className="text-2xl mt-5">Instructions: { data.drinks[0].strCategory ? data.drinks[0].strInstructions : "No instructions" }</p>
    </div>
  );
};

export default SingleDrinkPage;
