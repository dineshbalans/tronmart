import React, { useState } from "react";
import logo from "../assets/svg/logo.svg";
import { menuBarItems } from "../data/heroData";
import { TiShoppingCart } from "react-icons/ti";
import { MdClose } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { HiOutlineLogout } from "react-icons/hi";
import { auth } from "../config/Firebase";
import { userActions } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { motion, AnimatePresence } from "framer-motion";

const Menubar = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = async () => {
    try {
      await signOut(auth);
      dispatch(userActions.logOutUser());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="bg-primary text-white p-5  lg:hidden">
      <div className="flex justify-between items-center px-5">
        <div className="flex gap-10 ">
          <button onClick={() => setMenuIsVisible((prevState) => !prevState)}>
            {menuIsVisible ? (
              <MdClose className="scale-150" />
            ) : (
              <HiMenu className="scale-[1.7]" />
            )}
          </button>
          <img
            src={logo}
            alt="tronmart_logo"
            className="scale-110  cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="">
          <Link to="cart">
            <TiShoppingCart className="scale-150" />
          </Link>
        </div>
      </div>
      {menuIsVisible && (
        <div className="flex justify-center">
          <AnimatePresence>
            <motion.div
              className="bg-[#F9F9F9] absolute w-full m-auto top-16
            text-primary px-10 py-5 z-50"
              initial={{ y: "-10vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100vh", opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <ul className="space-y-3">
                {menuBarItems.map(({ id, link_to, title, Icon }) => (
                  <li
                    key={id}
                    className="w-fit"
                    onClick={() => setMenuIsVisible((prevState) => !prevState)}
                  >
                    <NavLink
                      to={link_to}
                      className={({ isActive }) =>
                        isActive
                          ? "text-gray-500"
                          : "hover:text-gray-500 text-primary transition-all"
                      }
                    >
                      <div className="flex items-baseline gap-2">
                        {Icon && <Icon className="scale-150" />}
                        {title}
                      </div>
                    </NavLink>
                  </li>
                ))}
              </ul>
              <button
                className="flex items-center gap-3 py-3"
                onClick={logOutHandler}
              >
                <HiOutlineLogout className="scale-150" />
                <span className="font-medium">Logout</span>
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </section>
  );
};

export default Menubar;
