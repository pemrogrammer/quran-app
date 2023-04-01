function RightSection({ detailSurah }) {
  function isNotEmpty() {
    return Object.keys(detailSurah).length > 0;
  }

  return (
    <div className="bg-white basis-3/4 flex flex-col">
      {isNotEmpty() ? (
        <>
          <HeaderSection namaSurah={detailSurah.nama_latin} />

          {/* List Ayat */}
          <div className="h-full w-full overflow-y-auto">
            {detailSurah.ayat.map((data, index) => (
              <ItemAyat
                key={index}
                ayat={data.ar}
                latin={data.tr}
                nomorAyat={data.nomor}
                artiAyat={data.idn}
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

function HeaderSection({ namaSurah }) {
  return (
    <div className="h-[96px] w-full flex justify-between items-center px-8 border-b border-gray-200">
      <h3 className="text-3xl font-bold text-teal-700">{namaSurah}</h3>
      <img src="volume.png" alt="volume.png" height={30} width={30} />
    </div>
  );
}

function ItemAyat({ ayat, latin, nomorAyat, artiAyat }) {
  return (
    <div className="w-full px-6 py-4 border-b border-gray-200">
      <div className="w-full h-full flex justify-end mb-2">
        <h3 className="text-3xl font-normal">{ayat}</h3>
      </div>
      <div className="w-full h-full flex justify-end mb-6">
        <span className="text-base font-light">{latin}</span>
      </div>
      <span className="text-base font-light">
        {nomorAyat}. {artiAyat}
      </span>
    </div>
  );
}
