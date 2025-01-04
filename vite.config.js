import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js", // File chính của SDK
      name: "CongleFirstSDK", // Tên global khi sử dụng trong trình duyệt
      fileName: (format) => `congle-first-sdk.${format}.js`, // Tên file build
    },
    rollupOptions: {
      // Đánh dấu các thư viện bên ngoài để không bị bundle vào
      external: ["axios"], // Ví dụ: axios là dependency bên ngoài
      output: {
        globals: {
          axios: "axios", // Tên global khi dùng axios trong trình duyệt
        },
      },
    },
  },
});
