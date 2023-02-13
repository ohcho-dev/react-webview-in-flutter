import { flutterInAppWebViewPlatformReady } from "../index";
import * as Sentry from "@sentry/react";
import { useRecoilValue } from "recoil";
import { selectedChildInfoState } from "../recoil/atom";

export const NativeFunction = (funcName: String, value: any) => {
  const selectedChild = useRecoilValue(selectedChildInfoState);

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
      process.env.NODE_ENV === "production" &&
      navigator.userAgent.match(
        /Mobile|iP(hone|od)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/,
      )
    ) {
      if (window.navigator.userAgent.indexOf("InApp") > -1) {
        Sentry.withScope(scope => {
          scope.setTag("type", "flutter.callHandler");
          scope.setLevel("error");
          scope.setFingerprint([funcName, value]);
          scope.setUser({ "child-id": selectedChild.id });
          Sentry.captureException("flutter callHandler Error");
        });
      }
    }
    console.error("flutterInAppWebViewPlatformReady not Ready!!");
  }
};
