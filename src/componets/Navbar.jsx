import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#FAE3B6] py-9 fixed w-full z-10">
        <div className="container flex justify-between items-center">
          <div className="w-32">
            <img
              className="w-full cursor-pointer"
              src="/Fresh-logo.png"
              alt="Fresh-logo.png"
            />
          </div>
          <div>
            <ul className="flex gap-14">
              <li className="text-black hover:text-[#FDBB57] text-xl font-semibold">
                <Link to="/">Home</Link>
              </li>
              <li className="text-black hover:text-[#FDBB57] text-xl font-semibold">
                <Link to="/about">About</Link>
              </li>
              <li className="text-black hover:text-[#FDBB57] text-xl font-semibold">
                <Link to="#">Kids</Link>
              </li>
              <li className="text-black hover:text-[#FDBB57] text-xl font-semibold">
                <Link to="/services">Collection</Link>
              </li>
              <li className="text-black hover:text-[#FDBB57] text-xl font-semibold">
                <Link to="#">Trends</Link>
              </li>
            </ul>
          </div>
          <div className="shadow-black">
            <button className="bg-[#FAE3B6] text-[#050505] hover:bg-[#FDBB57] rounded-xl py-3 px-7 mr-3 shadow-xl text-xl font-semibold">
              Login
            </button>
            <button className="bg-[#FAE3B6] text-[#050505] hover:bg-[#FDBB57] rounded-xl py-3 px-4 shadow-xl text-xl font-semibold">
              <Link to="/singUp">Sign up</Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
