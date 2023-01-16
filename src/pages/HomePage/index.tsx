import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import LayoutMainPage from "../../layouts/LayoutMainPage";
import { selectedChildInfoState } from "../../recoil/atom";
import ChildInfo from "./components/ChildInfo";
import RecommendActivity from "./components/RecommendActivity";

const Devider = styled.div`
  width: 100%;
  height: 1rem;
  background: #f6f6f6;
`;

const HomePage = () => {
  const headers = new Headers();
  const childData = useRecoilValue(selectedChildInfoState);
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);

  const [header, setHeader] = useState("");
  useEffect(() => {
    // alert(window.navigator.userAgent);
    // alert(document.referer);
    const req = new XMLHttpRequest();
    req.open("GET", "http://localhost:3000", false);
    req.send(null);
    const reqHeaders = req.getAllResponseHeaders();
    const reqHeadersAccessToken = req.getResponseHeader("access_token");
    reqHeaders && setHeader(reqHeaders);
    reqHeadersAccessToken && Cookies.set("token", reqHeadersAccessToken);
  }, [headers]);
  useEffect(() => {
    console.log("1111");
    // window.addEventListener("flutter_inappwebview", function (event) {
    //   const value = "/coachingVideoDetail";
    //   window.flutter_inappwebview.callHandler("routeNativeScreen", value);
    // });
    // execute inside the "flutterInAppWebViewPlatformReady" event listener
    //   const offToMission = event => {
    //     console.log(window.postMessage);
    //   };

    // useEffect(() => {
    //   window.addEventListener('routeNativeScreen', offToMission);

    //   return () => {
    //     window.removeEventListener('routeNativeScreen', offToMission);
    //   };
    //   // const eventFromFlutter = event => {
    //   //   event.postMessage("${value.m_id}");
    //   // };

    //   // window.addEventListener("routeNativeScreen", eventFromFlutter);

    //   // return () => {
    //   //   window.removeEventListener("routeNativeScreen", eventFromFlutter);
    //   // };
  }, [btn1]);
  useEffect(() => {
    console.log("2222");
  }, [btn2]);
  useEffect(() => {
    console.log("3333");
  }, [btn3]);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      document.getElementById('url').addEventListener("click", function() {
        routeNativeScreen('/coachingVideoDetail');
        console.log('123')
      });
      document.getElementById('onoff').addEventListener("click", function() {
        routeNativeScreen('on');
      });
      document.getElementById('int80').addEventListener("click", function() {
        routeNativeScreen(${Number(80)});
      });
    `;
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <LayoutMainPage marginTop="-6rem">
        <ChildInfo childData={childData} />
        {header}
        <div>
          신규방식
          <button
            onClick={() => {
              setBtn1(true);
            }}
          >
            "/coachingVideoDetail"
          </button>
          <button
            onClick={() => {
              setBtn2(true);
            }}
          >
            "on"
          </button>
          <button
            onClick={() => {
              setBtn3(true);
            }}
          >
            80
          </button>
        </div>
        <div>
          시선따라방식
          <button id="url">"/coachingVideoDetail"</button>
          <button id="onoff">"on"</button>
          <button id="int80">80</button>
        </div>
        <Devider />
        <RecommendActivity />
      </LayoutMainPage>
    </>
  );
};

export default HomePage;
