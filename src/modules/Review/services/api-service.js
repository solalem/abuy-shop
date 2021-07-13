import http from "../../../Utility/http";

class ApiService {
  getAll() {
    return http.get("/reviews");
  }

  get(id) {
    return http.get(`/reviews/${id}`);
  }

  create(data) {
    return http.post("/reviews", data);
  }

  update(id, data) {
    return http.post(`/reviews/${id}`, data);
  }

  delete(id) {
    return http.delete(`/reviews/${id}`);
  }


  getByReviewerId(id) {
    return http.get(`/get-reviews-by-reviewer-id?id=${id}`);
  }

  addComment(data) {
    return http.post("/reviews/add-comment", data);
  }  
  updateComment(data) {
    return http.post("/reviews/update-comment", data);
  }
  removeComment(data) {
    return http.post("/reviews/remove-comment", data);
  }

}

export default new ApiService();
