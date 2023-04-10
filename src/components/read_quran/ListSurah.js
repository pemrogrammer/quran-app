import ItemSurah from "./ItemSurah";

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
