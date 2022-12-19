import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LayoutMainPage from '../layouts/LayoutMainPage';
const ProgramPage = () => {
  return (
    <LayoutMainPage>
      <div style={{ fontSize: '3rem', background: '#f00' }}>
        ProgramPage!
        <br />
        <Link to="/program/coaching/1">코칭상품버튼</Link>
        <br />
        <Link to="/program/class/1">클래스버튼</Link>
      </div>
    </LayoutMainPage>
  );
};

export default ProgramPage;
