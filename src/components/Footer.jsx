import Form from "./Form";

const Footer = () => {
  return (
    <>
      <Form />
      <div className="bg-gray-300 p-10 flex justify-center gap-16 flex-wrap">
        <h1 className="text-4xl font-bold text-wrap w-40 font-serif m-4">
          My Log Travels
        </h1>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col">
            <h2 className="font-bold">Quick Links</h2>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <ul>
                <li className="p-2 text-sm">Home</li>
                <li className="p-2 text-sm ">About Us</li>
                <li className="p-2 text-sm ">My TravelLogs</li>
              </ul>

              <ul className="text-start">
                <li className="p-2 text-sm ">Travels</li>
                <li className="p-2 text-sm ">PromoFlights</li>
                <li className="p-2 text-sm ">Travel Routes</li>
              </ul>

              <ul>
                <li className="p-2 text-sm ">Recommendations</li>
                <li className="p-2 text-sm ">Guides</li>
                <li className="p-2 text-sm ">Blogs</li>
              </ul>

              <ul>
                <li className="p-2 text-sm ">Mission Statement</li>
                <li className="p-2 text-sm ">The Team</li>
                <li className="p-2 text-sm ">Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="flex">
            <p className="text-sm">
              2024-Group-4 My Log Travels.ALL Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
