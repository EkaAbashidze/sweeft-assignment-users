import React, { useEffect, useState } from "react";
import Avatar from "./images/user.jpg";
import axios from "axios";

export default function Card() {
  interface List {
    id: number;
    name: string;
    lastName: string;
    prefix: string;
    title: string;
    imageUrl: string;
  }

  type FormData = {
    pagination: {
      previousPage: number;
      current: number;
      nextPage: number;
      total: number;
      pageSize: number;
    };
    list: List[];
  };

  const USER_DATA: FormData = {
    pagination: {
      previousPage: 0,
      current: 0,
      nextPage: 0,
      total: 0,
      pageSize: 0,
    },
    list: [
      {
        id: 0,
        name: "",
        lastName: "",
        prefix: "",
        title: "",
        imageUrl: "",
      },
    ],
  };

  const [data, setData] = useState(USER_DATA);

  useEffect(() => {
    const fetchData = async function () {
      const result = await axios.get(
        "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/1/1"
      );
      setData(result.data);
      console.log(data);
      console.log("data retrieved 🥳");
    };
    fetchData();
  }, []);

  return (
    <li className="w-[280px] h-[265px] m-[10px] border-[#ccc] border-solid border">
      <img className="w-[280px] h-[210px]" src={Avatar} alt="" />
      <h1 className=" text-base font-bold py-[2px] px-[10px]">
        {data.list[0].name}
      </h1>
      <p className="py-[2px] px-[10px]">{data.list[0].title}</p>
    </li>
  );
}
