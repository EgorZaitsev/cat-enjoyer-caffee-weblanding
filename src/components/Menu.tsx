import React from "react";
import pizzaData from "../data";
import Pizza from "./Pizza";

export default function Menu() {
  return (
    <main className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:m-10 md:mb-0 gap-4 p-16">
      {pizzaData.length > 0 ? (
        pizzaData.map((pizza) => (
          <Pizza
            name={pizza.name}
            ingredients={pizza.ingredients}
            image={pizza.photoName}
            cost={pizza.price}
            soldout={pizza.soldOut}
            key={pizza.id}
          />
        ))
      ) : (
        <p>We'll still working working on our menu. Please comeback later :)</p>
      )}
    </main>
  );
}
