import http from "../../../Utility/http";

class ApiService {
  getAll() {
    return http.get("/purchase-orders/get-purchase-orders");
  }

  get(id) {
    return http.get(`/purchase-orders/get-purchase-order/${id}`);
  }

  create(data) {
    return http.post("/purchase-orders/create-purchase-order", data);
  }

  update(id, data) {
    return http.post(`/purchase-orders/update-purchase-order/${id}`, data);
  }

  delete(id) {
    return http.delete(`/purchase-orders/archive-purchase-order/${id}`);
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
