import React from "react";
import Avatar from "./images/user.jpg";

export default function Card() {
  return (
    <li className="w-[280px] h-[265px] m-[10px]" >
      <img className="w-[280px] h-[210px]" src={Avatar} alt="" />
    </li>
  );
}
