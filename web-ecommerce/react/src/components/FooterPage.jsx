import { Box, Button, Container, IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

const FooterPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email submitted:", email);
  };
  return (
    <Box>
      <footer className="bg-while">
        <Box className="bg-gray-100 mx-auto space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <Box className="grid grid-cols-1 gap-8 lg:grid-cols-6">
            <Box className="ml-4 mr-4">
              <Box className="text-teal-600 ">
                <Link to="/" className="text-dark text-decoration-none">
                  <strong>Media</strong>market
                </Link>
                <Box className="text-dark">+1(732)446-6721</Box>
              </Box>

              <Box className="mt-2 max-w-xs text-gray-500">
                Media Market, LLC 5 South Main Street, Englishtown, NJ 07726
              </Box>
              <Box>
                <Box className="mt-3 flex text-dark">
                  <Link to="/FacebookIcon">
                    <IconButton to="#" aria-label="facebook">
                      <FacebookRoundedIcon />
                    </IconButton>
                  </Link>
                  <Link to="/TwitterIcon">
                    <IconButton to="#" aria-label="Twitter">
                      <TwitterIcon />
                    </IconButton>
                  </Link>
                  <Link to="/InstagramIcon">
                    <IconButton to="#" aria-label="Instagram">
                      <InstagramIcon />
                    </IconButton>
                  </Link>
                  <Link to="/PinterestIcon">
                    <IconButton to="#" aria-label="Pinterest">
                      <PinterestIcon />
                    </IconButton>
                  </Link>
                </Box>
              </Box>
            </Box>

            <Box className="text-capitalize grid grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-5">
              {/* About us */}
              <Box>
                {/** tieu de */}
                <Box className="font-medium text-gray-900 font-weight-bold">
                  About us
                </Box>
                {/** tieu de */}
                <Box className="mt-2 space-y-2 text-sm ">
                  {/** muc phu 1 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Company info
                    </Link>
                  </Box>
                  {/** muc phu 1 */}

                  {/** muc phu 2 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      news
                    </Link>
                  </Box>
                  {/** muc phu 2 */}

                  {/** muc phu 3 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      investors
                    </Link>
                  </Box>
                  {/** muc phu 3 */}

                  {/** muc phu 4 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      careers
                    </Link>
                  </Box>
                  {/** muc phu 4 */}

                  {/** muc phu 5 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      government relations
                    </Link>
                  </Box>
                  {/** muc phu 5 */}

                  {/** muc phu 6 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      policies
                    </Link>
                  </Box>
                  {/** muc phu 6 */}
                </Box>
              </Box>
              {/* About us */}

              {/* Shop by category */}
              <Box>
                {/** tieu de */}
                <Box className="font-medium text-gray-900 font-weight-bold">
                  Shop by category
                </Box>
                {/** tieu de */}
                <Box className="mt-2 space-y-2 text-sm ">
                  {/** muc phu 1 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Today{"'"}s Deals
                    </Link>
                  </Box>
                  {/** muc phu 1 */}

                  {/** muc phu 2 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      best sellers
                    </Link>
                  </Box>
                  {/** muc phu 2 */}

                  {/** muc phu 3 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      new arrivals
                    </Link>
                  </Box>
                  {/** muc phu 3 */}

                  {/** muc phu 4 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      top rated
                    </Link>
                  </Box>
                  {/** muc phu 4 */}

                  {/** muc phu 5 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      popular
                    </Link>
                  </Box>
                  {/** muc phu 5 */}

                  {/** muc phu 6 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      featuared
                    </Link>
                  </Box>
                  {/** muc phu 6 */}
                </Box>
              </Box>
              {/* Shop by category */}

              {/* Support and Service */}
              <Box>
                {/** tieu de */}
                <Box className="font-medium text-gray-900 font-weight-bold">
                  Support and Service
                </Box>
                {/** tieu de */}
                <Box className="mt-2 space-y-2 text-sm ">
                  {/** muc phu 1 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      customer service
                    </Link>
                  </Box>
                  {/** muc phu 1 */}

                  {/** muc phu 2 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      protection
                    </Link>
                  </Box>
                  {/** muc phu 2 */}

                  {/** muc phu 3 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      schedule a service
                    </Link>
                  </Box>
                  {/** muc phu 3 */}

                  {/** muc phu 4 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      trade-in program
                    </Link>
                  </Box>
                  {/** muc phu 4 */}

                  {/** muc phu 5 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      product recalls
                    </Link>
                  </Box>
                  {/** muc phu 5 */}

                  {/** muc phu 6 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75 text-uppercase"
                    >
                      faq
                    </Link>
                  </Box>
                  {/** muc phu 6 */}
                </Box>
              </Box>
              {/* Support and Service */}

              {/* Partnerships */}
              <Box>
                {/** tieu de */}
                <Box className="font-medium text-gray-900 font-weight-bold">
                  Partnerships
                </Box>
                {/** tieu de */}
                <Box className="mt-2 space-y-2 text-sm ">
                  {/** muc phu 1 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Affiliate program
                    </Link>
                  </Box>
                  {/** muc phu 1 */}

                  {/** muc phu 2 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Developers
                    </Link>
                  </Box>
                  {/** muc phu 2 */}

                  {/** muc phu 3 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Mediamarket ignite
                    </Link>
                  </Box>
                  {/** muc phu 3 */}

                  {/** muc phu 4 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Mediamarket for education
                    </Link>
                  </Box>
                  {/** muc phu 4 */}

                  {/** muc phu 5 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Mediamarket direct
                    </Link>
                  </Box>
                  {/** muc phu 5 */}

                  {/** muc phu 6 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      advertise with us
                    </Link>
                  </Box>
                  {/** muc phu 6 */}
                </Box>
              </Box>
              {/* Partnerships */}

              {/* Customer Care */}
              <Box>
                {/** tieu de */}
                <Box className="font-medium text-gray-900 font-weight-bold">
                  Customer Care
                </Box>
                {/** tieu de */}
                <Box className="mt-2 space-y-2 text-sm ">
                  {/** muc phu 1 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      my account
                    </Link>
                  </Box>
                  {/** muc phu 1 */}

                  {/** muc phu 2 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      track order
                    </Link>
                  </Box>
                  {/** muc phu 2 */}

                  {/** muc phu 3 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      shop
                    </Link>
                  </Box>
                  {/** muc phu 3 */}

                  {/** muc phu 4 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      wishlist
                    </Link>
                  </Box>
                  {/** muc phu 4 */}

                  {/** muc phu 5 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      compare
                    </Link>
                  </Box>
                  {/** muc phu 5 */}

                  {/** muc phu 6 */}
                  <Box>
                    <Link
                      to="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      returns/exchange
                    </Link>
                  </Box>
                  {/** muc phu 6 */}
                </Box>
              </Box>
              {/* Customer Care */}
            </Box>
          </Box>
        </Box>

        <Box className="text-xs text-gray-500 bg-gray-300 mx-auto flex px-4 py-4 space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
          <Container>
            <Stack
              alignItems="center"
              justifyContent="space-between"
              direction={{ xs: "column", md: "row " }}
              sx={{ height: "max-content" }}
            >
              <Box className="flex gap-4">
                {/* Visa */}
                <Box className="shadow shadow-sm bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#1565C0"
                      d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"
                    ></path>
                    <path
                      fill="#FFC107"
                      d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"
                    ></path>
                  </svg>
                </Box>
                {/* Visa */}

                {/* mastercard */}
                <Box className="shadow shadow-sm bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#ff9800"
                      d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                    ></path>
                    <path
                      fill="#d50000"
                      d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                    ></path>
                    <path
                      fill="#ff3d00"
                      d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                    ></path>
                  </svg>
                </Box>
                {/* mastercard */}

                {/* Paypal */}
                <Box className="shadow shadow-sm bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#0d62ab"
                      d="M18.7,13.767l0.005,0.002C18.809,13.326,19.187,13,19.66,13h13.472c0.017,0,0.034-0.007,0.051-0.006	C32.896,8.215,28.887,6,25.35,6H11.878c-0.474,0-0.852,0.335-0.955,0.777l-0.005-0.002L5.029,33.813l0.013,0.001	c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,0.991,1,0.991h8.071L18.7,13.767z"
                    ></path>
                    <path
                      fill="#199be2"
                      d="M33.183,12.994c0.053,0.876-0.005,1.829-0.229,2.882c-1.281,5.995-5.912,9.115-11.635,9.115	c0,0-3.47,0-4.313,0c-0.521,0-0.767,0.306-0.88,0.54l-1.74,8.049l-0.305,1.429h-0.006l-1.263,5.796l0.013,0.001	c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,1,1,1h7.333l0.013-0.01c0.472-0.007,0.847-0.344,0.945-0.788l0.018-0.015	l1.812-8.416c0,0,0.126-0.803,0.97-0.803s4.178,0,4.178,0c5.723,0,10.401-3.106,11.683-9.102	C42.18,16.106,37.358,13.019,33.183,12.994z"
                    ></path>
                    <path
                      fill="#006fc4"
                      d="M19.66,13c-0.474,0-0.852,0.326-0.955,0.769L18.7,13.767l-2.575,11.765	c0.113-0.234,0.359-0.54,0.88-0.54c0.844,0,4.235,0,4.235,0c5.723,0,10.432-3.12,11.713-9.115c0.225-1.053,0.282-2.006,0.229-2.882	C33.166,12.993,33.148,13,33.132,13H19.66z"
                    ></path>
                  </svg>
                </Box>
                {/* Paypal */}

                {/* Skrill */}
                <Box className="shadow shadow-sm bg-white">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 -9 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <rect
                        x="0.5"
                        y="0.5"
                        width="57"
                        height="39"
                        rx="3.5"
                        fill="white"
                        stroke="#ffffff"
                      ></rect>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M48.6494 12.7211V27.2361H52.6426V12.0115L48.6494 12.7211"
                        fill="#862165"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M42.8205 12.7211L46.8111 12.0115V27.2361H42.8205V12.7211"
                        fill="#862165"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M37.136 27.2361V16.1005H41.1286V27.2361H37.136"
                        fill="#862165"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M37.1636 13.0775C37.1636 11.9975 38.0453 11.1213 39.1311 11.1213C40.2187 11.1213 41.0998 11.9975 41.0998 13.0775C41.0998 14.1583 40.2187 15.0325 39.1311 15.0325C38.0453 15.0325 37.1636 14.1583 37.1636 13.0775"
                        fill="#862165"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M34.884 15.9372C31.1952 16.0554 29.3211 17.7009 29.3211 20.9717V27.2361H33.3469V22.1267C33.3469 20.1692 33.6052 19.33 35.9435 19.2499V15.9951C35.5503 15.9118 34.884 15.9372 34.884 15.9372V15.9372"
                        fill="#862165"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.0524 16.0878C23.9641 16.3102 23.326 18.105 21.7786 19.9647V12.0115L17.6582 12.8215V27.2361H21.7786V22.7798C22.9717 24.5588 23.5613 27.2361 23.5613 27.2361H28.4957C28.0078 25.2195 25.8728 21.5022 25.8728 21.5022C27.7897 19.0866 28.6306 16.5141 28.7649 16.0878H24.0524"
                        fill="#862165"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.7487 17.6755C10.2442 17.6431 9.0753 17.5675 9.0753 16.5224C9.0753 15.2612 10.757 15.2612 11.3881 15.2612C12.4981 15.2612 13.9342 15.5865 14.9611 15.8921C14.9611 15.8921 15.5328 16.0929 16.0194 16.2975L16.0648 16.3102V12.8558L16.004 12.8374C14.7917 12.4162 13.3843 12.0115 10.7736 12.0115C6.27274 12.0115 4.67804 14.6157 4.67804 16.8489C4.67804 18.1349 5.23305 21.1642 10.3861 21.513C10.8241 21.5397 11.984 21.6064 11.984 22.6864C11.984 23.5785 11.0345 24.1033 9.43785 24.1033C7.68841 24.1033 5.99012 23.6611 4.95938 23.2398V26.7965C6.50293 27.1999 8.24342 27.3994 10.2832 27.3994C14.6823 27.3994 16.6543 24.9349 16.6543 22.4914C16.6543 19.722 14.449 17.922 10.7487 17.6755V17.6755"
                        fill="#862165"
                      ></path>
                    </g>
                  </svg>
                </Box>
                {/* Skrill */}

                {/* Western Union */}
                <Box className="shadow shadow-sm bg-white">
                  <svg
                    version="1.2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1599 1599"
                    width="25"
                    height="25"
                  >
                    <title>
                      WesternUnion_HorizontalLockup_YellowBlack_(1)-svg
                    </title>
                    <path
                      id="Layer 1"
                      className="s0"
                      fill="#ffdd00"
                      d="m0 0h1599v1599h-1599z"
                    />
                    <g id="#ffdd00ff">
                      <path
                        id="Layer"
                        className="s1"
                        fill="#000000"
                        d="m0.8 348c131.2-0.2 262.5 0 393.8-0.1 138.2 239 276.4 478.1 414.4 717.2-16.7 28.5-33.1 57.3-49.9 85.8-21.9 36.3-51.5 69.8-90.4 88.3-29.4 14.1-64.1 17.2-95.3 7-36.8-11.3-67-37.7-90-67.8-14.4-18.2-25.2-38.8-36.9-58.7-148.5-257.3-297.3-514.4-445.7-771.7zm523.8 0c131.3-0.1 262.6 0 393.8-0.1 91.9 158.5 183.6 317.1 275.3 475.6 5.8 9.7 10.8 20.1 18.4 28.5 17.7 20.4 47 30.2 73.3 23.2 20.1-4.8 36.8-18.9 47.7-36.1-94.5-163.8-189.2-327.4-283.7-491.1 131.3-0.1 262.5-0.1 393.8 0 50.6 87.9 101.3 175.7 151.9 263.6-103.3 178.9-206.7 357.7-310 536.6-20.4 34.4-47.2 66.2-82.4 86.1-29.5 17.1-65.8 23-98.9 14-37.8-9.8-69.2-35.7-93-65.8-16.7-20.3-28.8-43.7-42-66.3-148-256.1-296.2-512.1-444.2-768.2z"
                      />
                    </g>
                  </svg>
                </Box>
                {/* Western Union */}
              </Box>
              <Box>&copy; 2022. Mediamarket. All rights reserved.</Box>
              <Box className="">
                <form onSubmit={handleSubmit}>
                  <Box className="email-input-field flex gap-3 items-center">
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    <Button
                      variant="contained"
                      endIcon={<SendIcon />}
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white outline"
                    >
                      Submit
                    </Button>
                  </Box>
                </form>
              </Box>
            </Stack>
          </Container>
        </Box>
      </footer>
    </Box>
  );
};

export default FooterPage;
