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

  findByTitle(title) {
    return http.get(`/categories?title=${title}`);
  }

}

export default new ApiService();
