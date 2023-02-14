import { flutterInAppWebViewPlatformReady } from "../index";
import * as Sentry from "@sentry/react";
import { CHILD_ID_FIELD, USER_INFO } from "../constant/localStorage";

export const NativeFunction = (funcName: String, value: any) => {
  const childId = window.localStorage.getItem(CHILD_ID_FIELD);
  const userInfo = window.localStorage.getItem(USER_INFO) || "";

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
      Sentry.configureScope(function (scope) {
        scope.setUser({
          email: userInfo,
          "child-id": childId,
        });
      });
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
