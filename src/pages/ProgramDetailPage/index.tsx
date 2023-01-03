import React, { Suspense, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { openBottomModalState, selectedChildInfoState, useShareState } from "../../recoil/atom";

import LayoutDetailPage from "../../layouts/LayoutDetailPage";
import DetailClass from "./components/DetailClass";
import DetailCoaching from "./components/DetailCoaching";
import styled from "styled-components";
import CustomBottomModal from "../../components/common/CustomBottomModal";
import Button from "../../components/common/Button";
import { BottomBtnWrap } from "../ProgramPage/components/styled";
import LoadingSpinner from "../../components/common/LoadingSpinner";

const ProgramDetailPage = () => {
  const { coachingid, classid } = useParams();
  const setShare = useSetRecoilState(useShareState);
  const [applyBtnClick, setApplyBtnClick] = useState(false);

  const setApplyBtnState = () => {
    setApplyBtnClick(false);
  };

  useEffect(() => {
    setShare(true);
  }, []);

  return (
    <LayoutDetailPage bottomBtn>
      <Suspense fallback={<LoadingSpinner />}>
        {coachingid && <DetailCoaching id={coachingid} />}
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>{classid && <DetailClass id={classid} />}</Suspense>
    </LayoutDetailPage>
  );
};

export default ProgramDetailPage;
