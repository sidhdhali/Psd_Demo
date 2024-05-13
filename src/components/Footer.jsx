import React from "react";
import Form from "./Form";

const Footer = () => {
  return <>
  <Form />  
  <div className="bg-gray-300 p-10">
    <div className="flex flex-row justify-center ">
    <h1 className="text-4xl font-bold text-wrap w-40 font-serif m-4">My Log Travels</h1>
    <div className="flex flex-col justify-center items-start">
        <h2 className="font-bold justify-items-start  m-4">Quick Links</h2>
        <div className="flex flex-row">

        <ul className="text-start mr-6 ">
          <li className="p-2 text-sm ">Home</li>
          <li className="p-2 text-sm ">About Us</li>
          <li className="p-2 text-sm ">My TravelLogs</li>
        </ul>
      

   
      <ul className="text-start mr-6">
        <li className="p-2 text-sm ">Travels</li>
        <li className="p-2 text-sm " >PromoFlights</li>
        <li className="p-2 text-sm ">Travel Routes</li>
      </ul>
    

    
      <ul className="text-start mr-6">
        <li className="p-2 text-sm ">Recommendations</li>
        <li className="p-2 text-sm ">Guides</li>
        <li className="p-2 text-sm ">Blogs</li>
      </ul>
    
  
    
    <ul className="text-start ">
      <li className="p-2 text-sm ">Mission Statement</li>
      <li className="p-2 text-sm ">The Team</li>
      <li className="p-2 text-sm ">Contact Us</li>
    </ul>
  
  </div>
    </div>

</div>
    <p className="text-center p-4 m-6" >2024-Group-4 My Log Travels.ALL Rights Reserved.</p>
    
    </div>
    </>;
};

export default Footer;
