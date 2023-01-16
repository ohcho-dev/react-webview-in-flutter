import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import LayoutMainPage from "../../layouts/LayoutMainPage";
import { selectedChildInfoState } from "../../recoil/atom";
import ChildInfo from "./components/ChildInfo";
import RecommendActivity from "./components/RecommendActivity";
import {flutterInAppWebViewPlatformReady} from "../../index";

const Devider = styled.div`
  width: 100%;
  height: 1rem;
  background: #f6f6f6;
`;

const flutterJavaScriptHandlerName = 'routeNativeScreen';

const HomePage = () => {
  const headers = new Headers();
  const childData = useRecoilValue(selectedChildInfoState);

  const event = (value: String) => {
    if(flutterInAppWebViewPlatformReady){
      // @ts-ignore
      if (window.flutter_inappwebview.callHandler){
        console.log("@@flutter callHandler value:" + value);
        // @ts-ignore
        window.flutter_inappwebview.callHandler(flutterJavaScriptHandlerName, value);

      }else{
        console.log("@@flutter _callHandler value:" + value);
        // @ts-ignore
        window.flutter_inappwebview._callHandler(flutterJavaScriptHandlerName, value);
      }
    }else{
      console.error('flutterInAppWebViewPlatformReady not Ready!!')
    }
  }

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
        <div>
          신규방식
          <button
            onClick={() => {
              event("/coachingVideoDetail");
            }}
          >
            "/coachingVideoDetail"
          </button>
          <button
            onClick={() => {
              event("on");
            }}
          >
            "on"
          </button>
          <button
            onClick={() => {
              event("80");
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
