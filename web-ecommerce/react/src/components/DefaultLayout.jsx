import { Box } from "@mui/material";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, Navigate, NavLink, Outlet } from "react-router-dom";
import { userStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios";

const navigation = [
  { name: "HOME", to: "/" },
  { name: "SHOP", to: "/Shop" },
  { name: "BLOG", to: "/Blog" },
  { name: "PRODUCTS", to: "/Products" },
  { name: "BRANDS", to: "/Brands" },
];

// const userNavigation = [
//   // { name: "My Account", to: "#" },
//   // { name: "Order Status", to: "#" },
//   // { name: "Help & Contact", to: "#" },
//   { name: "Sign out", to: "#" },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DefaultLayout = () => {
  const { currentUser, userToken, setCurrentUser, setUserToken } =
    userStateContext();

  if (!userToken) {
    return <Navigate to="signin" />;
  }

  const signout = (ev) => {
    ev.preventDefault();
    axiosClient.post("/signout").then((res) => {
      setCurrentUser({});
      setUserToken(null);
    });
  };

  return (
    <Box>
      <Box className="min-h-full">
        <Disclosure
          as="nav"
          //  className="bg-gray-800"
        >
          {({ open }) => (
            <Box>
              <Box>
                {/** Nav Link */}
                <NavLink className="text-white navbar navbar-expand-lg navbar-light bg-light">
                  <Box className="navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item dropdown px-2">
                        <Link
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          EN
                        </Link>
                        <Box
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <Link className="dropdown-item" href="#">
                            VN
                          </Link>
                        </Box>
                      </li>
                      <li className="nav-item dropdown px-2">
                        <Link
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          USD
                        </Link>
                        <Box
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <Link className="dropdown-item" href="#">
                            VND
                          </Link>
                        </Box>
                      </li>
                    </ul>
                    <Box className="d-flex align-items-center">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item px-2">
                          <Link className="nav-link" to="/hepl&contact">
                            Help & Contact
                          </Link>
                        </li>
                        <li className="nav-item px-2">
                          <Link className="nav-link" to="/orderstatus">
                            Order Status
                          </Link>
                        </li>
                        <li className="nav-item px-2">
                          <Link className="nav-link" to="/myaccount">
                            My Account
                          </Link>
                        </li>
                      </ul>
                    </Box>
                  </Box>
                </NavLink>
                {/** Nav Link */}

                {/** Search Bar */}
                <Box className="px-2">
                  <form
                    className="d-flex align-items-center"
                    style={{ height: "4rem" }}
                  >
                    <Box className="container col-3">
                      <h4>
                        <strong>Media</strong>market
                      </h4>
                    </Box>
                    <Box className="container pt-3">
                      <Box className="input-group mb-3 border border-primary rounded">
                        {/* <input type="text" className="form-control border-white" placeholder="Search for Products"
                        aria-label="Search for Products" aria-describedby="basic-addon2"> */}
                        <select
                          className="custom-select border border-white col-3"
                          id="inputGroupSelect02"
                        >
                          <option selected>All Categories</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <Box className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            <i className="bi bi-search"></i>
                          </button>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="container col-3 d-flex justify-content-center">
                      <Box>
                        <Box style={{ position: "relative" }}>
                          <Box>
                            <i className="bi bi-arrow-left-right pr-4"></i>
                            <Box
                              className="position-absolute translate-middle badge rounded-circle bg-light"
                              style={{
                                color: "black",
                                top: "12px",
                                left: "8px",
                                fontSize: "8px",
                              }}
                            >
                              <span>0</span>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box>
                        <Box style={{ position: "relative" }}>
                          <Box>
                            <i className="bi bi-heart pr-4 "></i>
                            <Box
                              className="position-absolute translate-middle badge rounded-circle bg-light"
                              style={{
                                color: "black",
                                top: "12px",
                                left: "8px",
                                fontSize: "8px",
                              }}
                            >
                              <span>0</span>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box>
                        <Box style={{ position: "relative" }}>
                          <Box>
                            <i className="bi bi-bag pr-4"></i>
                            <Box
                              className="position-absolute translate-middle badge rounded-circle bg-danger"
                              style={{
                                color: "white",
                                top: "12px",
                                left: "8px",
                                fontSize: "8px",
                              }}
                            >
                              <span>2</span>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </form>
                </Box>
                {/** Search Bar */}

                {/** Header */}
                <Box className="px-2">
                  <form className="d-flex align-items-center">
                    {/** SHOP BY CATEGORY */}
                    <Box className="btn-group container col-3">
                      <Link to="/ShopByCategory">
                        <button
                          className="btn btn-primary text-left"
                          type="button"
                        >
                          SHOP BY CATEGORY
                        </button>
                      </Link>
                      <button
                        type="button"
                        className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      ></button>
                      <Box
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <Link className="dropdown-item" to="/Action">
                          Action
                        </Link>
                        <Link className="dropdown-item" to="/AnotherAction">
                          Another action
                        </Link>
                        <Link className="dropdown-item" to="/SomethingElseHere">
                          Something else here
                        </Link>
                      </Box>
                    </Box>
                    {/** SHOP BY CATEGORY */}

                    <Box className="container d-flex align-item-left">
                      {/** HOME */}
                      <Box className="dropdown">
                        <Link
                          to="/HOME"
                          className="btn btn-default dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span>
                            <strong>HOME</strong>
                          </span>
                        </Link>
                        <Box
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <Link className="dropdown-item" to="/Action">
                            Action
                          </Link>
                          <Link className="dropdown-item" to="/AnotherAction">
                            Another action
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="/SomethingElseHere"
                          >
                            Something else here
                          </Link>
                        </Box>
                      </Box>
                      {/** HOME */}

                      {/** SHOP */}
                      <Box className="dropdown">
                        <Link
                          to="/SHOP"
                          className="btn btn-default dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span>
                            <strong>SHOP</strong>
                          </span>
                        </Link>
                        <Box
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <Link className="dropdown-item" to="/Action">
                            Action
                          </Link>
                          <Link className="dropdown-item" to="/AnotherAction">
                            Another action
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="/SomethingElseHere"
                          >
                            Something else here
                          </Link>
                        </Box>
                      </Box>
                      {/** SHOP */}

                      {/** BLOG */}
                      <Box className="dropdown">
                        <Link
                          to="/BLOG"
                          className="btn btn-default dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span>
                            <strong>BLOG</strong>
                          </span>
                        </Link>
                        <Box
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <Link className="dropdown-item" to="/Action">
                            Action
                          </Link>
                          <Link className="dropdown-item" to="/AnotherAction">
                            Another action
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="/SomethingElseHere"
                          >
                            Something else here
                          </Link>
                        </Box>
                      </Box>
                      {/** BLOG */}

                      {/** PAGES */}
                      <Box className="dropdown">
                        <Link
                          to="/PAGES"
                          className="btn btn-default dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span>
                            <strong>PAGES</strong>
                          </span>
                        </Link>
                        <Box
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <Link className="dropdown-item" to="/Action">
                            Action
                          </Link>
                          <Link className="dropdown-item" to="/AnotherAction">
                            Another action
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="/SomethingElseHere"
                          >
                            Something else here
                          </Link>
                        </Box>
                      </Box>
                      {/** PAGES */}

                      {/** PRODUCT */}
                      <Box>
                        <Link to="/PRODUCT" className="btn btn-default">
                          <span>
                            <strong>PRODUCT</strong>
                          </span>
                        </Link>
                      </Box>
                      {/** PRODUCT */}

                      {/** BRANDS */}
                      <Box>
                        <Link to="/BRANDS" className="btn btn-default">
                          <span>
                            <strong>BRANDS</strong>
                          </span>
                        </Link>
                      </Box>
                      {/** BRANDS */}

                      {/** TODAY'S DEALS */}
                      <Box>
                        <Link
                          to="/TODAY'SDEALS"
                          className="btn btn-default text-left"
                        >
                          <span>
                            <strong>TODAY'S DEALS</strong>
                          </span>
                        </Link>
                      </Box>
                      {/** TODAY'S DEALS */}

                      {/** NEW ARIVALS */}
                      <Box>
                        <Link
                          to="/NEW ARIVALS"
                          className="btn btn-default text-left"
                        >
                          <span>
                            <strong>NEW ARIVALS</strong>
                          </span>
                        </Link>
                      </Box>
                      {/** NEW ARIVALS */}
                    </Box>

                    <Box className="dropdown">
                      <button
                        className="btn btn-default dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots-vertical"></i>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="#">
                            Action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Another action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Something else here
                          </Link>
                        </li>
                      </ul>
                    </Box>
                  </form>
                </Box>
                {/** Header */}
              </Box>

              <Box className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Box className="flex h-16 items-center justify-between">
                  <Box className="flex items-center">
                    <Box className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </Box>
                    <Box className="hidden md:block">
                      <Box className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.to}
                            className={({ isActive }) =>
                              classNames(
                                isActive
                                  ? "bg-gray-900 text-white"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "rounded-md px-3 py-2 text-sm font-medium"
                              )
                            }
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </Box>
                    </Box>
                  </Box>

                  <Box className="hidden md:block">
                    <Box className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown */}
                      <Menu as="Box" className="relative ml-3">
                        <Box>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <UserIcon className="w-10 h-10 text-white bg-black/25 p-2 rounded-full" />
                            {/* <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            /> */}
                          </Menu.Button>
                        </Box>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              <NavLink
                                to="/myaccount"
                                className={({ isActive }) =>
                                  classNames(
                                    isActive
                                      ? "block bg-gray-900 text-white"
                                      : "block text-gray-700 hover:bg-gray-700 hover:text-white",
                                    "block rounded-md px-3 py-2 text-sm font-medium"
                                  )
                                }
                              >
                                My Account
                              </NavLink>
                            </Menu.Item>
                            <Menu.Item>
                              <NavLink
                                to="/orderstatus"
                                className={({ isActive }) =>
                                  classNames(
                                    isActive
                                      ? "block bg-gray-900 text-white"
                                      : "block text-gray-700 hover:bg-gray-700 hover:text-white",
                                    "block rounded-md px-3 py-2 text-sm font-medium"
                                  )
                                }
                              >
                                Order Status
                              </NavLink>
                            </Menu.Item>
                            <Menu.Item>
                              <NavLink
                                to="/signout"
                                onClick={(ev) => signout(ev)}
                                className={({ isActive }) =>
                                  classNames(
                                    isActive
                                      ? "block bg-gray-900 text-white"
                                      : "block text-gray-700 hover:bg-gray-700 hover:text-white",
                                    "block rounded-md px-3 py-2 text-sm font-medium"
                                  )
                                }
                              >
                                Sign out
                              </NavLink>
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </Box>
                  </Box>
                  <Box className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </Box>
                </Box>
              </Box>

              <Disclosure.Panel className="md:hidden">
                <Box className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block rounded-md px-3 py-2 text-base font-medium"
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </Box>
                <Box className="border-t border-gray-700 pb-3 pt-4">
                  <Box className="flex items-center px-5">
                    <Box className="flex-shrink-0">
                      <UserIcon className="w-10 h-10 text-white bg-black/25 p-2 rounded-full" />
                      {/* <img
                        className="h-10 w-10 rounded-full"
                        src={currentUser.imageUrl}
                        alt=""
                      /> */}
                    </Box>
                    <Box className="ml-3 space-y-1">
                      <Box className="text-base font-medium leading-none text-white">
                        {currentUser.name}
                      </Box>
                      <Box className="text-sm font-medium leading-none text-gray-400">
                        {currentUser.email}
                      </Box>
                    </Box>
                  </Box>
                  <Box className="mt-3 space-y-1 px-2">
                    <Disclosure.Button
                      as="a"
                      to="/signout"
                      onClick={(ev) => signout(ev)}
                      className={
                        "block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      }
                    >
                      Sign out
                    </Disclosure.Button>
                  </Box>
                </Box>
              </Disclosure.Panel>
            </Box>
          )}
        </Disclosure>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DefaultLayout;
