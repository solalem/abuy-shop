import http from "../../../Utility/http";

class ApiService {
  getAll() {
    return http.get("/carts/get-carts");
  }

  get(id) {
    return http.get(`/carts/get-cart/${id}`);
  }

  create(data) {
    return http.post("/carts/create-cart", data);
  }

  update(id, data) {
    return http.post(`/carts/update-cart`, data);
  }

  delete(id) {
    return http.delete(`/carts/archive-cart/${id}`);
  }


  getByBuyerId(id) {
    return http.get(`/carts/get-carts-by-buyer-id?id=${id}`);
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
