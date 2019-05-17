import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 789c84e916caf001c5d6f6f4b2b6baec79a8984920dda810835f9fdb3a940ddc"
  }
});
