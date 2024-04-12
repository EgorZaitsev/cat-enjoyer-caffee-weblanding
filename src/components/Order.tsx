import React from "react";

export default function Order() {
  const time: number = new Date().getHours();
  const realTime: string = new Date().toLocaleTimeString();
  const openHour: number = 12;
  const closeHour: number = 22;
  const isOpen: boolean = time >= openHour && time <= closeHour;
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <p className="">
        {isOpen
          ? `${realTime} We're Open! Come visit us or order online.`
          : `${realTime} Sorry! We're closed. Opens at 12 am`}
      </p>
      <button className="border-0 bg-yellow-400 cursor-pointer p-3 pl-6 pr-6 transition-colors hover:bg-yellow-500">
        Order Now!
      </button>
    </div>
  );
}
