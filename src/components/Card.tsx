import React, { useEffect, useState } from "react";
import Avatar from "./images/user.jpg";
import axios from "axios";

export default function Card({prefix, name, lastName, title, image}) {



  return (
    <li className="w-[280px] h-[265px] m-[10px] border-[#ccc] border-solid border cursor-pointer">
      <img className="w-[280px] h-[210px]" src={image} alt="" />
      <h1 className=" text-base font-bold py-[2px] px-[10px]">
        {prefix} {name} {lastName}
      </h1>
      <p className="py-[2px] px-[10px]">{title}</p>
    </li>
  );
}