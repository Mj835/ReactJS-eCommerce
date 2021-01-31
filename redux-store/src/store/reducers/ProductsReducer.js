const initState = {
  products: [
    {
      id: 1,
      name: "Semi Stiched Printed Suit",
      image: "dress.jpg",
      price: 1500,
      discount: 5,
      discountPrice: 1500 - (5 / 100) * 1500,
      quantity: 1,
      desc:
        "Irure ad reprehenderit sit ad veniam ullamco qui adipisicing. Consequat nulla incididunt irure tempor ut excepteur elit dolore eu veniam enim dolor. Deserunt aliqua do irure sunt. Ut aliqua veniam pariatur ea laborum quis amet ea aliquip culpa fugiat laboris. Minim tempor pariatur sint Lorem consectetur id ut sit consequat eu.",
    },
    {
      id: 2,
      name: "Anarkali Grey Suit",
      image: "dress1.jpg",
      price: 1000,
      discount: 5,
      discountPrice: 1000 - (5 / 100) * 1000,
      quantity: 1,
      desc:
        "Irure ad reprehenderit sit ad veniam ullamco qui adipisicing. Consequat nulla incididunt irure tempor ut excepteur elit dolore eu veniam enim dolor. Deserunt aliqua do irure sunt. Ut aliqua veniam pariatur ea laborum quis amet ea aliquip culpa fugiat laboris. Minim tempor pariatur sint Lorem consectetur id ut sit consequat eu.",
    },
    {
      id: 3,
      name: "Marron Anarkali Designer Gown",
      image: "dress2.jpg",
      price: 2000,
      discount: 5,
      discountPrice: 2000 - (5 / 100) * 2000,
      quantity: 1,
      desc:
        "Irure ad reprehenderit sit ad veniam ullamco qui adipisicing. Consequat nulla incididunt irure tempor ut excepteur elit dolore eu veniam enim dolor. Deserunt aliqua do irure sunt. Ut aliqua veniam pariatur ea laborum quis amet ea aliquip culpa fugiat laboris. Minim tempor pariatur sint Lorem consectetur id ut sit consequat eu.",
    },
    {
      id: 4,
      name: "Grey Men Kurta",
      image: "shirt1.jpg",
      price: 600,
      discount: 5,
      discountPrice: 600 - (5 / 100) * 600,
      quantity: 1,
      desc:
        "Irure ad reprehenderit sit ad veniam ullamco qui adipisicing. Consequat nulla incididunt irure tempor ut excepteur elit dolore eu veniam enim dolor. Deserunt aliqua do irure sunt. Ut aliqua veniam pariatur ea laborum quis amet ea aliquip culpa fugiat laboris. Minim tempor pariatur sint Lorem consectetur id ut sit consequat eu.",
    },
    {
      id: 5,
      name: "Men White Shirt",
      image: "shirt2.jpg",
      price: 500,
      discount: 5,
      discountPrice: 500 - (5 / 100) * 500,
      quantity: 1,
      desc:
        "Irure ad reprehenderit sit ad veniam ullamco qui adipisicing. Consequat nulla incididunt irure tempor ut excepteur elit dolore eu veniam enim dolor. Deserunt aliqua do irure sunt. Ut aliqua veniam pariatur ea laborum quis amet ea aliquip culpa fugiat laboris. Minim tempor pariatur sint Lorem consectetur id ut sit consequat eu.",
    },
    {
      id: 6,
      name: "Grey Men's Shoes",
      image: "shoes.jpg",
      price: 1200,
      discount: 15,
      discountPrice: 1200 - (5 / 100) * 1200,
      quantity: 1,
      desc:
        "Irure ad reprehenderit sit ad veniam ullamco qui adipisicing. Consequat nulla incididunt irure tempor ut excepteur elit dolore eu veniam enim dolor. Deserunt aliqua do irure sunt. Ut aliqua veniam pariatur ea laborum quis amet ea aliquip culpa fugiat laboris. Minim tempor pariatur sint Lorem consectetur id ut sit consequat eu.",
    },
    {
      id: 7,
      name: "White Design Sneaker",
      image: "shoes1.jpg",
      price: 1100,
      discount: 15,
      discountPrice: 1100 - (5 / 100) * 1100,
      quantity: 1,
      desc:
        "Irure ad reprehenderit sit ad veniam ullamco qui adipisicing. Consequat nulla incididunt irure tempor ut excepteur elit dolore eu veniam enim dolor. Deserunt aliqua do irure sunt. Ut aliqua veniam pariatur ea laborum quis amet ea aliquip culpa fugiat laboris. Minim tempor pariatur sint Lorem consectetur id ut sit consequat eu.",
    },
    {
      id: 8,
      name: "Purple High Heel Belly",
      image: "sandal.jpg",
      price: 2000,
      discount: 10,
      discountPrice: 2000 - (5 / 100) * 2000,
      quantity: 1,
      desc:
        "Irure ad reprehenderit sit ad veniam ullamco qui adipisicing. Consequat nulla incididunt irure tempor ut excepteur elit dolore eu veniam enim dolor. Deserunt aliqua do irure sunt. Ut aliqua veniam pariatur ea laborum quis amet ea aliquip culpa fugiat laboris. Minim tempor pariatur sint Lorem consectetur id ut sit consequat eu.",
    },
    {
      id: 9,
      name: "Transparent Multi Color Heel Sandal",
      image: "sandal1.jpg",
      price: 1500,
      discount: 10,
      discountPrice: 1500 - (5 / 100) * 1500,
      quantity: 1,
      desc:
        "Irure ad reprehenderit sit ad veniam ullamco qui adipisicing. Consequat nulla incididunt irure tempor ut excepteur elit dolore eu veniam enim dolor. Deserunt aliqua do irure sunt. Ut aliqua veniam pariatur ea laborum quis amet ea aliquip culpa fugiat laboris. Minim tempor pariatur sint Lorem consectetur id ut sit consequat eu.",
    },
  ],
  product: {},
};

const ProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case "PRODUCT":
      return {
        ...state,
        product: state.products.find(
          (product) => product.id === parseInt(action.id)
        ),
      };
    default:
      return state;
  }
};

export default ProductsReducer;
