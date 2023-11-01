import React, { useReducer } from "react";
import { FaAmazonPay } from "react-icons/fa";
import Coupon from "./Coupon";
import { CountrySelect, StateSelect } from "./CheckOut";

const initialValue = {
  isValid: { isError: "" },
  email: { value: "", isError: "" },
  firstName: { value: "", isError: "" },
  lastName: { value: "", isError: "" },
  country: { value: "", isError: "" },
  houseNo: { value: "", isError: "" },
  city: { value: "", isError: "" },
  state: { value: "", isError: "" },
  zipCode: { value: "", isError: "" },
  phone: { value: "", isError: "" },
  companyName: { value: "", isError: "" },
  address: { value: "", isError: "" },
  additionalInfo: { value: "", isError: "" },
};

const reducer = (prevState, action) => {
  if (action.type === "formIsNotValid" || action.type === "formIsValid") {
    return {
      ...prevState,
      isValid: { ...prevState.isValid, isError: action.payload },
    };
  } else if (action.type === "emailVal" || action.type === "emailErr") {
    return action.type === "emailVal"
      ? {
          ...prevState,
          email: { ...prevState.email, value: action.payload },
        }
      : {
          ...prevState,
          email: { ...prevState.email, isError: action.payload },
        };
  } else if (action.type === "fnameVal" || action.type === "fnameErr") {
    return action.type === "fnameVal"
      ? {
          ...prevState,
          firstName: { ...prevState.firstName, value: action.payload },
        }
      : {
          ...prevState,
          firstName: { ...prevState.firstName, isError: action.payload },
        };
  } else if (action.type === "lnameVal" || action.type === "lnameErr") {
    return action.type === "lnameVal"
      ? {
          ...prevState,
          lastName: { ...prevState.lastName, value: action.payload },
        }
      : {
          ...prevState,
          lastName: { ...prevState.lastName, isError: action.payload },
        };
  } else if (action.type === "houseNoVal" || action.type === "houseNoErr") {
    return action.type === "houseNoVal"
      ? {
          ...prevState,
          houseNo: { ...prevState.houseNo, value: action.payload },
        }
      : {
          ...prevState,
          houseNo: { ...prevState.houseNo, isError: action.payload },
        };
  } else if (action.type === "cityVal" || action.type === "cityErr") {
    return action.type === "cityVal"
      ? {
          ...prevState,
          city: { ...prevState.city, value: action.payload },
        }
      : {
          ...prevState,
          city: { ...prevState.city, isError: action.payload },
        };
  } else if (action.type === "zipCodeVal" || action.type === "zipCodeErr") {
    return action.type === "zipCodeVal"
      ? {
          ...prevState,
          zipCode: { ...prevState.zipCode, value: action.payload },
        }
      : {
          ...prevState,
          zipCode: { ...prevState.zipCode, isError: action.payload },
        };
  } else if (action.type === "phoneVal" || action.type === "phoneErr") {
    return action.type === "phoneVal"
      ? {
          ...prevState,
          phone: { ...prevState.phone, value: action.payload },
        }
      : {
          ...prevState,
          phone: { ...prevState.phone, isError: action.payload },
        };
  }
  return prevState;
};

