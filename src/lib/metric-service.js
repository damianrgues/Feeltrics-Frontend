import axios from "axios";

class Metric {
  constructor(props) {
    this.metric = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true
    });
  }

  getAll(id) {
    return this.metric.get(`/metrics/${id}`).then(response => response.data);
  }
}

const metric = new Metric();

export default metric;
