import { useEffect, useState } from "react";
import Loading from "../Loading";
import HeaderSection from "./HeaderSection";
import ItemAyat from "../shared/ItemAyat";
import { Utils } from "../../utils";

function RightSection({ detailSurah, loadingDetail }) {
  const [onBookmark, setOnBookmark] = useState({});

  function setBookmark(value) {
    const bookmark = Utils.getBookmark();

    if (bookmark && bookmark["id"] === value.id) {
      setOnBookmark({});
      return Utils.removeBookmark();
    }

    Utils.setBookmark({ ...value, namaSurah: detailSurah.nama_latin });
    setOnBookmark({ ...value, namaSurah: detailSurah.nama_latin });
  }

  function isNotEmpty() {
    return Object.keys(detailSurah).length > 0;
  }

  useEffect(() => {
    const bookmark = Utils.getBookmark();
    if (bookmark) setOnBookmark(bookmark);
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
                showIconBookmark={true}
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
