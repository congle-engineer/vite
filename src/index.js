import axios from "axios";

class CongleFirstSDK {
  constructor(config) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl || "https://api.example.com";
  }

  async getData(endpoint) {
    const url = `${this.baseUrl}/${endpoint}`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    });
    return response.data;
  }
}

// Hàm để tạo instance của SDK
export const createSDK = (config) => new CongleFirstSDK(config);
