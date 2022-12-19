import React, { useState } from "react";
import CustomBottomModal from "../components/common/CustomBottomModal";
import LayoutDetailPage from "../layouts/LayoutDetailPage";

const Main: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <LayoutDetailPage>
      <button onClick={() => setToggle(!toggle)}>바텀모달 열기 테스트</button>
      <div style={{ width: "100%", fontSize: "4rem" }}>detail page example</div>
      <div style={{ width: "100%", fontSize: "4rem" }}>detail page example</div>
      <div style={{ width: "100%", fontSize: "4rem" }}>detail page example</div>
      <div style={{ width: "100%", fontSize: "4rem" }}>detail page example</div>
      <div style={{ width: "100%", fontSize: "4rem" }}>detail page example</div>
      <div style={{ width: "100%", fontSize: "4rem" }}>detail page example</div>
      <div style={{ width: "100%", fontSize: "4rem" }}>detail page example</div>
      <div style={{ width: "100%", fontSize: "4rem" }}>detail page example</div>
      <div style={{ width: "100%", fontSize: "4rem" }}>detail page example</div>
      <div style={{ width: "100%", fontSize: "4rem" }}>detail page example</div>
      <div style={{ width: "100%", fontSize: "4rem" }}>detail page example</div>
      <div style={{ width: "100%", fontSize: "4rem" }}>detail page example</div>
      <div style={{ width: "100%", fontSize: "4rem" }}>detail page example</div>
      <div style={{ width: "100%", fontSize: "4rem" }}>detail page example</div>
      <div style={{ width: "100%", fontSize: "4rem" }}>detail page example</div>
      <div style={{ width: "100%", fontSize: "4rem" }}>detail page example</div>
      <div style={{ width: "100%", fontSize: "4rem" }}>detail page example</div>
      <div style={{ width: "100%", fontSize: "4rem" }}>detail page example</div>
      <div style={{ width: "100%", fontSize: "4rem" }}>detail page example</div>
      <div style={{ width: "100%", fontSize: "4rem" }}>detail page example</div>
      <div style={{ width: "100%", fontSize: "4rem" }}>detail page example</div>
      {/* <BottomFixBtnWrap></BottomFixBtnWrap> */}
      {toggle && (
        <CustomBottomModal toggle={toggle} handleToggle={handleToggle} />
      )}
    </LayoutDetailPage>
  );
};

export default Main;
