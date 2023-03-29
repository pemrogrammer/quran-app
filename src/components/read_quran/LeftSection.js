import ListSurah from "./ListSurah";

function LeftSection({listSurah}) {
  return (
    <div className="bg-white basis-1/4 flex flex-col">
      {/* TextField Cari Surah */}
      <InputSearch />

      {/* List Nama Surah */}
      <ListSurah listSurah={listSurah} />
    </div>
  );
}

export default LeftSection;

function InputSearch() {
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
        <input className="h-full w-full py-2 ml-4 " placeholder="Cari Surah" />
      </div>
    </div>
  );
}
