import DropIn from "braintree-web-drop-in-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { cartEmpty, loadCart } from "./helper/cartHelper";
import { createOrder } from "./helper/orderHelper";
import { getmeToken, processPayment } from "./helper/paymentbHelper";

const Paymentb = ({ products, setReload = (f) => f, reload = undefined }) => {
  const [info, setInfo] = useState({
    loading: false,
    success: false,
    clientToken: null,
    error: "",
    instance: {},
  });

  const userId = isAuthenticated && isAuthenticated().user._id;
  const token = isAuthenticated && isAuthenticated().token;

  const getToken = (userId, token) => {
    getmeToken(userId, token)
      .then((info) => {
        if (info.error) {
          setInfo({ ...info, error: info.error });
        } else {
          const clientToken = info.clientToken;
          setInfo({ clientToken });
        }
      })
      .catch();
  };

  const showbtdropIn = () => {
    // console.log(info, "INFO");

    return (
      <div>
        {info.clientToken !== null && products.length > 0 ? (
          <div className="d-grid gap-2">
            <div>
              <DropIn
                options={{ authorization: info.clientToken }}
                onInstance={(instance) => (info.instance = instance)}
              />
            </div>
            <button className="btn btn-block btn-success" onClick={onPurchase}>
              Buy
            </button>
          </div>
        ) : (
          <h3>Please login or add something to cart</h3>
        )}
      </div>
    );
  };

  useEffect(() => {
    getToken(userId, token);
  }, []);

  const onPurchase = () => {
    setInfo({ loading: true });
    let nonce;
    let getNonce = info.instance.requestPaymentMethod().then((data) => {
      nonce = data.nonce;
      const paymentData = {
        paymentMethodNonce: nonce,
        amount: getAmount(),
      };
      processPayment(userId, token, paymentData)
        .then((res) => {
          setInfo({ ...info, success: res.success, loading: false });

          console.log("PAYMENT SUCCESS");

          const orderData = {
            products: products,
            transaction_id: res.transaction.id,
            amount: res.transaction.amount,
          };

          createOrder(userId, token, orderData);

          cartEmpty(() => {
            console.log("Did we got a crash?");
          });

          setReload(!reload);
        })
        .catch((err) => {
          setInfo({ loading: false, success: false });
          console.log("PAYMENT FAILED");
        });
    });
  };

  const getAmount = () => {
    let amount = 0;
    products.map((p) => {
      amount += p.price;
    });

    return amount;
  };

  return (
    <div>
      <h3>Your Bill is: ${getAmount()}</h3>
      {showbtdropIn()}
    </div>
  );
};

export default Paymentb;
