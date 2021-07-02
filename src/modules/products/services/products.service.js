import http from "../../../Utility/http";

class ProductsService {
  getAll() {
    return http.get("/products");
  }

  get(id) {
    return http.get(`/products/${id}`);
  }

  create(data) {
    return http.post("/products", data);
  }

  update(id, data) {
    return http.post(`/products/${id}`, data);
  }

  delete(id) {
    return http.delete(`/products/${id}`);
  }

  findByTitle(title) {
    return http.get(`/products?title=${title}`);
  }
  
  addAttribute(data) {
    return http.post("/products/add-attribute", data);
  }  
  updateAttribute(data) {
    return http.post("/products/update-attribute", data);
  }
  removeAttribute(data) {
    return http.post("/products/remove-attribute", data);
  }
}

export default new ProductsService();
