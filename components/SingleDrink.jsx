import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleDrink = ({ drink }) => {
  return (
    <div>
      <Link href={`/${drink.idDrink}`}>
        <Image
          src={drink.strDrinkThumb}
          height="400"
          width="400"
          alt={drink.strDrink}
        />
        <h2 className="text-2xl font-bold text-center">{drink.strDrink}</h2>
      </Link>
    </div>
  );
};

export default SingleDrink;
