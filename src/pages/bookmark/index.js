import { useEffect, useState } from "react";
import ItemAyat from "../../components/shared/ItemAyat";
import { Utils } from "../../utils";

function Bookmark() {
  const [onBookmark, setOnbookmark] = useState({});

  useEffect(() => {
    const bookmark = Utils.getBookmark();
    if (bookmark) setOnbookmark(bookmark);
  }, []);

  function removeBookmark() {
    setOnbookmark({});
    Utils.removeBookmark();
  }

  return Object.keys(onBookmark).length > 0 ? (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full flex justify-center text-teal-700 font-bold text-2xl border-b-2 border-gray-400">
        {onBookmark.namaSurah}
      </div>
      <div className="w-full relative">
        <ItemAyat
          data={onBookmark}
          onBookmark={onBookmark}
          setBookmark={() => {}}
        />
        <div
          className="flex justify-end absolute bottom-8 right-2 bg-white hover:cursor-pointer"
          onClick={() => removeBookmark()}
        >
          <img src="remove.png" alt="remove.png" width={40} height={40} />
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full h-full flex justify-center items-center text-2xl">
      Bookmark kosong.
    </div>
  );
}

export default Bookmark;
