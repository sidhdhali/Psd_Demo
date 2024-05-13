import React from "react";
import form_image  from '../assets/form_image.avif'; 


const Form = () => {
  return <div className="flex flext-col justify-center m-10">
    
    <div className="flex flex-col items-center justify-center w-screen ">
      <h1 className="text-5xl text-center font-bold m-4 w-80 font-serif">Be updated!</h1>
      
      <form className="flex flex-col">
      <input placeholder="First Name*" className="border-2 border-black rounded w-80 placeholder-black text-sm m-2 p-2" />
      <input placeholder="Last Name*"  className="border-2 border-black rounded w-80  text-black text-sm m-2 p-2 placeholder-black"/>
      <input placeholder="Email Subject*"  className="border-2 border-black rounded w-80  text-black text-sm m-2 p-2 placeholder-black"/>
      <textarea placeholder="Write something here..."  className="border-2 border-black rounded w-80  text-black text-sm h-40 m-2 p-2 placeholder-black" />
      <button className="bg-black text-white w-80 border rounded p-2 m-4">Submit Email</button>
      </form>
    </div>

    <div className=" w-screen  ">
      <img src={form_image}  alt="a travelling see photo"/>
    </div>
  
  
  </div>;
};

export default Form;
