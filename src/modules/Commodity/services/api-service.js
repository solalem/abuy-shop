import http from "../../../Utility/http";

class ApiService {
  getAll() {
    return http.get("/commodities");
  }

  get(id) {
    return http.get(`/commodities/${id}`);
  }

  create(data) {
    return http.post("/commodities", data);
  }

  update(id, data) {
    return http.post(`/commodities/${id}`, data);
  }

  delete(id) {
    return http.delete(`/commodities/${id}`);
  }


  getByCategoryId(id) {
    return http.get(`/get-commodities-by-category-id?id=${id}`);
  }

  addTag(data) {
    return http.post("/commodities/add-tag", data);
  }  
  updateTag(data) {
    return http.post("/commodities/update-tag", data);
  }
  removeTag(data) {
    return http.post("/commodities/remove-tag", data);
  }

  addCommodityAttribute(data) {
    return http.post("/commodities/add-commodity-attribute", data);
  }  
  updateCommodityAttribute(data) {
    return http.post("/commodities/update-commodity-attribute", data);
  }
  removeCommodityAttribute(data) {
    return http.post("/commodities/remove-commodity-attribute", data);
  }

}

export default new ApiService();
