import React, { useReducer, useState } from "react";
import login from "../assets/svg/login2.svg";
import signup from "../assets/svg/signup2.svg";
import { HiOutlineMail, HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiUserCircle, BiLogIn } from "react-icons/bi";
import { BsExclamationCircleFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { userActions } from "../store/userSlice";
import { useDispatch } from "react-redux";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider } from "../config/Firebase";

const initialArg = {
  name: { value: "", isErr: "" },
  email: { value: "", isErr: "" },
  pswd: { value: "", isErr: "" },
  cnfmPswd: { value: "", isErr: "" },
};

const reducer = (prevState, action) => {
  // USER_NAME
  if (action.type === "nameVal" || action.type === "nameErr") {
    return action.type === "nameVal"
      ? { ...prevState, name: { ...prevState.name, value: action.payload } }
      : { ...prevState, name: { ...prevState.name, isErr: action.payload } };
  }
  // USER_EMAIL
  else if (action.type === "emailVal" || action.type === "emailErr") {
    return action.type === "emailVal"
      ? { ...prevState, email: { ...prevState.email, value: action.payload } }
      : { ...prevState, email: { ...prevState.email, isErr: action.payload } };
  }
  // USER_PASSWORD
  else if (action.type === "pswdVal" || action.type === "pswdErr") {
    return action.type === "pswdVal"
      ? { ...prevState, pswd: { ...prevState.pswd, value: action.payload } }
      : { ...prevState, pswd: { ...prevState.pswd, isErr: action.payload } };
  }
  // USER_CONFIRM_PASSWORD
  else if (action.type === "cnfmPswdVal" || action.type === "cnfmPswdErr") {
    return action.type === "cnfmPswdVal"
      ? {
          ...prevState,
          cnfmPswd: { ...prevState.cnfmPswd, value: action.payload },
        }
      : {
          ...prevState,
          cnfmPswd: { ...prevState.cnfmPswd, isErr: action.payload },
        };
  } else if (action.type === "clearErr") {
    return initialArg;
  }
  return prevState;
};

