import flight from "../assets/icons8-flight-48.png";
import plus from "../assets/icons8-plus-24.png";
import wander from "../assets/how-to-enjoy-yourself-and-have-fun-while-traveling-alone-main-image-hd-op.jpg";
const Place = () => {
  return (
    <div className="py-28">
      <div className="flex justify-center mb-4">
        <img src={flight} alt="flight"></img>
      </div>
      <div>
        <h1 className="text-center text-5xl font-bold">See Places You Have</h1>
        <h1 className="text-center text-5xl font-bold  mb-12">
          Never Seen Before
        </h1>
      </div>
      <div className="flex justify-center gap-4 lg:gap-24 flex-wrap mx-4">
        <div>
          <hr className="h-px my-4 bg-black border-0 dark:bg-gray-700" />
          <div className="flex gap-14">
            <p>
              Planning Your Adventure: Crafting an Itinerary for Solo
              Exploration
            </p>
            <img src={plus} alt="plus"></img>
          </div>

          <hr className="h-px my-4 bg-black border-0 dark:bg-gray-700" />
          <div className="flex gap-10">
            <p>
              Off the Beaten Path: Unveiling Hidden Gems and Secret Destinations
            </p>
            <img src={plus} alt="plus"></img>
          </div>
          <hr className="h-px my-4 bg-black border-0 dark:bg-gray-700" />
          <div className="flex gap-16">
            <p>
              Solo Travel Tips: Navigating New Cultures and Customs with Ease
            </p>
            <img src={plus} alt="plus"></img>
          </div>
          <hr className="h-px my-4 bg-black border-0 dark:bg-gray-700" />
          <div className="flex gap-2">
            <p>
              Embracing Spontaneity: Seizing Opportunities for Unexpected
              Discoveries
            </p>
            <img src={plus} alt="plus"></img>
          </div>
          <hr className="h-px my-4 bg-black border-0  dark:bg-gray-700" />
        </div>
        <img src={wander} width={400} alt="wander"></img>
      </div>
    </div>
  );
};

export default Place;
