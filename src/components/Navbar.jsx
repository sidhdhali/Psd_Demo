const Navbar = () => {
  return (
    <nav className="bg-white mt-2 flex justify-between lg:px-72 flex-wrap px-4">
      <ul className="flex items-center py-6 gap-10">
        <li>
          <a className="text-gray-900 rounded-lg" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="text-gray-400" href="/guides">
            Guides
          </a>
        </li>
        <li>
          <a className="text-gray-400" href="/flights">
            Flights
          </a>
        </li>
        <li>
          <a className="text-gray-400" href="/about">
            About
          </a>
        </li>
      </ul>
      <button className="contact-us">
        <a
          className="border border-gray-900 text-gray-900 px-10 py-2 rounded-lg"
          href="#newsletter"
        >
          Contact Us
        </a>
      </button>
    </nav>
  );
};

export default Navbar;
