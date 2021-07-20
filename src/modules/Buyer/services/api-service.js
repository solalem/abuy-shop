import http from "../../../Utility/http";

class ApiService {
  getAll() {
    return http.get("/buyers/get-buyers");
  }

  get(id) {
    return http.get(`/buyers/get-buyer/${id}`);
  }

  create(data) {
    return http.post("/buyers/create-buyer", data);
  }

  update(id, data) {
    return http.post(`/buyers/update-buyer`, data);
  }

  delete(id) {
    return http.delete(`/buyers/archive-buyer/${id}`);
  }


  addMamila(data) {
    return http.post("/buyers/add-mamila", data);
  }  
  updateMamila(data) {
    return http.post("/buyers/update-mamila", data);
  }
  removeMamila(data) {
    return http.post("/buyers/remove-mamila", data);
  }

  addFavouriteItem(data) {
    return http.post("/buyers/add-favourite-item", data);
  }  
  updateFavouriteItem(data) {
    return http.post("/buyers/update-favourite-item", data);
  }
  removeFavouriteItem(data) {
    return http.post("/buyers/remove-favourite-item", data);
  }

  addRecommendation(data) {
    return http.post("/buyers/add-recommendation", data);
  }  
  updateRecommendation(data) {
    return http.post("/buyers/update-recommendation", data);
  }
  removeRecommendation(data) {
    return http.post("/buyers/remove-recommendation", data);
  }

}

export default new ApiService();
