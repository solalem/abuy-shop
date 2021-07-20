import http from "../../../Utility/http";

class ApiService {
  getAll() {
    return http.get("/listings/get-listings");
  }

  get(id) {
    return http.get(`/listings/get-listing/${id}`);
  }

  create(data) {
    return http.post("/listings/create-listing", data);
  }

  update(id, data) {
    return http.post(`/listings/update-listing`, data);
  }

  delete(id) {
    return http.delete(`/listings/archive-listing/${id}`);
  }


  addVariant(data) {
    return http.post("/listings/add-variant", data);
  }  
  updateVariant(data) {
    return http.post("/listings/update-variant", data);
  }
  removeVariant(data) {
    return http.post("/listings/remove-variant", data);
  }

  addImage(data) {
    return http.post("/listings/add-image", data);
  }  
  updateImage(data) {
    return http.post("/listings/update-image", data);
  }
  removeImage(data) {
    return http.post("/listings/remove-image", data);
  }

  addCoupon(data) {
    return http.post("/listings/add-coupon", data);
  }  
  updateCoupon(data) {
    return http.post("/listings/update-coupon", data);
  }
  removeCoupon(data) {
    return http.post("/listings/remove-coupon", data);
  }

  addDiscount(data) {
    return http.post("/listings/add-discount", data);
  }  
  updateDiscount(data) {
    return http.post("/listings/update-discount", data);
  }
  removeDiscount(data) {
    return http.post("/listings/remove-discount", data);
  }

  addAffiliate(data) {
    return http.post("/listings/add-affiliate", data);
  }  
  updateAffiliate(data) {
    return http.post("/listings/update-affiliate", data);
  }
  removeAffiliate(data) {
    return http.post("/listings/remove-affiliate", data);
  }

}

export default new ApiService();
