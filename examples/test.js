const { createSDK } = require("congle-first-sdk"); // Import SDK từ file build

const sdk = createSDK({
  apiKey: "your-api-key",
  baseUrl: "https://jsonplaceholder.typicode.com", // Dùng API giả lập để test
});

(async () => {
  try {
    const data = await sdk.getData("posts"); // Lấy danh sách bài viết
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
})();
