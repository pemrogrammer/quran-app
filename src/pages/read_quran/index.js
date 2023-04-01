import { useEffect, useState } from "react";
import LeftSection from "../../components/read_quran/LeftSection";
import RightSection from "../../components/read_quran/RightSection";
import { QuranApi } from "../../services/quran_api";

function ReadQuran() {
  const [listSurah, setListSurah] = useState([]);
  const [detailSurah, setDetailSurah] = useState({});

  useEffect(() => {
    getSurah();
  }, []);

  async function getSurah() {
    const surah = await QuranApi.getSurah();
    setListSurah(surah);
  }

  async function getDetailSurah(nomor) {
    const detailSurah = await QuranApi.getDetailSurah(nomor);
    setDetailSurah(detailSurah);
  }

  return (
    <div className="bg-slate-500 flex w-full h-screen">
      {/* Bagian Kiri */}
      <LeftSection listSurah={listSurah} getDetailSurah={getDetailSurah} />

      {/* Bagian Kanan */}
      <RightSection detailSurah={detailSurah} />
    </div>
  );
}

export default ReadQuran;
