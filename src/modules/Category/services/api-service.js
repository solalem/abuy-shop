import http from "../../../Utility/http";

class ApiService {
  getAll() {
    return http.get("/categories/get-categories");
  }

  get(id) {
    return http.get(`/categories/get-category/${id}`);
  }

  create(data) {
    return http.post("/categories/create-category", data);
  }

  update(id, data) {
    return http.post(`/categories/update-category/${id}`, data);
  }

  delete(id) {
    return http.delete(`/categories/archive-category/${id}`);
  }


  getByDepartmentId(id) {
    return http.get(`/categories/get-categories-by-department-id?id=${id}`);
  }

  getByParentId(id) {
    return http.get(`/categories/get-categories-by-parent-id?id=${id}`);
  }

}

export default new ApiService();
