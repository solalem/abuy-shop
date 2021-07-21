import http from "../../../Utility/http";

class ApiService {
  getAll() {
    return http.get("/sellers/get-sellers");
  }

  get(id) {
    return http.get(`/sellers/get-seller/${id}`);
  }

  create(data) {
    return http.post("/sellers/create-seller", data);
  }

  update(id, data) {
    return http.post(`/sellers/update-seller`, data);
  }

  delete(id) {
    return http.delete(`/sellers/archive-seller/${id}`);
  }


}

export default new ApiService();
