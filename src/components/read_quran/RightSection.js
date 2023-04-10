import { useEffect, useState } from "react";
import Loading from "../Loading";
import HeaderSection from "./HeaderSection";
import ItemAyat from "./ItemAyat";

function RightSection({ detailSurah, loadingDetail }) {
  const [onBookmark, setOnBookmark] = useState({});

  function setBookmark(value) {
    const bookmark = localStorage.getItem("bookmark");

    if (bookmark && JSON.parse(bookmark)["id"] === value.id) {
      setOnBookmark({});
      return localStorage.removeItem("bookmark");
    }

    localStorage.setItem("bookmark", JSON.stringify(value));
    setOnBookmark(value);
  }

  function isNotEmpty() {
    return Object.keys(detailSurah).length > 0;
  }

  useEffect(() => {
    const bookmark = localStorage.getItem("bookmark");
    if (bookmark) setBookmark(bookmark);
  }, []);

  return (
    <div className="basis-3/4 flex flex-col">
      {loadingDetail ? <Loading /> : <></>}
      {isNotEmpty() ? (
        <>
          <HeaderSection namaSurah={detailSurah.nama_latin} />

          {/* List Ayat */}
          <div className="h-full w-full overflow-y-auto">
            {detailSurah.ayat.map((data, index) => (
              <ItemAyat
                key={index}
                data={data}
                setBookmark={setBookmark}
                onBookmark={onBookmark}
              />
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default RightSection;
