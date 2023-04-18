import { useState } from "react"
import ListSurah from "./ListSurah";
import InputSearch from "./InputSearch";

function LeftSection({ listSurah, getDetailSurah }) {
  const [search, setSearch] = useState("");
  const [listSurahBaru, setListSurahBaru] = useState([]);

  function onChangeHandler(e) {
    e.preventDefault();
    setSearch(e.target.value);

    if (search.length > 2) {
      const listSurahTemp = listSurah.filter((surah) =>
        surah.nama_latin.toLowerCase().includes(search.toLowerCase())
      );
      setListSurahBaru(listSurahTemp);
    }
  }

  return (
    <div className="bg-white basis-1/4 flex flex-col">
      {/* TextField Cari Surah */}
      <InputSearch value={search} onChange={onChangeHandler} />

      {/* List Nama Surah */}
      {listSurah.length > 0 ? (
        <ListSurah
          listSurah={search.length > 2 ? listSurahBaru : listSurah}
          getDetailSurah={getDetailSurah}
        />
      ) : (
        <div className="h-full w-full flex justify-center items-center">
          Tidak ada koneksi.
        </div>
      )}
    </div>
  );
}

export default LeftSection;
