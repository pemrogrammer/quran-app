import { useState } from "react";
import ListSurah from "./ListSurah";

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
      <ListSurah
        listSurah={search.length > 2 ? listSurahBaru : listSurah}
        getDetailSurah={getDetailSurah}
      />
    </div>
  );
}

export default LeftSection;

function InputSearch({ value, onChange }) {
  return (
    <div className="bg-gray-500 w-full h-24 flex justify-center items-center">
      <div className="bg-white w-full mx-4 rounded-xl py-1 px-8 relative">
        <img
          src="search.png"
          alt="search icon"
          width={20}
          height={20}
          className="absolute top-3 left-4"
        />
        <input
          className="h-full w-full py-2 ml-4 "
          placeholder="Cari Surah"
          value={value}
          onChange={(e) => onChange(e)}
        />
      </div>
    </div>
  );
}
