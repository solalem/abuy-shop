import http from "../../../Utility/http";

class ApiService {
  getAll() {
    return http.get("/comparisons/get-comparisons");
  }

  get(id) {
    return http.get(`/comparisons/get-comparison/${id}`);
  }

  create(data) {
    return http.post("/comparisons/create-comparison", data);
  }

  update(id, data) {
    return http.post(`/comparisons/update-comparison/${id}`, data);
  }

  delete(id) {
    return http.delete(`/comparisons/archive-comparison/${id}`);
  }


  getByBuyerId(id) {
    return http.get(`/comparisons/get-comparisons-by-buyer-id?id=${id}`);
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
