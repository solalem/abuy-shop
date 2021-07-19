import http from "../../../Utility/http";

class ApiService {
  getAll() {
    return http.get("/stores/get-stores");
  }

  get(id) {
    return http.get(`/stores/get-store/${id}`);
  }

  create(data) {
    return http.post("/stores/create-store", data);
  }

  update(id, data) {
    return http.post(`/stores/update-store/${id}`, data);
  }

  delete(id) {
    return http.delete(`/stores/archive-store/${id}`);
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
