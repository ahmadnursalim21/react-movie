import { useState } from "react";
import { FaStream, FaSearch, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const toogel = () => {
    setIsMenu(!isMenu);
  };
  const listLInk = [
    { title: "Home", path: "/" },
    { title: "Feature", path: "/feture" },
    { title: "Movie List", path: "/list" },
  ];
  return (
    <div>
      <nav className=" flex items-center justify-between bg-pink-500 h-12 px-5">
        <div className="flex md:mx-10 items-center">
          <div>
            <h1 className="md:text-3xl font-bold text-white">Movie Mania</h1>
          </div>
          <div className="mx-14 hidden">
            <ul>
              {listLInk.map(({ title, path }) => (
                <a key={title} href={path} className="mx-5 text-white">
                  {title}
                </a>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:mx-10 flex items-center">
          <input type="text" className="rounded-md outline-none p-1 w-40" />
          <FaSearch className="mx-4" />
          <div className="sm:hidden flex items-center">
            <button onClick={toogel} className="">
              {!isMenu ? (
                <FaStream className="text-xl  text-violet-950 hover:text-violet-950 transition-all duration-300 " />
              ) : (
                <FaTimes className="text-xl  text-violet-950 hover:text-violet-950 transition-all duration-300" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
