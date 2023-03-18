import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UserCard({ setHistory }) {
  const { id } = useParams();

  type FormData = {
    id: 0;
    name: string;
    lastName: string;
    prefix: string;
    title: string;
    jobDescriptor: string;
    jobArea: string;
    jobType: string;
    email: string;
    ip: string;
    imageUrl: string;
    company: {
      name: string;
      suffix: string;
    };
    address: {
      zipCode: string;
      city: string;
      streetAddress: string;
      country: string;
      state: string;
    };
  };

  const USER: FormData = {
    id: 0,
    name: "",
    lastName: "",
    prefix: "",
    title: "",
    jobDescriptor: "",
    jobArea: "",
    jobType: "",
    email: "",
    ip: "",
    imageUrl: "",
    company: {
      name: "",
      suffix: "",
    },
    address: {
      zipCode: "",
      city: "",
      streetAddress: "",
      country: "",
      state: "",
    },
  };

  const [user, setUser] = useState(USER);

  useEffect(() => {
    const fetchData = async function () {
      const result = await axios.get(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`
      );
      setUser(result.data);
      setHistory((prevHistory) => [...prevHistory, result.data]);
      console.log("NEW DATA RECEIVED: ", result.data);
    };
    fetchData();
  }, [id]);

  return (
    <div className="flex gap-[12px] items-center mt-[20px]">
      <img className="w-[280px] h-[210px]" src={user.imageUrl} alt="" />

      <div className="border border-black border-solid w-[675px] h-[210px] relative">
        <h1 className=" text-base font-bold px-[10px] pt-[10px]">
          {user.prefix} {user.name} {user.lastName}
        </h1>
        <p className="py-[2px] px-[10px]">{user.title}</p>

        <div className="pt-[45px]">
          <p className="px-[10px]">
            <span className="underline">Email:</span> {user.email}
          </p>
          <p className="px-[10px]">
            <span className="underline">Ip Address:</span> {user.ip}
          </p>
          <p className="px-[10px]">
            <span className="underline">Job Area:</span> {user.jobArea}
          </p>
          <p className="px-[10px]">
            <span className="underline">Job Type:</span> {user.jobType}
          </p>
        </div>

        <p className="px-[10px] absolute top-[-13px] left-[10px] bg-white w-[45px]">
          Info
        </p>
      </div>

      <div className="border border-black border-solid w-[190px] h-[230px] relative">
        <h1 className=" text-base font-bold px-[10px] pt-[10px]">
          Walsh, Morar and Runolfsson and Sons
        </h1>

        <p className="px-[10px]">
          <span className="underline">City:</span> {user.address.city}
        </p>
        <p className="px-[10px]">
          <span className="underline">Country:</span> {user.address.country}
        </p>
        <p className="px-[10px]">
          <span className="underline">State:</span> {user.address.state}
        </p>
        <p className="px-[10px]">
          <span className="underline">Street Address:</span>{" "}
          {user.address.streetAddress}
        </p>
        <p className="px-[10px]">
          <span className="underline">ZIP:</span> {user.address.zipCode}
        </p>

        <p className="px-[10px] absolute top-[-13px] left-[10px] bg-white w-[75px]">
          Address
        </p>
      </div>
    </div>
  );
}
