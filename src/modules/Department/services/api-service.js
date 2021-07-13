import http from "../../../Utility/http";

class ApiService {
  getAll() {
    return http.get("/departments");
  }

  get(id) {
    return http.get(`/departments/${id}`);
  }

  create(data) {
    return http.post("/departments", data);
  }

  update(id, data) {
    return http.post(`/departments/${id}`, data);
  }

  delete(id) {
    return http.delete(`/departments/${id}`);
  }


}

export default new ApiService();
