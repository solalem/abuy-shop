import http from "../../../Utility/http";

class ApiService {
  getAll() {
    return http.get("/reviews/get-reviews");
  }

  get(id) {
    return http.get(`/reviews/get-review/${id}`);
  }

  create(data) {
    return http.post("/reviews/create-review", data);
  }

  update(id, data) {
    return http.post(`/reviews/update-review/${id}`, data);
  }

  delete(id) {
    return http.delete(`/reviews/archive-review/${id}`);
  }


  getByReviewerId(id) {
    return http.get(`/reviews/get-reviews-by-reviewer-id?id=${id}`);
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
