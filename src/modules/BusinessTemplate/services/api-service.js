import http from "../../../Utility/http";

class ApiService {
  getAll() {
    return http.get("/business-templates");
  }

  get(id) {
    return http.get(`/business-templates/${id}`);
  }

  create(data) {
    return http.post("/business-templates", data);
  }

  update(id, data) {
    return http.post(`/business-templates/${id}`, data);
  }

  delete(id) {
    return http.delete(`/business-templates/${id}`);
  }

  findByTitle(title) {
    return http.get(`/business-templates?title=${title}`);
  }

}

export default new ApiService();
