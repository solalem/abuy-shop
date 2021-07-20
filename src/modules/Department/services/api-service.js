import http from "../../../Utility/http";

class ApiService {
  getAll() {
    return http.get("/departments/get-departments");
  }

  get(id) {
    return http.get(`/departments/get-department/${id}`);
  }

  create(data) {
    return http.post("/departments/create-department", data);
  }

  update(id, data) {
    return http.post(`/departments/update-department`, data);
  }

  delete(id) {
    return http.delete(`/departments/archive-department/${id}`);
  }


}

export default new ApiService();
