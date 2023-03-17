import React from 'react'

export default function UserCard() {
  return (
    <div className="flex gap-[12px] items-center mt-[20px]">
      <img className="w-[280px] h-[210px]" src="" alt="" />

      <div className="border border-black border-solid w-[675px] h-[210px] relative">

        <h1 className=" text-base font-bold px-[10px] pt-[10px]">
          Mrs. Jazmin Abernathy
        </h1>
        <p className="py-[2px] px-[10px]">Corporate Markets Director</p>

        
        <div className='pt-[45px]' >

          <p className="px-[10px]"><span className="underline">Email:</span> Ali_King22@hotmail.com</p>
          <p className="px-[10px]"><span className="underline">Ip Address:</span> 253.137.8.170</p>
          <p className="px-[10px]"><span className="underline">Job Area:</span> Optimization</p>
          <p className="px-[10px]"><span className="underline">Job Type:</span> Engineer</p>

        </div>

        <p className="px-[10px] absolute top-[-13px] left-[10px] bg-white w-[45px]">Info</p>
        
      </div>




      <div className="border border-black border-solid w-[190px] h-[230px] relative">

        
        <h1 className=" text-base font-bold px-[10px] pt-[10px]">
          Walsh, Morar and Runolfsson and Sons
        </h1>

        
          <p className="px-[10px]"><span className="underline">City:</span> West Caden</p>
          <p className="px-[10px]"><span className="underline">Country:</span> United Kingdom</p>
          <p className="px-[10px]"><span className="underline">State:</span> Connecticut</p>
          <p className="px-[10px]"><span className="underline">Street Address:</span> 26027 Mohr Throughway</p>
          <p className="px-[10px]"><span className="underline">ZIP:</span> 15647-2569</p>



        <p className="px-[10px] absolute top-[-13px] left-[10px] bg-white w-[75px]">Address</p>


      </div>
    </div>
  );
}