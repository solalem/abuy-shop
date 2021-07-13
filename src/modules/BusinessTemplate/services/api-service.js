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


  getByDepartmentId(id) {
    return http.get(`/get-business-templates-by-department-id?id=${id}`);
  }

}

export default new ApiService();
