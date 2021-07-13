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


  getByDepartmentId(id) {
    return http.get(`/get-sellers-by-department-id?id=${id}`);
  }

}

export default new ApiService();
