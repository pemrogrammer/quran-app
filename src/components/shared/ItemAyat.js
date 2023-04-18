function ItemAyat({ data, setBookmark, onBookmark, showIconBookmark = false }) {
  return (
    <div className="w-full px-10 py-6 border-b border-gray-400 mb-12 relative">
      <div className="w-full h-full flex justify-end mb-2">
        <h3 className="text-3xl font-normal">{data.ar}</h3>
      </div>
      <div className="w-full h-full flex justify-end mb-6">
        <span className="text-base font-light">{data.tr}</span>
      </div>
      <span className="text-base font-light">
        {data.nomor}. {data.idn}
      </span>

      {showIconBookmark ? (
        <IconBookmark
          data={data}
          onBookmark={onBookmark}
          setBookmark={setBookmark}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default ItemAyat;

function IconBookmark({ data, onBookmark, setBookmark }) {
  return (
    <div
      className="bg-white absolute bottom-[-15px] left-4"
      onClick={() => setBookmark(data)}
    >
      <img
        src={
          onBookmark.id === data.id
            ? "bookmark_selected.png"
            : "bookmark_unselected.png"
        }
        alt={
          onBookmark.id === data.id
            ? "bookmark_selected.png"
            : "bookmark_unselected.png"
        }
        height={30}
        width={30}
      />
    </div>
  );
}
