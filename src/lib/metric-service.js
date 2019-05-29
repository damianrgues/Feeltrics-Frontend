import axios from "axios";

class Metric {
  constructor(props) {
    this.metric = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
  }

  getTodaysMetrics(userId) {
    return this.metric.get(`/metrics/today/${userId}`).then(response => response.data);
  }

  getAll(id) {
    return this.metric.get(`/metrics/${id}`).then(response => response.data);
  }

  getMetricsByName(metricName) {
    return this.metric.get(`/metrics/name/${metricName}`)
  }

  postNewMetrics(metricName) {
    return this.metric.post(`/metrics/new`, metricName)
  }

  deleteMetricById (metricId){
    return this.metric.delete(`/metrics/delete/${metricId}`).then(response => response.data);
  }

  updateMetricById (metricId, updatedMetric){
    return this.metric.put(`/metrics/${metricId}`, updatedMetric).then(response => response.data);
  }


}

const metric = new Metric();

export default metric;
