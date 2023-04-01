function ListSurah({ listSurah, getDetailSurah }) {
  return (
    <div className="h-full w-full p-4 overflow-y-auto">
      {listSurah.map((surah, index) => (
        <div onClick={() => getDetailSurah(surah.nomor)} key={index}>
          <ItemSurah
            nomor={surah.nomor}
            namaSurah={surah.nama_latin}
            artiSurah={surah.arti}
            tempatTurunSurah={surah.tempat_turun}
            jumlahAyat={surah.jumlah_ayat}
            getDetailSurah
          />
        </div>
      ))}
    </div>
  );
}

export default ListSurah;

function ItemSurah({
  nomor,
  namaSurah,
  artiSurah,
  tempatTurunSurah,
  jumlahAyat,
}) {
  return (
    <div className="h-24 w-full border-b-2 border-teal-700 flex mb-4">
      <div className="basis-12 flex justify-end mr-4">
        <h3 className="text-2xl font-bold text-teal-700">{nomor}</h3>
      </div>
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold text-teal-700">{namaSurah}</h3>
        <h5 className="text-base font-bold text-gray-500">{artiSurah}</h5>
        <span className="text-base font-light text-gray-500">
          {tempatTurunSurah}, {jumlahAyat} ayat
        </span>
      </div>
    </div>
  );
}
