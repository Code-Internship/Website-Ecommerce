import { Box, Button } from "@mui/material";
import { Fragment, useEffect, useState, useRef  } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, Navigate, NavLink, Outlet } from "react-router-dom";
import { userStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios";
import { FaShoppingBag , FaHeart, FaExchangeAlt, FaTimes  } from "react-icons/fa";
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import { styled, useTheme } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';
// import Drawer from '@mui/material/Drawer';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import * as React from 'react';
const navigation = [
  { name: "HOME", to: "/" },
  { name: "SHOP", to: "/Shop" },
  { name: "BLOG", to: "/Blog" },
  { name: "PAGES", to: "/Pages" },
  { name: "PRODUCT", to: "/Products" },
  { name: "BRANDS", to: "/Brands" },
  { name: "TODAY'S DEALS", to: "/ToDaysDeals" },
  { name: "NEW ARIVALS", to: "/NewArivals" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
// const drawerWidth = 240;

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-start',
// }));

const DefaultLayout = () => {
  
  const { currentUser, userToken, setCurrentUser, setUserToken } =
    userStateContext();
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (!userToken) {
    return <Navigate to="signin" />;
  }

  const signout = (ev) => {
    ev.preventDefault();
    // eslint-disable-next-line no-unused-vars
    axiosClient.post("/signout").then((res) => {
      setCurrentUser({});
      setUserToken(null);
    });
  };

  /** gio hang */

  const [selectedCategory, setCategory] = useState(null);
  const [isShowModal, setShowModal] = useState(false);
  const [selectedProduct, setProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const onClickCategoryHandler = (cat_id) => {
    setCategory(cat_id);
  };

  const onClickProductHandler = (product) => {
    setProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onAddtoCartHandler = (product) => {
    if (cart.indexOf(product) !== -1) return null;
    const arr = [...cart];
    product.amount = 1;
    arr.push(product);
    setCart([...arr]);
  };

  useEffect(() => {
    console.log(cart);
  });

  {
    /** icon gio hang */
  }
  const cartRef = useRef(null);

  const onShowCartHandler = () => {
    cartRef.current.style.right = '0';
  };

  const onCloseCartHandler = () => {
    cartRef.current.style.right = '-100%';
  };
  {
    /** icon gio hang */
  }
  // const theme = useTheme();
  // const [setOpen] = React.useState(false);
  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };
  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  return (
    <Box>
      <Box className="min-h-full max-w-full">
        <Disclosure
          as="nav"
          className="bg-gray-100"
          style={{
            position: "fixed",
            top: "0px",
            left: "0px",
            right: "0px",
            zIndex: 1000,
          }}
        >
          {({ open }) => (
            <Box>
              <Box>
                {/** Nav Link */}
                <NavLink className="text-dark navbar navbar-expand-lg navbar-light bg-light">
                  <Box className="navbar-collapse">
                    {/** nut ben phai */}
                    <Box className="mr-auto d-flex align-items-center">
                      <Box className="nav-item dropdown">
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
                      </Box>
                      <Box className="nav-item dropdown">
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
                      </Box>
                    </Box>
                    {/** nut ben phai */}

                    {/** nut ben trai */}
                    <Box className="d-flex align-items-center ml-auto">
                      <Link className="nav-link" to="/hepl&contact">
                        Help & Contact
                      </Link>
                      <Link className="nav-link" to="/orderstatus">
                        Order Status
                      </Link>
                      <Link className="nav-link" to="/myaccount">
                        My Account
                      </Link>
                    </Box>
                    {/** nut ben trai */}
                  </Box>
                </NavLink>
                {/** Nav Link */}

                {/** Search Bar */}
                <Box className="px-2">
                  <form
                    className="d-flex align-items-center"
                    style={{ height: "4rem" }}
                  >
                    {/** Ten cua hang */}
                    <Box className="container col-3">
                      <Link to="/" className="text-dark text-decoration-none">
                        <strong>Media</strong>market
                      </Link>
                    </Box>
                    {/** Ten cua hang */}

                    {/** Search */}
                    <Box className="container pt-3">
                      <Box className="input-group mb-3 border border-primary rounded">
                        <input
                          type="text"
                          className="form-control border-white"
                          placeholder="Search for Products"
                          aria-label="Search for Products"
                          aria-describedby="basic-addon2"
                          value={searchTerm}
                          onChange={handleInputChange}
                        />
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
                    {/** Search */}

                    <Box className="container col-3 d-flex justify-content-center">
                      {/** icon mui ten*/}
                      <Box>
                        <Box style={{ position: "relative" }}>
                          <Box>
                            <Button className="cursor: pointer;">
                              <FaExchangeAlt />
                              <span>0</span>
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                      {/** icon mui ten*/}

                      {/** icon tim "thich san pham" */}
                      <Box>
                        <Box style={{ position: "relative" }}>
                          <Box>
                            <Button className="cursor: pointer;">
                              <FaHeart />
                              <span>0</span>
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                      {/** icon tim "thich san pham" */}

                      {/** icon gio hang */}
                      <Box>
                        <Box style={{ position: 'relative' }}>
                          <Box>
                            <Button style={{ cursor: 'pointer'}} onClick={onShowCartHandler}>
                            <FaShoppingBag />
                            </Button>
                            {showCart && (
                              <Box className="cart" ref={cartRef}>
                                <Button style={{ cursor: 'pointer' }} onClick={onCloseCartHandler}>
                                  <FaTimes />
                                </Button>
                              </Box>
                            )}
                          </Box>
                        </Box>
                      </Box>
                      {/* <Box sx={{ display: 'flex' }}>
                        <Box  open={open}>
                          <Toolbar>
                            <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerOpen}
                            sx={{ ...(open && { display: 'none'}) }}>
                              <FaShoppingBag />
                            </IconButton>
                          </Toolbar>
                          <Drawer
                          sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                              width: drawerWidth,
                            },
                          }}
                          variant="persistent"
                          anchor="right"
                          open={open}
                        >
                          <DrawerHeader>
                            <IconButton onClick={handleDrawerClose}>
                              {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                            </IconButton>
                          </DrawerHeader>
                          <Divider />
                          <List>
                            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                              <ListItem key={text} disablePadding>
                                <ListItemButton>
                                  <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                  </ListItemIcon>
                                  <ListItemText primary={text} />
                                </ListItemButton>
                              </ListItem>
                            ))}
                          </List>
                          <Divider />
                          <List>
                            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                              <ListItem key={text} disablePadding>
                                <ListItemButton>
                                  <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                  </ListItemIcon>
                                  <ListItemText primary={text} />
                                </ListItemButton>
                              </ListItem>
                            ))}
                          </List>
                        </Drawer>
                        </Box>
                        
                      </Box> */}
                      
                      {/** icon gio hang */}
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
                      <Box
                        type="button"
                        className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      ></Box>
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

                    {/* Sort By Dropdown */}
                    <Box className="container d-flex align-item-left px-1 py-1">
                      <Box className="hidden md:block">
                        <Box className="ml-10 flex align-items-baseline space-x-1">
                          {navigation.map((items) => (
                            <NavLink
                              key={items.name}
                              to={items.to}
                              className={({ isActive }) =>
                                classNames(
                                  isActive
                                    ? "hover:btn btn-default "
                                    : "hover:btn btn-default ",
                                  "rounded-md text-sm font-medium"
                                )
                              }
                            >
                              <span>
                                <strong>{items.name}</strong>
                              </span>
                              <Box
                                type="button"
                                className="btn dropdown-toggle dropdown-toggle-split"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              ></Box>
                              <Box
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                              >
                                <Link className="dropdown-item" to="/Action">
                                  Action
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="/AnotherAction"
                                >
                                  Another action
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="/SomethingElseHere"
                                >
                                  Something else here
                                </Link>
                              </Box>
                            </NavLink>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                    {/* Sort By Dropdown */}

                    {/** Logo USER */}
                    <Box className="hidden md:block">
                      <Box className="ml-4 flex items-center md:ml-6 col-1">
                        <Menu as="Box" className="relative ml-3">
                          <Box>
                            <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Open user menu</span>
                              <UserIcon className="w-10 h-10 text-white bg-black/25 p-2 rounded-full" />
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
                    {/** Logo USER */}

                    <Box className="-mr-2 flex md:hidden col">
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
                  </form>
                </Box>
                {/** Header */}
              </Box>

              {/** Open main menu */}
              <Disclosure.Panel className="md:hidden">
                <Box className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((items) => (
                    <NavLink
                      key={items.name}
                      to={items.to}
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "hover:bg-gray-100 text-dark"
                            : "text-gray-300 hover:bg-gray-100 hover:text-dark",
                          "block rounded-md px-3 py-2 text-base font-medium"
                        )
                      }
                    >
                      <span>
                        <strong>{items.name}</strong>
                      </span>
                      <Box
                        type="button"
                        className="btn dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      ></Box>
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
                    </NavLink>
                  ))}
                </Box>
                <Box className="border-t border-gray-700 pb-3 pt-4">
                  <Box className="flex items-center px-5">
                    <Box className="flex-shrink-0">
                      <UserIcon className="w-10 h-10 text-white bg-black/25 p-2 rounded-full" />
                    </Box>
                    <Box className="ml-3 space-y-1">
                      <Box className="text-base font-medium leading-none text-gray-400">
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
                        "block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-100 hover:text-dark"
                      }
                    >
                      Sign out
                    </Disclosure.Button>
                  </Box>
                </Box>
              </Disclosure.Panel>
              {/** Open main menu */}
            </Box>
          )}
        </Disclosure>
          
        <Outlet />
      </Box>
    </Box>
  );
};

export default DefaultLayout;
