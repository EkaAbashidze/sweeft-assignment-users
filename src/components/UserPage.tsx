import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

export default function UserPage() {
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
        "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/1/friends/1/20"
      );
      setFriends(result.data);
      console.log(result.data);
      console.log("data retrieved 🥳");
    };
    fetchData();
  }, []);

  return (
    <ul className="flex flex-wrap max-w-7xl mx-auto justify-center ">
      {friends.list.map((item, idx) => (
        <Card
          prefix={friends.list[idx].prefix}
          name={friends.list[idx].name}
          lastName={friends.list[idx].lastName}
          title={friends.list[idx].title}
          image={friends.list[idx].imageUrl}
        />
      ))}
    </ul>
  );
}