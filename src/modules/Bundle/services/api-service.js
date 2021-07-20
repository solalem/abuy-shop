import http from "../../../Utility/http";

class ApiService {
  getAll() {
    return http.get("/bundles/get-bundles");
  }

  get(id) {
    return http.get(`/bundles/get-bundle/${id}`);
  }

  create(data) {
    return http.post("/bundles/create-bundle", data);
  }

  update(id, data) {
    return http.post(`/bundles/update-bundle`, data);
  }

  delete(id) {
    return http.delete(`/bundles/archive-bundle/${id}`);
  }


  getBySellerId(id) {
    return http.get(`/bundles/get-bundles-by-seller-id?id=${id}`);
  }

  addBundleItem(data) {
    return http.post("/bundles/add-bundle-item", data);
  }  
  updateBundleItem(data) {
    return http.post("/bundles/update-bundle-item", data);
  }
  removeBundleItem(data) {
    return http.post("/bundles/remove-bundle-item", data);
  }

}

export default new ApiService();
