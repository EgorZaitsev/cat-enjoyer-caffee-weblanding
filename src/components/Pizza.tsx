import React from "react";

type PizzaProps = {
  name: string;
  ingredients: string;
  cost: number;
  image: string;
  soldout: boolean;
};

export default function Pizza({
  name,
  ingredients,
  cost,
  soldout,
  image,
}: PizzaProps) {
  return (
    <div className="flex gap-2">
      <img
        className={`${soldout ? "grayscale" : ""} w-48 h-48 mr-4`}
        src={image}
        alt="pizzaphoto"
      />
      <div className="mt-4">
        <h2 className="md:text-2xl">{name}</h2>
        <p>{ingredients}</p>
        {soldout ? <span>SOLDOUT</span> : <span>{cost} $</span>}
      </div>
    </div>
  );
}
