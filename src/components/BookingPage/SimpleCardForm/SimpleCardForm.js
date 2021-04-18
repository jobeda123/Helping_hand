import React, { useContext, useMemo } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";
import './SimpleCardForm.css';
import { UserContext } from "../../../App";
import { useHistory } from "react-router-dom";


// import useResponsiveFontSize from "../../useResponsiveFontSize";

const useOptions = () => {
  //   const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: "16px",
          color: "palevioletred",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "red"
        }
      }
    }),
    []
  );

  return options;
};

const SimpleCardForm = () => {
  let history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    console.log("[PaymentMethod]", payload);
    console.log("Payment ID: ", payload.paymentMethod.id);
    const newCart = {};
    newCart.userName = loggedInUser.name;
    newCart.email = loggedInUser.email;
    newCart.role = " ";
    newCart.serviceName = loggedInUser.service.name;
    newCart.price = loggedInUser.service.price;
    newCart.cardID = payload.paymentMethod.id;
    newCart.OrderStatus = "pending";
    const info = { ...loggedInUser };

    setLoggedInUser(info);
    console.log("New cart: ", newCart);

    fetch('https://enigmatic-crag-72285.herokuapp.com/addBookService', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCart)
    })
      .then(res => res.json())
      .then(success => {
        if (success) {
          alert('Book Your Service Successfully...');
          history.push("/home");
          // window.location.reload();
        }
      })
  };

  return (
    <form className="formStyle" onSubmit={handleSubmit}>
      <label>
        Card number
        <CardNumberElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br />
      <label>
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>

      <label className="ps-5">
        CVC
        <CardCvcElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br />
      <button className="brandButton" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default SimpleCardForm;
