function QuickSearchSection() {
  return (
    <div className="w-full flex flex-col justify-center items-center mb-4 space-y-2">
      <h5 className="text-white font-medium text-lg">
        Quick surah & ayat finder
      </h5>
      <input
        className="w-full h-10 rounded-lg p-2"
        type="text"
        placeholder="Find ayat..."
      />
    </div>
  );
}

export default QuickSearchSection;
