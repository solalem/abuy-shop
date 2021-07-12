import http from "../../../Utility/http";

class ApiService {
  getAll() {
    return http.get("/buyers");
  }

  get(id) {
    return http.get(`/buyers/${id}`);
  }

  create(data) {
    return http.post("/buyers", data);
  }

  update(id, data) {
    return http.post(`/buyers/${id}`, data);
  }

  delete(id) {
    return http.delete(`/buyers/${id}`);
  }

  findByTitle(title) {
    return http.get(`/buyers?title=${title}`);
  }

}

export default new ApiService();
