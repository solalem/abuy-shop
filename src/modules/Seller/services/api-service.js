import http from "../../../Utility/http";

class ApiService {
  getAll() {
    return http.get("/sellers");
  }

  get(id) {
    return http.get(`/sellers/${id}`);
  }

  create(data) {
    return http.post("/sellers", data);
  }

  update(id, data) {
    return http.post(`/sellers/${id}`, data);
  }

  delete(id) {
    return http.delete(`/sellers/${id}`);
  }

  findByTitle(title) {
    return http.get(`/sellers?title=${title}`);
  }

}

export default new ApiService();
