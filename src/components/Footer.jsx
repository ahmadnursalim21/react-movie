const Footer = () => {
  const listFooter = [
    { link: "Instagram", path: "/" },
    { link: "Twitter", path: "/hgh" },
    { link: "Tiktok", path: "/jhjhj" },
    { link: "WhatsApp", path: "/hjhj" },
    { link: "Youtube", path: "/jhjkhjkh" },
  ];

  return (
    <div>
      <footer className="flex bg-slate-500">
        <div>
          <div>
            <h1>This is Footer</h1>
          </div>
          <div>
            <ul>
              {listFooter.map(({ link, path }) => (
                <a key={link} href={path}>
                  {link}
                </a>
              ))}
            </ul>
            <h1>dasjhdjahsdjkahsd</h1>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
