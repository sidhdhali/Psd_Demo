import user from "../assets/download.png";

const Customer = () => {
  return (
    <div className="py-28 bg-gray-100">
      <div className="mx-2">
        <h1 className="text-center text-5xl font-bold">Here's what they say</h1>
        <h1 className="text-center text-5xl font-bold  mb-12">
          have to say...
        </h1>
      </div>
      <div className="flex justify-center flex-wrap gap-10">
        <div className="px-4 py-4 rounded-lg border border-black w-[300px]">
          <div className="flex justify-center mb-4">
            <img src={user} alt="user"></img>
          </div>

          <h3 className="text-lg text-center font-bold">Sarah M</h3>
          <p className="text-center">
            Absolutely loved the personalized experience of solo travel! The
            itinerary suggestions were spot-on, and I discovered hidden gems I
            never would have found on my own.
          </p>
        </div>
        <div className="px-4 py-4 rounded-lg border border-black w-[300px]">
          <div className="flex justify-center mb-4">
            <img src={user} alt="user"></img>
          </div>

          <h3 className="text-lg text-center font-bold">Emily K</h3>
          <p className="text-center">
            Solo travel can be intimidating, but this guide made it feel
            effortless. From cultural insights to practical advice, it exceeded
            my expectations and made for an unforgettable journey.
          </p>
        </div>
        <div className="px-4 py-4 rounded-lg border border-black w-[300px]">
          <div className="flex justify-center mb-4">
            <img src={user} alt="user"></img>
          </div>

          <h3 className="text-lg text-center font-bold">James R</h3>
          <p className="text-center">
            As a solo traveler, safety is always a concern for me. I appreciated
            the thorough safety tips provided by the travel guide, which helped
            me feel more confident exploring new destinations
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customer;
