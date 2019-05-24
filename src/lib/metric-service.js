import axios from "axios";

class Metric {
  constructor() {
    this.metric = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true
    });
  }

  myMetrics() {
    return this.metric.get("/metrics/").then(response => response.data);
  }
}

const metric = new Metric();

export default metric;
