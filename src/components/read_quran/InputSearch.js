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

export default InputSearch;
