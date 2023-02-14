import { flutterInAppWebViewPlatformReady } from "../index";
import * as Sentry from "@sentry/react";

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
    if (process.env.NODE_ENV === "production") {
      if (window.navigator.userAgent.indexOf("InApp") > -1) {
        Sentry.withScope(scope => {
          scope.setTag("type", "flutter.callHandler");
          scope.setLevel("error");
          scope.setFingerprint([funcName, value]);
          Sentry.captureException("flutter callHandler Error");
        });
      }
    }
    console.error("flutterInAppWebViewPlatformReady not Ready!!");
  }
};
