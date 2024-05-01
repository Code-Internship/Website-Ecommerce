import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";

const BannerPage = () => {
  return (
    <Box>
      {/** Banner chinh */}
      <Box>
        <section className="relative bg-[url(https://www.harbourcity.com.hk/media/Devialet-1.jpg)] bg-cover bg-center bg-no-repeat">
          <Box className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></Box>

          <Box className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <Box className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
              <Box className="mt-4 max-w-lg sm:text-xl/relaxed text-uppercase">
                Audio And Video
              </Box>

              <Box className="text-4xl font-weight-bold text-uppercase">
                Devialet Gold PhanTom
              </Box>
              <Box className="text-4xl text-capitalize">Wireless Speaker</Box>

              <Box className="mt-7 flex flex-wrap gap-4 text-center">
                <Link
                  to="/DiscoverNow"
                  className="btn btn-outline-primary font-weight-bold"
                >
                  Discover now
                </Link>
              </Box>
            </Box>
          </Box>
        </section>
      </Box>
      {/** Banner chinh */}

      {/** Banner phu */}
      <Box>
        <section>
          <Box className="mx-auto px-3 py-3">
            <Box className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
              <Box>
                <Link to="/DiscoverNow" className="group relative block">
                  <img
                    src="https://i0.wp.com/dronedj.com/wp-content/uploads/sites/2/2020/01/Sunflower-Labs-security-drone.jpg?resize=1200,628&ssl=1"
                    alt=""
                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                    style={{ aspectRatio: "16 / 9" }}
                  />
                  <Box className="absolute inset-0 flex flex-col items-start justify-end p-5 text-white font-italic">
                    <Box className="max-w-xl text-uppercase font-weight-bold">
                      dji drone
                    </Box>
                    <Box className="text-capitalize">reality capture</Box>
                  </Box>
                </Link>
              </Box>

              <Box>
                <Link to="/DiscoverNow" className="group relative block">
                  <img
                    src="https://media.wired.com/photos/5f7e4efc340398e14d15b3c0/191:100/w_1280,c_limit/Gear-OM4-5.jpg?mbid=social_retweet"
                    alt=""
                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                    style={{ aspectRatio: "16 / 9" }}
                  />
                  <Box className="absolute inset-0 flex flex-col items-start justify-end p-5 text-white font-italic">
                    <Box className="max-w-xl text-uppercase font-weight-bold">
                      osmo mobile
                    </Box>
                    <Box className="text-capitalize">beyond smart</Box>
                  </Box>
                </Link>
              </Box>

              <Box>
                <Link to="/DiscoverNow" className="group relative block">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0553/0419/2034/files/Primary_-_Pillow_172b4716-8f5f-4220-a9a3-4d625d08e69a.jpg?v=1678993367"
                    alt=""
                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                    style={{ aspectRatio: "16 / 9" }}
                  />
                  <Box className="absolute inset-0 flex flex-col items-start justify-end p-5 text-white font-italic">
                    <Box className="max-w-xl text-uppercase font-weight-bold">
                      S3 flexible
                    </Box>
                    <Box className="text-capitalize">home speaker</Box>
                  </Box>
                </Link>
              </Box>
            </Box>
          </Box>
        </section>
      </Box>
      {/** Banner phu */}

      {/** Banner phu 1 - Ngoc*/}
      <Box className="mx-auto px-3 py-3">
        <Box className="mt-3 mb-3 grid grid-cols-1 gap-2 lg:grid-cols-6">
          <Box className="relative grid grid-cols-1 gap-1 sm:grid-cols-1 lg:col-span-6 lg:grid-cols-6">
            <Box className="text-3xl sm:text-2xl lg:text-2xl xl:text-3xl">
              <Box to="/DiscoverNow" className="group relative block">
                <Box
                  className="transition duration-500 group-hover:opacity-90 aspect-square w-full object-cover"
                  style={{ aspectRatio: "20 / 1" }}
                />
                <Box className="font-medium font-weight-bold">2024{"'"}s</Box>
                <Box className="text-capitalize">Best Selling Products</Box>
                <Box display="flex" alignItems="left" mt={1}>
                  <FaCircleChevronLeft className="text-gray-500" />
                  <Box className="w-3" />
                  <FaCircleChevronRight className="text-gray-500" />
                </Box>
                <Box mt={1}>
                  <Link to="/DiscoverNow">
                    <Box className="font-weight-bold block" color="DodgerBlue" font-size= "x-large">
                      FULL CATALOG&gt;
                    </Box>
                  </Link>
                </Box>
              </Box>
            </Box>

            <Box>
              <Link to="/DiscoverNow" className="group relative block">
                <img
                  src="https://i.guim.co.uk/img/media/abef140b67ba87dd7dfbd528206c880b6d659736/0_102_3600_2160/master/3600.jpg?width=1300&dpr=2&s=none"
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                  style={{ aspectRatio: "4 / 3" }}
                />
                <Box className="mt-1 text-center font-weight-bold">AUDIO</Box>
              </Link>
            </Box>

            <Box>
              <Link to="/DiscoverNow" className="group relative block">
                <img
                  src="https://huylananhaudio.vn/media/lib/1710_TiviSamsungLEDUA65MU8000K-6.jpg"
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                  style={{ aspectRatio: "4 / 3" }}
                />
                <Box className="mt-1 text-center font-weight-bold">
                  PREMIUM TV
                </Box>
              </Link>
            </Box>

            <Box>
              <Link to="/DiscoverNow" className="group relative block">
                <img
                  src="https://phukienflytech.vn/wp-content/uploads/2021/02/11.jpg"
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                  style={{ aspectRatio: "4 / 3" }}
                />
                <Box
                  className="mt-1 text-center font-weight-bold"
                  fontSize="sm"
                  fontWeight="bold"
                >
                  GADGETS
                </Box>
              </Link>
            </Box>

            <Box>
              <Link to="/DiscoverNow" className="group relative block">
                <img
                  src="https://www.techone.vn/wp-content/uploads/2023/05/d_2.webp"
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                  style={{ aspectRatio: "4 / 3" }}
                />
                <Box className="mt-1 text-center font-weight-bold">TABLETS</Box>
              </Link>
            </Box>

            <Box>
              <Link to="/DiscoverNow" className="group relative block">
                <img
                  src="https://www.stonegroup.co.uk/media/catalog/product/cache/8e482c6f1356532ccb53b80dfbe0f6ff/C/7/C7100A27-74A3-4651-8ED9-9DD9FC35201B.jpg"
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                  style={{ aspectRatio: "4 / 3" }}
                />
                <Box className="mt-1 text-center font-weight-bold">
                  HEADPHONES
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      {/** Banner phu 1 - Ngoc*/}

      {/** Banner phu 2 - Ngoc*/}
      <Box className="mx-auto px-3 py-3">
        <Box className="mt-5 mb-3 grid grid-cols-1 gap-2 lg:grid-cols-12">
          {/** ô đầu tiên Deals of the month*/}
          <Box className="lg:col-span-4" style={{ border: '2px solid #32CD32', boxShadow: '0 0 5px green' }}>
            <Box className="px-4">
              <Box className="relative">
                <Box className="mt-2 mb-2 text-center text-xl">
                  <Box className="inline-block">
                    <Box className="font-bold">Deals</Box>
                  </Box>
                  <Box className="inline-block ml-2">
                    <Box>of the month</Box>
                  </Box>
                </Box>
                <hr/>
                <img 
                  src="https://images.ctfassets.net/a3qyhfznts9y/1jn5oYLXGLx2cJuiK9TAyI/7cc3df75b85ba3af685b93bea0ca87d5/3x2-ecobee3lite-AngleFront-US_3x.png?w=1366&h=911&q=80&fm=webp" 
                  alt="" 
                  className="w-full object-cover rounded-full" 
                  style={{ aspectRatio: "4 / 3" }} 
                />
                <Box className="absolute top-12 right-12 bg-green-500 text-white px-4 py-4 rounded-full">
                  SAVE<br/>$99.00
                </Box>

                <Box className="mt-4 text-center mb-3">
                  <Box className="mt-4">
                    <Box className="inline-block">
                      <Box className="text-lg font-bold" style={{ color: 'DodgerBlue' }}>$169.95</Box>
                    </Box>
                    <Box className="inline-block ml-2">
                      <Box className="text-gray-500 line-through">$269.00</Box>
                    </Box>
                  </Box>
                  <Box className="mt-2 text-lg">ecobee3 lite Smart Thermostat</Box>
                </Box>
              </Box>
              <hr/>
              <Box className="mt-4 p-2 rounded text-center text-xl">
                <Box className="uppercase font-bold">Hurry Up!</Box>
                <Box>Offer Ends In:</Box>
                <Box className="mt-3 mr-5 ml-5 grid grid-cols-4 text-center">
                  <Box>
                    <Box className="flex items-center justify-center">
                      <Box className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
                        <Box className="text-xl font-bold">3</Box>
                      </Box>
                    </Box>
                    <Box className="text-xs font-bold">DAYS</Box>
                  </Box>

                  <Box>
                    <Box className="flex items-center justify-center">
                      <Box className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
                        <Box className="text-xl font-bold">12</Box>
                      </Box>
                    </Box>
                    <Box className="text-xs font-bold">HOURS</Box>
                  </Box>

                  <Box>
                    <Box className="flex items-center justify-center">
                      <Box className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
                        <Box className="text-xl font-bold">37</Box>
                      </Box>
                    </Box>
                    <Box className="text-xs font-bold">MINS</Box>
                  </Box>
                  
                  <Box>
                    <Box className="flex items-center justify-center">
                      <Box className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
                        <Box className="text-xl font-bold">28</Box>
                      </Box>
                    </Box>
                    <Box className="text-xs font-bold">SECS</Box>
                  </Box>
                  
                </Box> 
              </Box>
            </Box>
          </Box>
          {/** ô đầu tiên Deals of the month*/}

          {/** 6 ô sản phẩm còn lại*/}
          <Box className="lg:col-span-8">
            <Box className="px-3">
              <Box className="mt-2 mb-2 text-left text-xl">
                <Box className="inline-block">
                  <Box className="font-bold" style={{ color: 'red' }}>New Arrivals</Box>
                </Box>
                <Box className="inline-block ml-5">
                  On Sale
                </Box>
                <Box className="inline-block ml-5">
                  Best Rated
                </Box>
                <Box className="inline-block ml-5">
                  Popular Products
                </Box>
              </Box>
              <hr/>

              <Box className="grid grid-cols-3 gap-2 mt-2">
                <Box>
                  <Link to="/DiscoverNow" className="group relative block border-r border-gray-300">
                    <img
                      src="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D260/https://d2e6ccujb3mkqf.cloudfront.net/c25b4545-ed00-4933-ab01-a55114f549a1-2_3d8cb8ce-be26-49c2-8073-e14dbe22585e.jpg"
                      alt=""
                      className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                      style={{ aspectRatio: "4 / 3" }}
                    />
                    <Box className="mt-4 text-center mb-3">
                      <Box className="mt-4">
                        <Box className="inline-block">
                          <Box className="text-lg font-bold" style={{ color: 'DodgerBlue' }}>$299.95</Box>
                        </Box>
                      </Box>
                      <Box>Beats Solo3 Wireless</Box>
                      <Box>On-Ear Headphones</Box> 
                    </Box>
                  </Link>
                </Box>

                <Box>
                  <Link to="/DiscoverNow" className="group relative block border-r border-gray-300">
                    <img
                      src="https://techlandaudio.com.vn/wp-content/uploads/2021/02/loa-bluetooth-devialet-phantom-1-108-db-gold_2-1.jpg"
                      alt=""
                      className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                      style={{ aspectRatio: "4 / 3" }}
                    />
                    <Box className="mt-4 text-center mb-3">
                      <Box className="mt-4">
                        <Box className="inline-block">
                          <Box className="text-lg font-bold" style={{ color: 'DodgerBlue' }}>$2 989.95</Box>
                        </Box>
                      </Box>
                      <Box>Devialet Gold Phantom</Box>
                      <Box>Wireless Speaker</Box> 
                    </Box>
                  </Link>
                </Box>

                <Box>
                  <Link to="/DiscoverNow" className="group relative block">
                    <img 
                      src="https://media.pricebook.co.id/images/product/L/69468_L_1.jpg"
                      alt=""
                      className="aspect-square w-full object-contain transition duration-500 group-hover:opacity-90"
                      style={{ aspectRatio: "4 / 3" }}
                    />
                    <Box className="mt-4 text-center mb-3">
                      <Box className="mt-4">
                        <Box className="inline-block">
                          <Box className="text-lg font-bold" style={{ color: 'DodgerBlue' }}>$369.00</Box>
                        </Box>
                      </Box>
                      <Box>Apple Watch Nike+</Box>
                      <Box>With Sport Band</Box> 
                    </Box>
                  </Link>
                </Box>

                <Box>
                  <Link to="/DiscoverNow" className="group relative block border-r border-gray-300">
                    <img
                      src="https://fr.mathworks.com/help/simulink/supportpkg/parrot_ug/parrot_mambo_stabilized.png"
                      alt=""
                      className="aspect-square w-full object-scale-down transition duration-500 group-hover:opacity-90"
                      style={{ aspectRatio: "4 / 3" }}
                    />
                    <Box className="absolute top-3 right-5 bg-yellow-400 text-black font-bold px-2 square-full">
                      -35%
                    </Box>
                    <Box className="mt-4 text-center mb-3">
                      <Box className="mt-4">
                        <Box className="inline-block">
                          <Box className="text-lg font-bold" style={{ color: 'DodgerBlue' }}>$109.95</Box>
                        </Box>
                      </Box>
                      <Box>Parrot Mambo</Box>
                      <Box>MiniDrone</Box> 
                    </Box>
                  </Link>
                </Box>

                <Box>
                  <Link to="/DiscoverNow" className="group relative block border-r border-gray-300">
                    <img
                      src="https://static.bhphoto.com/images/multiple_images/images500x500/1475971300_IMG_695070.jpg"
                      alt=""
                      className="aspect-square w-full object-contain transition duration-500 group-hover:opacity-90"
                      style={{ aspectRatio: "4 / 3" }}
                    />
                    <Box className="mt-4 text-center mb-3">
                      <Box className="mt-4">
                        <Box className="inline-block">
                          <Box className="text-lg font-bold" style={{ color: 'DodgerBlue' }}>$129.95</Box>
                        </Box>
                      </Box>
                      <Box>Bose SoundLink Color</Box>
                      <Box>Bluetooth Speaker II</Box> 
                    </Box>
                  </Link>
                </Box>

                <Box>
                  <Link to="/DiscoverNow" className="group relative block">
                    <img
                      src="https://gradeatechnology.co.uk/wp-content/uploads/2023/09/Sonos-Boost-Main-450x450.png"
                      alt=""
                      className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                      style={{ aspectRatio: "4 / 3" }}
                    />
                    <Box className="absolute top-3 right-5 bg-red-500 text-white font-bold px-2 square-full">
                      Hot
                    </Box>
                    <Box className="mt-4 text-center mb-3">
                      <Box className="mt-4">
                        <Box className="inline-block">
                          <Box className="text-lg font-bold" style={{ color: 'DodgerBlue' }}>$99.95</Box>
                        </Box>
                      </Box>
                      <Box>Beats Solo3 Wireless</Box>
                      <Box>On-Ear Headphones</Box> 
                    </Box>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
          {/** 6 ô sản phẩm còn lại*/}
        </Box>
      </Box>
      {/** Banner phu 2 - Ngoc*/}
      
      {/** Banner phu 3 - Ngoc*/}
      <Box className="mx-auto px-3 py-3">
       <Box className="mt-2 mb-2 text-left text-3xl">
          <Box className="inline-block">
            <Box className="font-bold">Best Sellers</Box>
          </Box>
          <Box className="inline-block ml-2">
            <Box>Products</Box>
          </Box>
        </Box>
        <hr/>

        <Box className="mt-4 mb-3 grid grid-cols-1 gap-2 lg:grid-cols-6">
          <Box className="relative grid grid-cols-1 gap-1 sm:grid-cols-1 lg:col-span-6 lg:grid-cols-6">
            <Box>
              <Link to="/DiscoverNow" className="group relative block border-r border-gray-300">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.BG7rUauKgvXARTWgtq-UdAHaHa&pid=Api&P=0&h=220"
                  alt=""
                  className="aspect-square w-full object-contain transition duration-500 group-hover:opacity-90"
                  style={{ aspectRatio: "4 / 3" }}
                />
                <Box className="text-center mb-3">
                  <Box className="mt-2">
                    <Box className="inline-block">
                      <Box className="text-lg font-bold" style={{ color: 'DodgerBlue' }}>$499.99</Box>
                    </Box>
                  </Box>
                  <Box>Hover Camera Passport</Box>
                  <Box>Personal Photographer</Box> 
                </Box>
              </Link>
            </Box>

            <Box>
              <Link to="/DiscoverNow" className="group relative block border-r border-gray-300">
                <img
                  src="https://product.hstatic.net/200000144777/product/1_7c83aa287e9f457ead7bd4a7af37911f_master.png"
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                  style={{ aspectRatio: "4 / 3" }}
                />
                <Box className="absolute top-3 right-5 bg-green-500 text-white font-bold px-2 square-full">
                  SALE
                </Box>
                <Box className="text-center mb-3">
                  <Box className="mt-2">
                    <Box className="inline-block">
                      <Box className="text-lg font-bold" style={{ color: 'DodgerBlue' }}>$295</Box>
                    </Box>
                    <Box className="inline-block ml-3">
                      <Box className="text-gray-500 line-through">$399.95</Box>
                    </Box>
                  </Box>
                  <Box>Bose SoundLink Revolve+</Box>
                  <Box>Bluetooth Speaker</Box> 
                </Box>
              </Link>
            </Box>

            <Box>
              <Link to="/DiscoverNow" className="group relative block border-r border-gray-300">
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.e3kSK_HFX3i_AoUgtYO9zwHaHa&pid=Api&P=0&h=220"
                  alt=""
                  className="aspect-square w-full object-contain transition duration-500 group-hover:opacity-90"
                  style={{ aspectRatio: "4 / 3" }}
                />
                <Box className="text-center mb-3">
                  <Box className="mt-2">
                    <Box className="inline-block">
                      <Box className="text-lg font-bold" style={{ color: 'DodgerBlue' }}>$299.95</Box>
                    </Box>
                  </Box>
                  <Box>GoPro HERO5</Box>
                  <Box>Session Camera</Box> 
                </Box>
              </Link>
            </Box>

            <Box>
              <Link to="/DiscoverNow" className="group relative block border-r border-gray-300">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  className="aspect-square w-full object-contain transition duration-500 group-hover:opacity-90"
                  style={{ aspectRatio: "4 / 3" }}
                />
                <Box className="absolute top-3 right-2 bg-blue-400 text-white font-bold px-2 square-full">
                  NEW
                </Box>
                <Box className="text-center mb-3">
                  <Box className="mt-2">
                    <Box className="inline-block">
                      <Box className="text-lg font-bold" style={{ color: 'DodgerBlue' }}>ADD TO CART</Box>
                    </Box>
                  </Box>
                  <Box>AirPods</Box>
                  <Box>White Color</Box> 
                </Box>
              </Link>
            </Box>

            <Box>
              <Link to="/DiscoverNow" className="group relative block border-r border-gray-300">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.D2pPzFbOEYkicxy4EopZRgHaHa&pid=Api&P=0&h=220"
                  alt=""
                  className="aspect-square w-full object-contain transition duration-500 group-hover:opacity-90"
                  style={{ aspectRatio: "4 / 3" }}
                />
                <Box className="text-center mb-3">
                  <Box className="mt-2">
                    <Box className="inline-block">
                      <Box className="text-lg font-bold" style={{ color: 'DodgerBlue' }}>$109.95</Box>
                    </Box>
                  </Box>
                  <Box>Beats Black</Box>
                  <Box>Earphones</Box> 
                </Box>
              </Link>
            </Box>

            <Box>
              <Link to="/DiscoverNow" className="group relative block">
                <img
                  src="https://powers-energy-solution.myshopify.com/cdn/shop/products/81LzyoUMuxL._SL1500_1024x1024.jpg?v=1487556082"
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                  style={{ aspectRatio: "4 / 3" }}
                />
                <Box className="text-center mb-3">
                  <Box className="mt-2">
                    <Box className="inline-block">
                      <Box className="text-lg font-bold" style={{ color: 'DodgerBlue' }}>$299.95</Box>
                    </Box>
                  </Box>
                  <Box>August Smart Lock</Box>
                  <Box>HomeKit Enabled</Box> 
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      {/** Banner phu 3 - Ngoc*/}
    </Box>
  );
};

export default BannerPage;


