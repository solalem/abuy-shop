import http from "../../../Utility/http";

class ApiService {
  getAll() {
    return http.get("/categories");
  }

  get(id) {
    return http.get(`/categories/${id}`);
  }

  create(data) {
    return http.post("/categories", data);
  }

  update(id, data) {
    return http.post(`/categories/${id}`, data);
  }

  delete(id) {
    return http.delete(`/categories/${id}`);
  }


  getByDepartmentId(id) {
    return http.get(`/get-categories-by-department-id?id=${id}`);
  }

  getByParentId(id) {
    return http.get(`/get-categories-by-parent-id?id=${id}`);
  }

}

export default new ApiService();
