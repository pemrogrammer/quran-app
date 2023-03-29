import { useEffect, useState } from "react";
import LeftSection from "../../components/read_quran/LeftSection";
import RightSection from "../../components/read_quran/RightSection";
import { QuranApi } from "../../services/quran_api";

function ReadQuran() {
  const [listSurah, setListSurah] = useState([]);

  useEffect(() => {
    getSurah();
  }, []);

  async function getSurah() {
    const surah = await QuranApi.getSurah();
    setListSurah(surah);
  }

  return (
    <div className="bg-slate-500 flex w-full h-screen">
      {/* Bagian Kiri */}
      <LeftSection listSurah={listSurah} />

      {/* Bagian Kanan */}
      <RightSection />
    </div>
  );
}

export default ReadQuran;
