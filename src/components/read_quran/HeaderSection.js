function HeaderSection({ namaSurah }) {
  return (
    <div className="h-[96px] w-full flex justify-between items-center px-8 border-b border-gray-200">
      <h3 className="text-3xl font-bold text-teal-700">{namaSurah}</h3>
      <img src="volume.png" alt="volume.png" height={30} width={30} />
    </div>
  );
}

export default HeaderSection;
