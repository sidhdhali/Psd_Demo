import React from "react";
import form_image  from '../assets/form_image.jpg'; 


const Form = () => {
  return <div className="flex flex-wrap justify-center py-20 bg-gray-200 gap-6 ">
    
    <div className="flex flex-col me-4">
      <h1 className="text-5xl text-center font-bold m-4 mt-0 w-80 font-serif">Be updated!</h1>
      
      <form className="flex flex-col">
      <input placeholder="First Name*" className="border-2 border-black rounded w-80 placeholder-black text-sm m-2 p-2 bg-gray-200" />
      <input placeholder="Last Name*"  className="border-2 border-black rounded w-80  text-black text-sm m-2 p-2 placeholder-black bg-gray-200" />
      <input placeholder="Email Subject*"  className="border-2 border-black rounded w-80  text-black text-sm m-2 p-2 placeholder-black bg-gray-200"/>
      <textarea placeholder="Write something here..."  className="border-2 border-black rounded w-80  text-black text-sm h-40 m-2 p-2 bg-gray-200 placeholder-black" />
      <button className="bg-black text-white w-80 border rounded p-2 m-2 mt-6">Submit Email</button>
      </form>
    </div>

    <div className="flex justify-center h-[470px]">
      <img src={form_image} alt="a travelling sea photo" width={500}  />
    </div>  
  
  </div>;
};

export default Form;
