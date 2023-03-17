import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import UserCard from "./UserCard";
import { Link, useParams } from "react-router-dom";

export default function UserPage() {
  const { id } = useParams();

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

  const USER_FRIENDS: FormData = {
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

  const [friends, setFriends] = useState(USER_FRIENDS);

  useEffect(() => {
    const fetchData = async function () {
      const result = await axios.get(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/${friends.pagination.current}/20`
      );
      setFriends(result.data);
      console.log(result.data);
      console.log("data retrieved 🥳");
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const handleScroll = async function () {
      console.log(friends);
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        const nextPage = friends.pagination.nextPage;
        const result = await axios.get(
          `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/${nextPage}/20`
        );
        setFriends((prevData) => ({
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
    <div className="flex flex-wrap max-w-7xl mx-auto justify-center ">
      {/* border-#ccc border border-solid */}

      <UserCard />
      {/* <h1 className="text-2xl font-bold" >Friends:</h1> */}
      <ul className="flex flex-wrap max-w-7xl mx-auto justify-center ">
        {friends.list.map((item, idx) => (
          <Link to={`/${friends.list[idx].id}`}>
            <Card
              prefix={friends.list[idx].prefix}
              name={friends.list[idx].name}
              lastName={friends.list[idx].lastName}
              title={friends.list[idx].title}
              image={friends.list[idx].imageUrl}
            />
          </Link>
        ))}
      </ul>
    </div>
  );
}
