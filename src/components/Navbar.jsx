const Navbar = () => {
  const listLInk = [
    { title: "Home", path: "/" },
    { title: "Feature", path: "/feture" },
    { title: "Movie List", path: "/list" },
  ];
  return (
    <div>
      <nav className=" flex items-center justify-between bg-pink-500 h-12">
        <div className="flex mx-10 items-center">
          <div>
            <h1 className="text-3xl font-bold">Movie Mania</h1>
          </div>
          <div className="mx-14">
            <ul>
              {listLInk.map(({ title, path }) => (
                <a key={title} href={path} className="mx-5">
                  {title}
                </a>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-10">
          <input type="text" />
          <button className="mx-5">Search</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
