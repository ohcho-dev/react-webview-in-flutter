import { useSetRecoilState } from "recoil";
import { flutterInAppWebViewPlatformReady } from "../index";
import { appVersionState } from "../recoil/atom";

export const NativeFunction = (funcName: String, value: any) => {
  const setRecoilState = useSetRecoilState(appVersionState);
  if (flutterInAppWebViewPlatformReady) {
    // @ts-ignore
    if (window.flutter_inappwebview.callHandler) {
      console.log("@@flutter callHandler value:" + value);
      // @ts-ignore
      window.flutter_inappwebview.callHandler(funcName, value).then(res => {
        return value === "/appVersion" && setRecoilState(res);
      });
    } else {
      console.log("@@flutter _callHandler value:" + value);
      // @ts-ignore
      window.flutter_inappwebview._callHandler(funcName, value).then(res => {
        return value === "/appVersion" && setRecoilState(res);
      });
    }
  } else {
    console.error("flutterInAppWebViewPlatformReady not Ready!!");
  }
};
