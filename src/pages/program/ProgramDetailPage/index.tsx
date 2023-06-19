import { Suspense, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import LoadingSpinner from "../../../components/common/LoadingSpinner";
import { visibleShareState } from "../../../store/common";
import ClassDetailPage from "../ClassDetailPage";
import CoachingDetailPage from "../CoachingDetailPage";

const ProgramDetailPage = () => {
  const { coachingid, classid } = useParams();
  const setShare = useSetRecoilState(visibleShareState);

  useEffect(() => {
    setShare(true);
  }, []);

  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        {coachingid && <CoachingDetailPage id={coachingid} />}
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        {classid && <ClassDetailPage id={classid} />}
      </Suspense>
    </>
  );
};

export default ProgramDetailPage;