const LoginPage = () => {
  const [isSignPage, setIsSignPage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [user, dispatchFn] = useReducer(reducer, initialArg);

  const dispatch = useDispatch();

  const loginHandler = async () => {
    // EMAIL_VALIDATION
    if (
      user.email.value.trim().length === 0 ||
      !user.email.value.includes("@")
    ) {
      dispatchFn({
        type: "emailErr",
        payload:
          user.email.value.trim().length === 0
            ? "Email is required!"
            : "Please provide a valid Email!",
      });
    }
    // PASSWORD_VALIDATION
    else if (
      user.cnfmPswd.value.trim().length === 0 ||
      user.cnfmPswd.value.trim().length < 7
    ) {
      dispatchFn({
        type: "cnfmPswdErr",
        payload:
          user.cnfmPswd.value.trim().length === 0
            ? "Password is required!"
            : "Password must be of length greater than 6",
      });
    } else {
      signInWithEmailAndPassword(auth, user.email.value, user.cnfmPswd.value)
        .then((userAuth) => userAuth.user && dispatch(userActions.loginUser()))
        .catch((err) => console.error(err.code));
    }
  };

  const signupHandler = async () => {
    // USER_NAME_VALIDATION
    if (
      isSignPage &&
      (user.name.value.trim().length === 0 || user.name.value.trim().length < 4)
    ) {
      dispatchFn({
        type: "nameErr",
        payload:
          user.name.value.trim().length === 0
            ? "Username is required!"
            : "Username must be of length greater than 3",
      });
    }
    // EMAIL_VALIDATION
    else if (
      user.email.value.trim().length === 0 ||
      !user.email.value.includes("@")
    ) {
      dispatchFn({
        type: "emailErr",
        payload:
          user.email.value.trim().length === 0
            ? "Email is required!"
            : "Please provide a valid Email!",
      });
    }
    // PASSWORD_VALIDATION
    else if (
      isSignPage &&
      (user.pswd.value.trim().length === 0 || user.pswd.value.trim().length < 7)
    ) {
      dispatchFn({
        type: "pswdErr",
        payload:
          user.pswd.value.trim().length === 0
            ? "Password is required!"
            : "Password must be of length greater than 6",
      });
    }
    // ReENTER_PASSWORD_VALIDATION
    else if (
      user.cnfmPswd.value.trim().length === 0 ||
      !(user.cnfmPswd.value.trim() === user.pswd.value)
    ) {
      dispatchFn({
        type: "cnfmPswdErr",
        payload:
          user.cnfmPswd.value.trim().length === 0
            ? "Please Re-enter your password!"
            : "Re-entered password must be same as PASSWORD",
      });
    } else {
      createUserWithEmailAndPassword(
        auth,
        user.email.value,
        user.cnfmPswd.value
      )
        .then((userAuth) => userAuth.user && dispatch(userActions.loginUser()))
        .catch((err) => console.error(err));
    }
  };

  const continueWithGoogleHandler = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider);
      dispatch(userActions.loginUser());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="bg-gradient-to-r from-white from-30%  to-primary">
      <div className="flex flex-wrap items-center 2xl:container 2xl:mx-auto">
        <div className="w-full   lg:w-1/2  flex flex-col justify-center h-[80vh] md:h-[60vh] items-center gap-10">
          <h1 className="text-ternary/70 text-3xl w-[80%] text-center font-semibold">
            Welcome to Tronmart - Where Shopping Meets Innovation!
          </h1>
          <img src={isSignPage ? signup : login} alt="" className="w-[70%]" />
        </div>
        <div
          className=" w-full lg:w-1/2 h-screen flex  gap-8
          items-start lg:items-center justify-center"
        >
          <div className="bg-white px-3 sml:px-6 py-12 w-[90%] sml:w-[70%] rounded-md space-y-8 text-gray-500 drop-shadow-xl">
            <h1 className="text-2xl font-semibold text-ternary">
              <span className="underline decoration-4 decoration-primary">
                {isSignPage ? `Re` : `Lo`}
              </span>
              {isSignPage ? `gister` : `gin`}
            </h1>
            {/* ERROR MESSAGE */}
            {(user.name.isErr ||
              user.email.isErr ||
              user.pswd.isErr ||
              user.cnfmPswd.isErr) && (
              <h6
                className="px-3 py-1 bg-gray-200 border-t-4 
              flex  items-center gap-2 border-red-500 text-[15px]"
              >
                <BsExclamationCircleFill className="text-red-500" />
                <span className="text-ternary">
                  {user.name.isErr ||
                    user.email.isErr ||
                    user.pswd.isErr ||
                    user.cnfmPswd.isErr}
                </span>
              </h6>
            )}
            <form className="space-y-8">
              <div className="space-y-4">
                {isSignPage && (
                  <div
                    className={`flex items-center border-b-2 px-3 sml:px-0 gap-3 ${
                      user.name.isErr && "border-red-600"
                    }`}
                  >
                    <BiUserCircle
                      className={`scale-[1.9] ${
                        user.name.isErr && "text-red-600"
                      }`}
                    />
                    <input
                      type="text"
                      className={`w-full p-3 outline-none ${
                        user.name.isErr &&
                        "text-red-600 placeholder:text-red-600"
                      }`}
                      placeholder="Enter Your Name"
                      value={user.name.value}
                      onClick={() =>
                        user.name.isErr &&
                        dispatchFn({ type: "nameErr", payload: "" })
                      }
                      onChange={(event) =>
                        dispatchFn({
                          type: "nameVal",
                          payload: event.target.value,
                        })
                      }
                    />
                  </div>
                )}
                <div
                  className={`flex items-center border-b-2 px-3 sml:px-0 gap-3 ${
                    user.email.isErr && "border-red-600"
                  }`}
                >
                  <HiOutlineMail
                    className={`scale-[1.9] ${
                      user.email.isErr && "text-red-600"
                    }`}
                  />
                  <input
                    type="email"
                    className={`w-full p-3 outline-none ${
                      user.email.isErr &&
                      "text-red-600 placeholder:text-red-600"
                    }`}
                    placeholder="Enter Your Email"
                    value={user.email.value}
                    onClick={() =>
                      user.email.isErr &&
                      dispatchFn({ type: "emailErr", payload: "" })
                    }
                    onChange={(event) => {
                      dispatchFn({
                        type: "emailVal",
                        payload: event.target.value,
                      });
                    }}
                  />
                </div>
                {isSignPage && (
                  <div
                    className={`flex items-center border-b-2 px-3 sml:px-0 gap-3 ${
                      user.pswd.isErr && "border-red-600"
                    }`}
                  >
                    <RiLockPasswordLine
                      className={`scale-[1.9] ${
                        user.pswd.isErr && "text-red-600"
                      }`}
                    />
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`w-full p-3 outline-none ${
                        user.pswd.isErr &&
                        "text-red-600 placeholder:text-red-600"
                      }`}
                      placeholder="Create your Password"
                      value={user.pswd.value}
                      onClick={() =>
                        user.pswd.isErr &&
                        dispatchFn({ type: "pswdErr", payload: "" })
                      }
                      onChange={(event) =>
                        dispatchFn({
                          type: "pswdVal",
                          payload: event.target.value,
                        })
                      }
                    />
                  </div>
                )}
                <div
                  className={`flex items-center border-b-2 px-3 sml:px-0 gap-3 ${
                    user.cnfmPswd.isErr && "border-red-600"
                  }`}
                >
                  <RiLockPasswordLine
                    className={`scale-[1.9] ${
                      user.cnfmPswd.isErr && "text-red-600"
                    }`}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    className={`w-full p-3 outline-none ${
                      user.cnfmPswd.isErr &&
                      "text-red-600 placeholder:text-red-600"
                    }`}
                    placeholder="Confirm Your Password"
                    value={user.cnfmPswd.value}
                    onClick={() =>
                      user.cnfmPswd.isErr &&
                      dispatchFn({ type: "cnfmPswdErr", payload: "" })
                    }
                    onChange={(event) =>
                      dispatchFn({
                        type: "cnfmPswdVal",
                        payload: event.target.value,
                      })
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  >
                    {showPassword ? (
                      <HiOutlineEye className="scale-125" />
                    ) : (
                      <HiOutlineEyeOff className="scale-125" />
                    )}
                  </button>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="flex gap-2">
                    <input type="checkbox" />
                    <h6 className="text-ternary">
                      {isSignPage
                        ? `I accept all terms and conditions`
                        : `Remember me`}
                    </h6>
                  </div>
                  {!isSignPage && (
                    <h6 className="text-primary font-semibold">
                      Forget Password?
                    </h6>
                  )}
                </div>
              </div>
              <div className="space-y-[10px]">
                <button
                  className="bg-primary text-white w-full p-1 sml:p-[7px] rounded-[3px]
                  flex items-center justify-center gap-3 hover:bg-ternary 
                  transition-all ease-linear"
                  type="button"
                  onClick={isSignPage ? signupHandler : loginHandler}
                >
                  <BiLogIn className="scale-150" />
                  <span>{isSignPage ? `Register Now` : `Login Now`}</span>
                </button>
                <button
                  // className="paginateBtn w-full flex items-center justify-center gap-5"
                  className="bg-primary text-white w-full p-1 sml:p-[7px] rounded-[3px]
                  flex items-center justify-center gap-3 hover:bg-ternary 
                  transition-all ease-linear"
                  type="button"
                  onClick={continueWithGoogleHandler}
                >
                  <FcGoogle className="scale-150" />
                  <span>Continue with Google</span>
                </button>
                <div className="flex justify-center items-baseline text-xs sml:text-sm space-x-2">
                  <h6 className="text-ternary">
                    {isSignPage
                      ? `Already have an account ?`
                      : `Don't have an Account ?`}
                  </h6>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSignPage((prevState) => !prevState);
                      dispatchFn({ type: "clearErr", payload: "" });
                    }}
                  >
                    <h6 className="text-primary font-semibold text-sm sml:text-base">
                      {isSignPage ? `Login Now` : `Signup Now`}
                    </h6>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
