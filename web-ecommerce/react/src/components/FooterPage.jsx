import { Box, Container, IconButton, Paper, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

const FooterPage = () => {
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
                <Box className="shadow shadow-sm bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="35"
                    height="35"
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
                <Box className="shadow shadow-sm bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="35"
                    height="35"
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
                <Box className="shadow shadow-sm bg-white">
                  <svg
                    width="35px"
                    height="35px"
                    viewBox="0 0 326.05 326.05"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    stroke="#000000"
                    transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                  >
                    <g id="SVGRepo_bgCarrier"></g>
                    <g id="SVGRepo_tracerCarrier"></g>
                    <g id="SVGRepo_iconCarrier">
                      <g transform="matrix(2.07675 0 0 -2.07675 -11.153 92.77)">
                        <defs>
                          <path
                            id="a"
                            d="M-84.525-27.457h326.05V78.457h-326.05z"
                          ></path>
                        </defs>
                        <clipPath id="b">
                          <use overflow="visible"></use>
                        </clipPath>
                        <g>
                          <path
                            d="M32.419 40.982c-1.674 1.908-4.7 2.726-8.571 2.726H12.613a1.609 1.609 0 0 1-1.59-1.357L6.347 12.68a.964.964 0 0 1 .953-1.114h6.936l1.742 11.049-.054-.346a1.604 1.604 0 0 0 1.583 1.357h3.296c6.475 0 11.545 2.63 13.026 10.238.044.225.082.444.115.658.44 2.812-.003 4.726-1.524 6.459"
                            fill="#003087"
                          ></path>
                          <path
                            d="M117.331 26.863c-.424-2.784-2.55-2.784-4.606-2.784h-1.17l.821 5.198c.05.314.32.545.638.545h.537c1.4 0 2.722 0 3.404-.797.407-.477.53-1.185.376-2.162m-.895 7.264h-7.756a1.08 1.08 0 0 1-1.066-.91L104.48 13.33a.647.647 0 0 1 .638-.747h3.98c.371 0 .687.27.745.636l.89 5.64c.082.523.534.91 1.064.91h2.454c5.11 0 8.058 2.471 8.828 7.372.347 2.142.014 3.826-.989 5.005-1.103 1.296-3.058 1.982-5.653 1.982"
                            fill="#009cde"
                          ></path>
                          <path
                            d="M62.011 26.863c-.424-2.784-2.55-2.784-4.607-2.784h-1.17l.821 5.198c.05.314.32.545.638.545h.537c1.4 0 2.722 0 3.404-.797.408-.477.531-1.185.377-2.162m-.895 7.264H53.36c-.53 0-.982-.386-1.065-.91L49.16 13.33a.646.646 0 0 1 .638-.747h3.704c.53 0 .981.386 1.064.91l.847 5.365c.082.524.534.91 1.064.91h2.454c5.11 0 8.058 2.472 8.828 7.373.347 2.142.014 3.826-.989 5.005-1.103 1.296-3.058 1.982-5.653 1.982M79.123 19.723c-.36-2.122-2.043-3.547-4.192-3.547-1.077 0-1.94.347-2.494 1.003-.55.65-.756 1.577-.582 2.608.334 2.104 2.046 3.574 4.162 3.574 1.055 0 1.91-.35 2.476-1.012.569-.667.793-1.599.63-2.626m5.176 7.23h-3.714a.647.647 0 0 1-.64-.547l-.162-1.038-.26.376c-.804 1.167-2.597 1.558-4.387 1.558-4.103 0-7.608-3.11-8.29-7.47-.355-2.177.149-4.256 1.383-5.707 1.133-1.333 2.75-1.888 4.677-1.888 3.308 0 5.142 2.124 5.142 2.124l-.166-1.032a.646.646 0 0 1 .639-.747h3.344c.53 0 .982.385 1.065.91l2.008 12.713a.647.647 0 0 1-.64.747"
                            fill="#003087"
                          ></path>
                          <path
                            d="M134.443 19.723c-.36-2.122-2.043-3.547-4.192-3.547-1.077 0-1.94.347-2.494 1.003-.55.65-.756 1.577-.582 2.608.334 2.104 2.045 3.574 4.162 3.574 1.055 0 1.91-.35 2.476-1.012.569-.667.793-1.599.63-2.626m5.176 7.23h-3.714a.647.647 0 0 1-.64-.547l-.162-1.038-.26.376c-.804 1.167-2.597 1.558-4.387 1.558-4.102 0-7.607-3.11-8.29-7.47-.355-2.177.15-4.256 1.384-5.707 1.133-1.333 2.75-1.888 4.677-1.888 3.309 0 5.143 2.124 5.143 2.124l-.166-1.032a.644.644 0 0 1 .637-.747h3.343c.53 0 .982.385 1.066.91l2.008 12.713a.647.647 0 0 1-.64.747"
                            fill="#009cde"
                          ></path>
                          <path
                            d="M104.08 26.952h-3.734c-.357 0-.69-.177-.89-.473l-5.15-7.584-2.183 7.288a1.08 1.08 0 0 1-1.033.77h-3.669a.647.647 0 0 1-.612-.856l4.11-12.066-3.866-5.455a.647.647 0 0 1 .528-1.02h3.73c.352 0 .683.173.885.463l12.414 17.918a.646.646 0 0 1-.53 1.015"
                            fill="#003087"
                          ></path>
                          <path
                            d="M143.996 33.58l-3.184-20.251a.647.647 0 0 1 .639-.747h3.201c.53 0 .982.386 1.065.91l3.139 19.888a.646.646 0 0 1-.639.747h-3.582a.645.645 0 0 1-.639-.546"
                            fill="#009cde"
                          ></path>
                          <path
                            d="M32.419 40.982c-1.674 1.908-4.7 2.726-8.571 2.726H12.613a1.609 1.609 0 0 1-1.59-1.357L6.347 12.68a.964.964 0 0 1 .953-1.114h6.936l1.742 11.049-.054-.346a1.604 1.604 0 0 0 1.583 1.357h3.296c6.475 0 11.545 2.63 13.026 10.238.044.225.082.444.115.658.44 2.812-.003 4.726-1.524 6.459"
                            fill="#003087"
                          ></path>
                          <path
                            d="M17.849 34.485a1.408 1.408 0 0 0 1.389 1.187h8.808c1.043 0 2.016-.068 2.905-.21a12.206 12.206 0 0 0 1.44-.322 7.957 7.957 0 0 0 1.551-.618c.442 2.813-.002 4.726-1.523 6.46-1.675 1.907-4.7 2.725-8.571 2.725H12.612a1.609 1.609 0 0 1-1.588-1.357L6.346 12.682a.964.964 0 0 1 .952-1.115h6.937l1.742 11.05 1.872 11.868z"
                            fill="#003087"
                          ></path>
                          <path
                            d="M33.943 34.523a18.294 18.294 0 0 0-.115-.658c-1.481-7.607-6.551-10.238-13.026-10.238h-3.297a1.602 1.602 0 0 1-1.582-1.357l-1.688-10.702-.48-3.036a.844.844 0 0 1 .834-.976h5.847c.692 0 1.28.504 1.389 1.187l.057.298 1.102 6.984.07.386a1.407 1.407 0 0 0 1.39 1.187h.875c5.664 0 10.099 2.3 11.395 8.956.54 2.78.26 5.103-1.17 6.734a5.584 5.584 0 0 1-1.601 1.235"
                            fill="#009cde"
                          ></path>
                          <path
                            d="M32.392 35.14c-.226.067-.459.127-.699.18-.24.053-.488.1-.742.14-.89.145-1.862.213-2.906.213h-8.807a1.404 1.404 0 0 1-1.389-1.188l-1.872-11.87-.054-.345a1.602 1.602 0 0 0 1.582 1.357h3.297c6.475 0 11.545 2.63 13.026 10.238.044.225.081.443.115.658a7.998 7.998 0 0 1-1.218.514c-.109.036-.22.07-.333.104"
                            fill="#012169"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </Box>
                <Box className="shadow shadow-sm bg-white"></Box>
                <Box className="shadow shadow-sm bg-white"></Box>
              </Box>
              <Box>Phuoc Nghia © 2024</Box>
              <Box>&copy; 2022. Mediamarket. All rights reserved.</Box>
            </Stack>
          </Container>
        </Box>
      </footer>
    </Box>
  );
};

export default FooterPage;
