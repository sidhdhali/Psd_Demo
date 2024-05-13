import hiking from "../assets/pexels-sanmane-1365425.jpg";
import mountain from "../assets/pexels-eberhardgross-1287145.jpg";
import wander from "../assets/how-to-enjoy-yourself-and-have-fun-while-traveling-alone-main-image-hd-op.jpg";
import Place from "./Place";
import Customer from "../components/Customer";

const Main = () => {
  return (
    <div className="">
      <div className="flex justify-center flex-wrap gap-6 mx-2 pt-20 pb-28 bg-gray-100">
        <div className="w-96">
          <img src={hiking} width={400} alt="hiking"></img>
          <hr className="h-px my-4 bg-black border-0 dark:bg-gray-700 w-12" />
          <h2 className="text-2xl font-bold">
            Trekking Through the Wilderness: A Hiker's Paradise
          </h2>
          <p>
            Welcome, fellow adventurers, to a journey through rugged terrain,
            towering peaks, and untamed wilderness. Lace up your boots, pack
            your essentials, and join me as we embark on a hiking expedition
            like no other.
          </p>
        </div>
        <div className="w-96">
          <img src={mountain} width={400} alt="mountain"></img>
          <hr className="h-px my-4 bg-black border-0 dark:bg-gray-700 w-12" />
          <h2 className="text-2xl font-bold">
            Mountain Majesty: A Journey to the Peaks
          </h2>
          <p>
            Welcome to the realm where the air is crisp, the vistas are vast,
            and the spirit of adventure beckons. Join me on an expedition to the
            towering peaks, where every step is a testament to our strength and
            resilience in the face of nature's grandeur.
          </p>
        </div>
        <div className="w-96">
          <img src={wander} width={400} alt="wander"></img>
          <hr className="h-px my-4 bg-black border-0 dark:bg-gray-700 w-12" />
          <h2 className="text-2xl font-bold">
            Solo Expedition: Embracing the Journey Alone
          </h2>
          <p>
            Embarking on a solo adventure is more than just a journey—it's a
            profound exploration of self-discovery and personal growth.
            Traveling alone opens doors to experiences and encounters that are
            uniquely yours, unfettered by the expectations.
          </p>
        </div>
      </div>
      <Place />
      <Customer />
    </div>
  );
};

export default Main;
