import { flutterInAppWebViewPlatformReady } from "../index";

export const NativeFunction = (funcName: String, value: any) => {
  if (flutterInAppWebViewPlatformReady) {
    // @ts-ignore
    if (window.flutter_inappwebview.callHandler) {
      console.log("@@flutter callHandler value:" + value);
      // @ts-ignore
      window.flutter_inappwebview.callHandler(funcName, value);
    } else {
      console.log("@@flutter _callHandler value:" + value);
      // @ts-ignore
      window.flutter_inappwebview._callHandler(funcName, value);
    }
  } else {
    console.error("flutterInAppWebViewPlatformReady not Ready!!");
  }
};
