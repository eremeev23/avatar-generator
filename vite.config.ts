import { defineConfig, loadEnv } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import analyze from "rollup-plugin-analyzer";
import Components from "unplugin-vue-components/vite";

//@ts-ignore
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      vue(),
      Components({
        dirs: ["src/components"],
        dts: path.resolve(__dirname, "./src/declarations/components.d.ts")
      })
    ],
    root: path.resolve(__dirname, "."),
    resolve: {
      extensions: [".ts", ".js", ".vue", ".scss"],
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@styles": path.resolve(__dirname, "./src/assets/styles"),
        "@stores": path.resolve(__dirname, "./src/stores"),
      }
    },
    build: {
      outDir: "dist",
      rollupOptions: {
        plugins: [analyze()]
      }
    },
    server: {
      host: "localhost",
      port: 3001
    }
  });
};
