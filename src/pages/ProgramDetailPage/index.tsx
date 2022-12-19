import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useRecoilState, useRecoilValue } from 'recoil';
import { useShare } from '../../utils/atom';

import LayoutDetailPage from '../../layouts/LayoutDetailPage';
import DetailClass from './components/DetailClass';
import DetailCoaching from './components/DetailCoaching';

const ProgramDetailPage = () => {
  const { coachingid, classid } = useParams();
  const [share, setShare] = useRecoilState(useShare);

  useEffect(() => {
    setShare(true);
  }, []);

  return (
    <LayoutDetailPage>
      {coachingid && <DetailCoaching />}
      {classid && <DetailClass />}
    </LayoutDetailPage>
  );
};

export default ProgramDetailPage;
