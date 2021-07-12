import http from "../../../Utility/http";

class ApiService {
  getAll() {
    return http.get("/stores");
  }

  get(id) {
    return http.get(`/stores/${id}`);
  }

  create(data) {
    return http.post("/stores", data);
  }

  update(id, data) {
    return http.post(`/stores/${id}`, data);
  }

  delete(id) {
    return http.delete(`/stores/${id}`);
  }

  findByTitle(title) {
    return http.get(`/stores?title=${title}`);
  }

  addBussinessHour(data) {
    return http.post("/stores/add-bussiness-hour", data);
  }  
  updateBussinessHour(data) {
    return http.post("/stores/update-bussiness-hour", data);
  }
  removeBussinessHour(data) {
    return http.post("/stores/remove-bussiness-hour", data);
  }

}

export default new ApiService();
