import http from "../../../Utility/http";

class ApiService {
  getAll() {
    return http.get("/carts");
  }

  get(id) {
    return http.get(`/carts/${id}`);
  }

  create(data) {
    return http.post("/carts", data);
  }

  update(id, data) {
    return http.post(`/carts/${id}`, data);
  }

  delete(id) {
    return http.delete(`/carts/${id}`);
  }

  findByTitle(title) {
    return http.get(`/carts?title=${title}`);
  }

  addCartLine(data) {
    return http.post("/carts/add-cart-line", data);
  }  
  updateCartLine(data) {
    return http.post("/carts/update-cart-line", data);
  }
  removeCartLine(data) {
    return http.post("/carts/remove-cart-line", data);
  }

}

export default new ApiService();
