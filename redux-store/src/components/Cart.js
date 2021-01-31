import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsDash, BsPlus, BsReverseBackspaceReverse } from "react-icons/bs";

const Cart = () => {
  const { products } = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch;
  return (
    <div className="cart">
      <div className="container">
        <h3>Your Cart</h3>
        {products.length > 0 ? (
          <>
            <div className="row">
              <div className="col-9">
                <div className="cart_heading">
                  <div className="row">
                    <div className="col-2">Picture</div>
                    <div className="col-2">Item Name</div>
                    <div className="col-2">Price</div>
                    <div className="col-2">Inc/Dec</div>
                    <div className="col-2">Total Price</div>
                    <div className="col-2">Remove</div>
                  </div>
                </div>
                {products.map((product) => (
                  <div className="row verticalAlign" key={product.id}>
                    <div className="col-2">
                      <div className="cart_image">
                        <img src={`/images/${product.image}`} alt="" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cart_name">{product.name}</div>
                    </div>
                    <div className="col-2">
                      <div className="cart_price">
                        ₹ {product.discountPrice}
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="details_info">
                        <div className="details_incDec">
                          <span
                            className="dec"
                            onClick={() =>
                              dispatch({ type: "DEC", payload: product.id })
                            }
                          >
                            <BsDash />
                          </span>
                          <span className="quantity">{product.quantity}</span>
                          <span
                            className="inc"
                            onClick={() =>
                              dispatch({ type: "INC", payload: product.id })
                            }
                          >
                            <BsPlus />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cart_total text-center">
                        ₹ {product.discountPrice * product.quantity}
                      </div>
                    </div>
                    <div className="col-2">
                      <div
                        className="cart_remove"
                        onClick={() =>
                          dispatch({ type: "REMOVE", payload: product.id })
                        }
                      >
                        <BsReverseBackspaceReverse />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-3">Summary</div>
            </div>
          </>
        ) : (
          "Your cart is empty!"
        )}
      </div>
    </div>
  );
};

export default Cart;
