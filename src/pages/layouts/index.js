import { useEffect, useState } from "react";
import LeftSection from "../../components/layouts/LeftSection";
import ReadQuran from "../read_quran";
import Bookmark from "../bookmark";
import Setting from "../setting";

function Layouts() {
  const menus = [
    {
        name: "Home",
        page: <Home />
    },
    {
      name: "Read Quran",
      page: <ReadQuran />,
    },
    {
      name: "Bookmarks",
      page: <Bookmark />,
    },
    {
      name: "Settings",
      page: <Setting />,
    },
  ];

  const [selectedPage, setSelectedPage] = useState({});

  useEffect(() => {
    setSelectedPage(menus[0]);
  }, []);

  function onHandleClickMenu(menu) {
    setSelectedPage(menu);
  }

  return (
    <div className="h-screen w-full flex">
      {/* Left Section (menus) */}
      <LeftSection menus={menus} onHandleClickMenu={onHandleClickMenu} />

      {/* Right Section */}
      <div className="h-full w-full">{selectedPage.page}</div>
    </div>
  );
}

export default Layouts;

function Home() {
    return <div className="w-full h-full flex flex-col justify-center items-center space-y-4">
        <img src="logo.png" alt="logo.png" width={80} height={80} />
        <h3 className="text-4xl font-normal">Selemat Datang!</h3>
    </div>
}