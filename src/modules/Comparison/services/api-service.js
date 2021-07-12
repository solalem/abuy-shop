import http from "../../../Utility/http";

class ApiService {
  getAll() {
    return http.get("/comparisons");
  }

  get(id) {
    return http.get(`/comparisons/${id}`);
  }

  create(data) {
    return http.post("/comparisons", data);
  }

  update(id, data) {
    return http.post(`/comparisons/${id}`, data);
  }

  delete(id) {
    return http.delete(`/comparisons/${id}`);
  }

  findByTitle(title) {
    return http.get(`/comparisons?title=${title}`);
  }

  addComparisonItem(data) {
    return http.post("/comparisons/add-comparison-item", data);
  }  
  updateComparisonItem(data) {
    return http.post("/comparisons/update-comparison-item", data);
  }
  removeComparisonItem(data) {
    return http.post("/comparisons/remove-comparison-item", data);
  }

}

export default new ApiService();
