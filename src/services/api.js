// src/services/api.js (mock mode)
const mockDelay = (ms = 400) => new Promise((res) => setTimeout(res, ms));

export default {
  get: async (url) => {
    await mockDelay();
    if (url === "/medications") {
      return {
        data: [
          {
            _id: "1",
            name: "Vitamin D",
            dosage: "50mg",
            frequency: "Once daily",
            times: ["09:00"],
          },
          {
            _id: "2",
            name: "Amoxicillin",
            dosage: "500mg",
            frequency: "Twice daily",
            times: ["09:00", "21:00"],
          },
        ],
      };
    }
    if (url === "/logs") {
      return {
        data: [
          { date: "2025-10-01", adherence: 90 },
          { date: "2025-10-02", adherence: 80 },
          { date: "2025-10-03", adherence: 95 },
        ],
      };
    }
    return { data: [] };
  },
  post: async (url, body) => {
    await mockDelay();
    console.log("MOCK POST", url, body);
    if (url.includes("/auth/login")) {
      const fakeToken = "mock.token.value";
      return { data: { token: fakeToken } };
    }
    return { data: { success: true } };
  },
  put: async (url, body) => {
    await mockDelay();
    console.log("MOCK PUT", url, body);
    return { data: { success: true } };
  },
  delete: async (url) => {
    await mockDelay();
    console.log("MOCK DELETE", url);
    return { data: { success: true } };
  },
};

