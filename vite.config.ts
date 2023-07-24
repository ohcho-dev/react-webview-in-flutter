import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import envCompatible from "vite-plugin-env-compatible";
import { sentryVitePlugin } from "@sentry/vite-plugin";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    envPrefix: "REACT_APP_", // 환경변수 prefix 변경
    plugins: [
      react(),
      viteTsconfigPaths(),
      envCompatible(),
      sentryVitePlugin({
        authToken: env.REACT_SENTRY_AUTH_TOKEN,
        project: "eltern-frontend",
        sourcemaps: {
          ignore: ["node_modules"],
        },
      }),
    ],
    server: {
      open: true, // 서버 시작 시 브라우저 앱 자동으로 열기
      port: 8000, // 기본 포트
    },
    build: {
      sourcemap: true, // Source map generation must be turned on
    },
  });
};
