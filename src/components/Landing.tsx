import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

export default function Landing() {
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
        "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/1/20"
      );
      setData(result.data);
      console.log(data);
      console.log("data retrieved 🥳");
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = async function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        const nextPage = data.pagination.nextPage;
        const result = await axios.get(
          `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${nextPage}/20`
        );
        setData((prevData) => ({
          ...prevData,
          pagination: {
            ...prevData.pagination,
            ...result.data.pagination,
          },
          list: [...prevData.list, ...result.data.list],
        }));
      }
    };

    window.onscroll = handleScroll;

    return () => {
      window.onscroll = null;
    };
  });

  return (
    <ul className="flex flex-wrap max-w-7xl mx-auto justify-center ">
      {data.list.map((item, idx) => (
        <Card
          prefix={data.list[idx].prefix}
          name={data.list[idx].name}
          lastName={data.list[idx].lastName}
          title={data.list[idx].title}
          image={data.list[idx].imageUrl}
        />
      ))}
    </ul>
  );
}
