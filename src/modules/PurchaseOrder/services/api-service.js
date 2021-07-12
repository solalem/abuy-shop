import http from "../../../Utility/http";

class ApiService {
  getAll() {
    return http.get("/purchase-orders");
  }

  get(id) {
    return http.get(`/purchase-orders/${id}`);
  }

  create(data) {
    return http.post("/purchase-orders", data);
  }

  update(id, data) {
    return http.post(`/purchase-orders/${id}`, data);
  }

  delete(id) {
    return http.delete(`/purchase-orders/${id}`);
  }

  findByTitle(title) {
    return http.get(`/purchase-orders?title=${title}`);
  }

  addOrderLine(data) {
    return http.post("/purchase-orders/add-order-line", data);
  }  
  updateOrderLine(data) {
    return http.post("/purchase-orders/update-order-line", data);
  }
  removeOrderLine(data) {
    return http.post("/purchase-orders/remove-order-line", data);
  }

}

export default new ApiService();
