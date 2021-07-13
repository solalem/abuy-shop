import http from "../../../Utility/http";

class ApiService {
  getAll() {
    return http.get("/items");
  }

  get(id) {
    return http.get(`/items/${id}`);
  }

  create(data) {
    return http.post("/items", data);
  }

  update(id, data) {
    return http.post(`/items/${id}`, data);
  }

  delete(id) {
    return http.delete(`/items/${id}`);
  }


  getBySellerId(id) {
    return http.get(`/get-items-by-seller-id?id=${id}`);
  }

  addItemProperty(data) {
    return http.post("/items/add-item-property", data);
  }  
  updateItemProperty(data) {
    return http.post("/items/update-item-property", data);
  }
  removeItemProperty(data) {
    return http.post("/items/remove-item-property", data);
  }

}

export default new ApiService();
