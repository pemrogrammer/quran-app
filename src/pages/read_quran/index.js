import { useEffect, useState } from "react";
import LeftSection from "../../components/read_quran/LeftSection";
import RightSection from "../../components/read_quran/RightSection";
import { QuranApi } from "../../services/quran_api";
import Loading from "../../components/Loading";

function ReadQuran() {
  const [listSurah, setListSurah] = useState([]);
  const [detailSurah, setDetailSurah] = useState({});
  const [loading, setLoading] = useState(true);
  const [loadingDetail, setLoadingDetail] = useState(false);

  useEffect(() => {
    getSurah();
  }, []);

  async function getSurah() {
    await QuranApi.getSurah().then((surah) => {
      setListSurah(surah);
      setLoading(false);
    });
  }

  async function getDetailSurah(nomor) {
    setLoadingDetail(true);
    setDetailSurah({});

    await QuranApi.getDetailSurah(nomor).then((detailSurah) => {
      setDetailSurah(detailSurah);
      setLoadingDetail(false);
    });
  }

  return (
    <div className="flex w-full h-screen">
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* Bagian Kiri */}
          <LeftSection
            listSurah={listSurah ?? []}
            getDetailSurah={getDetailSurah}
          />

          {/* Bagian Kanan */}
          <RightSection
            detailSurah={detailSurah ?? []}
            loadingDetail={loadingDetail}
          />
        </>
      )}
    </div>
  );
}

export default ReadQuran;
