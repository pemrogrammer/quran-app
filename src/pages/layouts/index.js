import { useState } from "react";
import LeftSection from "../../components/layouts/LeftSection";
import ReadQuran from "../read_quran";
import Bookmark from "../bookmark";
import Home from "../home";
// import Setting from "../setting";

function Layouts() {
  const menus = [
    {
      name: "Home",
      page: <Home />,
    },
    {
      name: "Read Quran",
      page: <ReadQuran />,
    },
    {
      name: "Bookmarks",
      page: <Bookmark />,
    },
    // {
    //   name: "Settings",
    //   page: <Setting />,
    // },
  ];

  const [selectedPage, setSelectedPage] = useState(menus[0]);

  function onHandleClickMenu(menu) {
    setSelectedPage(menu);
  }

  return (
    <div className="h-screen w-full flex">
      {/* Left Section (menus) */}
      <LeftSection
        menus={menus}
        onHandleClickMenu={onHandleClickMenu}
        selectedPage={selectedPage}
      />

      {/* Right Section */}
      <div className="h-full w-full">{selectedPage.page}</div>
    </div>
  );
}

export default Layouts;
