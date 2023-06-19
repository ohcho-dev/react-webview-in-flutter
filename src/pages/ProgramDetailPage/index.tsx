import { Suspense, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import { visibleShareState } from "../../store/common";
import DetailClass from "./components/DetailClass";
import DetailCoaching from "./components/DetailCoaching";

const ProgramDetailPage = () => {
  const { coachingid, classid } = useParams();
  const setShare = useSetRecoilState(visibleShareState);

  useEffect(() => {
    setShare(true);
  }, []);

  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        {coachingid && <DetailCoaching id={coachingid} />}
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>{classid && <DetailClass id={classid} />}</Suspense>
    </>
  );
};

export default ProgramDetailPage;
