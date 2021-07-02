let data = {
  cart: [],
  wishlist: [],
  vat: 16, //vat in percentage
  cartTotal: 0,
  orderSuccess: false,
  promoCode: [
    {
      code: "TENPERCENT",
      percentage: 10,
    },
    {
      code: "FIVEPERCENT",
      percentage: 5,
    },
  ],
  usedPromoCode: null,
  deliveryOptions: [
    {
      id: 1,
      name: "standard",
      duration: "24 - 72 hours",
      cost: 300,
    },
    {
      id: 2,
      name: "fastest",
      duration: "1 - 24 hours",
      cost: 1000,
    },
  ],
  productMaxShowModal: false,
  modalMessage: null,
  // showSideNavigation: false,
  // // used currency should load with the default currency name and rate
  // usedCurrency: { KES: 1, symbol: "Ksh " },
  // // exchange rates can be got from any api source
  // exchangeRates: {
  //   base: "KES",
  //   date: "2019-01-29",
  //   rates: {
  //     KES: 1,
  //     USD: 0.0099,
  //     GBP: 0.0075,
  //     EUR: 0.0087,
  //     TZS: 22.92,
  //     UGX: 36.33,
  //     NGN: 3.59,
  //     INR: 0.71,
  //   },
  // },
  // // overkill but doing it for fun
  // currencySymbols: {
  //   KES: "Ksh ",
  //   USD: "$",
  //   GBP: "£",
  //   EUR: "€",
  //   TZS: "TSh ",
  //   UGX: "USh ",
  //   NGN: "₦",
  //   INR: "₹",
  // },
  // priceFilter: {
  //   min: 0,
  //   max: 3700,
  //   pricerange: 3700,
  // },
  products: [
    // {
    //   id: 1,
    //   name: "men's analog quartz watch",
    //   slug: "mens-analog-quartz-watch-547383",
    //   price: 500,
    //   discount_price: 2800,
    //   category: "men",
    //   color: "black",
    //   subcategory: "",
    //   sale: true,
    //   article: "watch",
    //   quantity: 5,
    //   img: "analog-quartz-watch.jpg",
    //   options: [1, 2, 3],
    //   fulfilled_by_duka: true,
    //   shipped_from_abroad: false,
    //   duka_approved: true,
    //   vendor: {
    //     id: 1,
    //     name: "duka",
    //   },
    //   ratings: {
    //     star_ratings: 4.8,
    //     votes: 350,
    //   },
    // },
    // {
    //   id: 8,
    //   name: "Boho printed floral dress",
    //   slug: "boho-printed-floral-dress-656623",
    //   price: 1999,
    //   discount_price: 2199,
    //   category: "women",
    //   color: "skyblue",
    //   sizes: ["M", "L", "XL"],
    //   subcategory: "",
    //   sale: true,
    //   article: "dress",
    //   quantity: 10,
    //   img: "floral-dress.jpg",
    //   options: [],
    //   fulfilled_by_duka: false,
    //   shipped_from_abroad: false,
    //   duka_approved: false,
    //   vendor: {
    //     id: 3,
    //     name: "vendor three",
    //   },
    //   ratings: {
    //     star_ratings: 3.6,
    //     votes: 129,
    //   },
    // },
  ],
};

export default data;
