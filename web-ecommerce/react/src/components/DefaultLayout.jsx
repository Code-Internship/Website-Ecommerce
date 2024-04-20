import { Box } from "@mui/material";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import { userStateContext } from "../contexts/ContextProvider";

// const user = {
//   name: "Tom Cook",
//   email: "tom@example.com",
//   imageUrl:
//     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// };

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
//   { name: "Sign out", href: "#" },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DefaultLayout = () => {
  const { currenUser , userToken } = userStateContext();

if(!userToken){
  return <Navigate to="signin"/>
}

  const logout = (ev) => {
    ev.preventDefault();
    console.log("Logout");
  };
  return (
    <Box>
      <Box className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
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
                              <a
                                href="#"
                                onClick={(ev) => logout(ev)}
                                className={
                                  "block px-4 py-2 text-sm text-gray-700"
                                }
                              >
                                Sign out
                              </a>
                            </Menu.Item>
                            {/* {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    to={item.to}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))} */}
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
                        src={currenUser.imageUrl}
                        alt=""
                      /> */}
                    </Box>
                    <Box className="ml-3">
                      <Box className="text-base font-medium leading-none text-white">
                        {currenUser.name}
                      </Box>
                      <Box className="text-sm font-medium leading-none text-gray-400">
                        {currenUser.email}
                      </Box>
                    </Box>
                  </Box>
                  <Box className="mt-3 space-y-1 px-2">
                    <Disclosure.Button
                      as="a"
                      href="#"
                      onClick={(ev) => logout(ev)}
                      className={
                        "block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      }
                    >
                      Sign out
                    </Disclosure.Button>
                    {/* {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        to={item.to}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))} */}
                  </Box>
                </Box>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DefaultLayout;
