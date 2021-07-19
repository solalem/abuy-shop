import http from "../../../Utility/http";

class ApiService {
  getAll() {
    return http.get("/departments/get-departments");
  }

  get(id) {
    return http.get(`/departments/${id}`);
  }

  create(data) {
    return http.post("/departments/create-department", data);
  }

  update(id, data) {
    return http.post(`/departments/update-department/${id}`, data);
  }

  delete(id) {
    return http.delete(`/departments/${id}`);
  }


}

export default new ApiService();