const CheckOutForm = ({ totalPrice }) => {
  const [form, dispatch] = useReducer(reducer, initialValue);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (
      form.email.value.trim().length === 0 &&
      form.firstName.value.trim().length === 0 &&
      form.lastName.value.trim().length === 0 &&
      form.houseNo.value.trim().length === 0 &&
      form.city.value.trim().length === 0 &&
      form.zipCode.value.trim().length === 0 &&
      form.phone.value.trim().length === 0
    ) {
      dispatch({
        type: "formIsNotValid",
        payload: "Please fill the form to proceed further",
      });
    } else if (form.email.value.trim().length === 0) {
      dispatch({ type: "emailErr", payload: "Enter a valid Email Address!" });
    } else if (
      form.firstName.value.trim().length === 0 ||
      form.firstName.value.trim().length < 5
    ) {
      form.firstName.value.trim().length === 0
        ? dispatch({ type: "fnameErr", payload: "Enter a valid First Name!" })
        : dispatch({
            type: "fnameErr",
            payload: "FirstName length must be of greater than 4",
          });
    } else if (form.lastName.value.trim().length === 0) {
      dispatch({ type: "lnameErr", payload: "Enter a valid Last Name!" });
    } else if (form.houseNo.value.trim().length === 0) {
      dispatch({
        type: "houseNoErr",
        payload: "Enter a valid House Number OR Street Address!",
      });
    } else if (form.city.value.trim().length === 0) {
      dispatch({
        type: "cityErr",
        payload: "Enter a valid city!",
      });
    } else if (form.zipCode.value.trim().length === 0) {
      dispatch({
        type: "zipCodeErr",
        payload: "Enter a valid Zip Code!",
      });
    } else if (form.phone.value.trim().length === 0) {
      dispatch({
        type: "phoneErr",
        payload: "Enter a valid Phone Number!",
      });
    }
  };

  return (
    <form
      className={` lg:w-[60%] py-5 rounded-md sml:p-2 ${
        form.isValid.isError && "p-2 border border-red-500"
      }`}
      onSubmit={formSubmitHandler}
      onClick={() =>
        form.isValid.isError && dispatch({ type: "formIsValid", payload: "" })
      }
    >
      {form.isValid.isError && (
        <h2
          className="text-2xl font-semibold text-red-500 
        animate-bounce transition-all ease-linear"
        >
          Please fill the form to proceed further
        </h2>
      )}
      {/* Customer information */}
      <div>
        <label
          className={`inputTitle ${form.isValid.isError && "text-red-500"}`}
          htmlFor="email"
        >
          Customer Information
        </label>
        <input
          type="text"
          className={form.email.isError ? "inputError" : "input"}
          id="email"
          placeholder="Email Address *"
          value={form.email.value}
          onChange={(e) => {
            form.email.isError && dispatch({ type: "emailErr", payload: "" });
            dispatch({ type: "emailVal", payload: e.target.value });
          }}
        />
        {form.email.isError && (
          <h1 className="text-red-600 p-2 animate-pulse">
            {form.email.isError}
          </h1>
        )}
      </div>
      {/* Billing details */}
      <div>
        <label
          htmlFor=""
          className={`inputTitle ${form.isValid.isError && "text-red-500"}`}
        >
          Billing Details
        </label>
        <div className="space-y-4">
          <div className="flex gap-3">
            <input
              type="text"
              className={form.firstName.isError ? "inputError" : "input"}
              placeholder="First name *"
              value={form.firstName.value}
              onChange={(e) => {
                form.firstName.isError &&
                  dispatch({ type: "fnameErr", payload: "" });
                dispatch({ type: "fnameVal", payload: e.target.value });
              }}
            />

            <input
              type="text"
              className={form.lastName.isError ? "inputError" : "input"}
              placeholder="Last name *"
              value={form.lastName.value}
              onChange={(e) => {
                form.lastName.isError &&
                  dispatch({ type: "lnameErr", payload: "" });
                dispatch({ type: "lnameVal", payload: e.target.value });
              }}
            />
          </div>
          {form.firstName.isError && (
            <h1 className="text-red-600 p-2 animate-pulse">
              {form.firstName.isError}
            </h1>
          )}
          {form.lastName.isError && (
            <h1 className="text-red-600 p-2 animate-pulse">
              {form.lastName.isError}
            </h1>
          )}
          <input type="text" className="input" placeholder="Company name" />
          <CountrySelect className="input" />
          <div className="flex gap-3">
            <input
              type="text"
              className={form.houseNo.isError ? "inputError" : "input"}
              placeholder="House number and street name *"
              value={form.houseNo.value}
              onChange={(e) => {
                form.houseNo.isError &&
                  dispatch({ type: "houseNoErr", payload: "" });
                dispatch({ type: "houseNoVal", payload: e.target.value });
              }}
            />
            <input
              type="text"
              className="input"
              placeholder="Apartment, suite, unit, etc. (optional)"
            />
          </div>
          {form.houseNo.isError && (
            <h1 className="text-red-600 p-2 animate-pulse">
              {form.houseNo.isError}
            </h1>
          )}
          <div className="flex gap-3">
            <input
              type="text"
              className={form.city.isError ? "inputError" : "input"}
              placeholder="Town / City *"
              value={form.city.value}
              onChange={(e) => {
                form.city.isError && dispatch({ type: "cityErr", payload: "" });
                dispatch({ type: "cityVal", payload: e.target.value });
              }}
            />
            <StateSelect className="input" />
            <input
              type="text"
              className={form.zipCode.isError ? "inputError" : "input"}
              placeholder="ZIP Code *"
              value={form.zipCode.value}
              onChange={(e) => {
                form.zipCode.isError &&
                  dispatch({ type: "zipCodeErr", payload: "" });
                dispatch({ type: "zipCodeVal", payload: e.target.value });
              }}
            />
          </div>
          {form.city.isError && (
            <h1 className="text-red-600 p-2 animate-pulse">
              {form.city.isError}
            </h1>
          )}
          {form.zipCode.isError && (
            <h1 className="text-red-600 p-2 animate-pulse">
              {form.zipCode.isError}
            </h1>
          )}
          <input
            type="number"
            className={form.phone.isError ? "inputError" : "input"}
            placeholder="Phone *"
            value={form.phone.value}
            onChange={(e) => {
              form.phone.isError && dispatch({ type: "phoneErr", payload: "" });
              dispatch({ type: "phoneVal", payload: e.target.value });
            }}
          />
          {form.phone.isError && (
            <h1 className="text-red-600 p-2 animate-pulse">
              {form.phone.isError}
            </h1>
          )}
        </div>
      </div>
      {/* Additional information */}
      <div className="space-y-4">
        <div>
          <label
            htmlFor="textArea"
            className={`inputTitle ${form.isValid.isError && "text-red-500"}`}
          >
            Additional Information
          </label>
          <input
            type="text"
            id="textArea"
            className="input"
            placeholder="Notes about your order, e.g. special notes for delivery."
          />
        </div>
        <Coupon />
      </div>
      {/* Payment */}
      <div>
        <h3 className={`inputTitle ${form.isValid.isError && "text-red-500"}`}>
          Payment
        </h3>
        <div className="sml:p-3">
          <div
            className={`bg-[#F7F6F7] p-3 sml:p-6 text-ternary flex gap-3 border-t-4 ${
              form.isValid.isError ? "border-red-500" : "border-primary"
            } `}
          >
            <div
              className={`border w-10 h-3 sml:h-5 mt-2 border-t-4 border-r-2 ${
                form.isValid.isError ? "border-red-500" : "border-primary"
              } `}
            />
            <h6 className="leading-8">
              Sorry, it seems that there are no available payment methods.
              Please contact us if you require assistance or wish to make
              alternate arrangements.
            </h6>
          </div>
        </div>
        <button
          className="border flex items-center w-full
              justify-center bg-ternary text-white p-3
              font-semibold gap-3 mt-6 hover:bg-primary
              transition-all ease-linear"
        >
          <FaAmazonPay className="scale-150" />
          <span>{`Place Order  ₹${totalPrice}.00`}</span>
        </button>
      </div>
      {form.isValid.isError && (
        <h2
          className="text-2xl font-semibold text-red-500 
        animate-bounce transition-all ease-linear 
        text-center mt-8"
        >
          Please fill the form to proceed further
        </h2>
      )}
    </form>
  );
};

export default CheckOutForm;
