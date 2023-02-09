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
    if (
      navigator.userAgent.match(
        /Mobile|iP(hone|od)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/,
      )
    ) {
      Sentry.withScope(scope => {
        scope.setTag("type", "flutter.callHandler");
        scope.setLevel("error");
        scope.setFingerprint([funcName, value]);

        Sentry.captureException("flutter callHandler Error");
      });
    }
    console.error("flutterInAppWebViewPlatformReady not Ready!!");
  }
};
