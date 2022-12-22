import React from 'react';
import { Link } from 'react-router-dom';
import ProgramCard from '../components/ProgramCard';
import LayoutMainPage from '../layouts/LayoutMainPage';
const CoachingPage = () => {
  const handleCardClick = () => {
    alert('click!');
  };
  return (
    <LayoutMainPage>
      <ProgramCard
        id={'1'}
        handleCardClick={handleCardClick}
        programImage="/images/program-image.svg"
        title="[모집 10명] 아빠랑 같이 하는 모래놀이 클래스"
        utilVisible={false}
        purchased
        startDate="2022-11-05"
        expiryDate="2022-12-22"
      />
    </LayoutMainPage>
  );
};

export default CoachingPage;
