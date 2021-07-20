import http from "../../../Utility/http";

class ApiService {
  getAll() {
    return http.get("/business-templates/get-business-templates");
  }

  get(id) {
    return http.get(`/business-templates/get-business-template/${id}`);
  }

  create(data) {
    return http.post("/business-templates/create-business-template", data);
  }

  update(id, data) {
    return http.post(`/business-templates/update-business-template`, data);
  }

  delete(id) {
    return http.delete(`/business-templates/archive-business-template/${id}`);
  }


  getByDepartmentId(id) {
    return http.get(`/business-templates/get-business-templates-by-department-id?id=${id}`);
  }

}

export default new ApiService();
