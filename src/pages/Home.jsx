import React from "react";
import Layout from "../Layout/Layout";
import { Button, Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Card from "../components/Card";
import Image from "../components/cardImages";

const Home = () => {
  const bgImage =
    "https://s3-alpha-sig.figma.com/img/66f7/52bc/4af7be52b1525386213b06ac055f5b82?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g-5dHb9EgGlN82OjEhruRlHYKSaHeAZH-tIvgKQQ-TyGv4J3yNZowEAB3BdZwY3OrV4dmK-z52PCPKjzgSdOz6lHfm9IWpNlgqzAXfltHZ4leqzwedQ95g-0zpyga66IdN0cinvAOxXifCz9IVbp4YtvBijd9Rjmc1smakCsdTn7oGEEv3ZXX7n7M4vPsG1zuUkpNwmSLnuK1SUhMtYPISw82DqIetljEMDbocChwMHik285facAULgH8p6IPUxCHHyCohAbSZ3aBSAqUTa~rOVODtm0UiZIrvHeJBWcN234t-dRj97Z3cGyTX-nRjYvadRwMhH0ShT4T~fvVRzKTw__";

  return (
    <Layout>
      <div className="relative sm:h-[490px] h-[500px] w-full bg-cover bg-center pt-[50px] flex flex-col sm:flex-row">
        <div
          className="absolute inset-0 bg-cover bg-center blur-[2px] brightness-50"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="z-10 relative ml-[100px] sm:ml-[50px] sm:text-left sm:mr-0 mr-[50px]">
          <p className="font-holtwood text-[30px] text-[#FFFFFF] sm:text-[48px] xs:text-[36px]">
            SAVOR THE
          </p>
          <p className="font-holtwood text-[30px] text-[#FFFFFF] sm:text-[48px] xs:text-[36px]">
            FLAVORS OF
          </p>
          <p className="font-holtwood text-[30px] text-[#FFFFFF] sm:text-[48px] xs:text-[36px]">
            CAFES'S
          </p>
          <p className="font-cambay text-[17px] text-[#FFFFFF] sm:text-[20px] xs:text-[18px]">
            Explore the best cafe with delicious taste, high quality
          </p>
          <p className="font-cambay text-[17px] text-[#FFFFFF] sm:text-[20px] xs:text-[18px]">
            & amazing culinary........
          </p>

          <div className="w-full sm:w-[500px] mt-[40px] sm:flex justify-center sm:justify-start xs:flex-col">
            <Button className="text-white bg-[#619BA7] rounded-[7px] font-cambay h-[40px] sm:w-[180px] w-[150px] mr-5 mb-5 sm:mb-0">
              Cafe Ranking
            </Button>

            <div className="relative w-full ">
              <input
                type="text"
                className="bg-white rounded-[7px] h-[40px] font-cambay w-full pl-10 pr-4 focus:border-none focus:outline-none"
                placeholder="Search Cafes at Your Location....."
              />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
            </div>
          </div>
        </div>
      </div>

      <Box>
        <Box className="ml-11">
          <Typography className="font-holtwood text-3xl md:text-4xl mt-5 text-[#FE7700] mb-2">
            EXPLORE CAFE's
          </Typography>
          <Typography className="font-cambay text-md md:text-xl">
            Discover the cafe at your location with best taste.......
          </Typography>
        </Box>

        <Box className=" h-16 w-11/12 flex flex-col md:flex-row mb-12 mt-4 md:mb-0 md:mt-4 justify-between ml-11 items-center">
          <Button className="font-cambay normal-case h-12 sm:h-14 md:h-14 text-base sm:text-lg md:text-xl bg-[#FE7700] text-white rounded-xl w-32 sm:w-36 md:w-40 font-semibold mr-12 md:mr-0">
            Top Featured
          </Button>

          <Box className="flex items-center mt-4 md:mt-0 mr-12 md:mr-0">
            <ul className="flex items-center md:mr-0">
              <Button className="text-sm sm:text-base md:text-lg font-cambay bg-[#DBDADA] text-black normal-case rounded-xl h-10 sm:h-12 md:h-14 w-auto px-4 sm:px-6 hover:text-white hover:bg-[#FE7700] transition-all duration-200 ease-in-out">
                All
              </Button>

              <Button className="text-sm sm:text-base md:text-lg font-cambay bg-[#DBDADA] text-black normal-case rounded-xl h-10 sm:h-12 md:h-14 w-auto px-4 sm:px-6 hover:text-white hover:bg-[#FE7700] transition-all duration-200 ease-in-out ">
                Themed
              </Button>

              <Button className="text-sm sm:text-base md:text-lg font-cambay bg-[#DBDADA] text-black normal-case rounded-xl h-10 sm:h-12 md:h-14 w-auto px-4 sm:px-6 hover:text-white hover:bg-[#FE7700] transition-all duration-200 ease-in-out">
                Brunch
              </Button>

              <Button className="text-sm sm:text-base md:text-lg font-cambay bg-[#DBDADA] text-black normal-case rounded-xl h-10 sm:h-12 md:h-14 w-auto px-4 sm:px-6 hover:text-white hover:bg-[#FE7700] transition-all duration-200 ease-in-out">
                Pop-Up
              </Button>

              <Button className="text-sm sm:text-base md:text-lg font-cambay bg-[#DBDADA] text-black normal-case rounded-xl h-10 sm:h-12 md:h-14 w-auto px-4 sm:px-6 hover:text-white hover:bg-[#FE7700] transition-all duration-200 ease-in-out">
                Espresso
              </Button>
            </ul>
          </Box>
        </Box>
      </Box>

      <Box className="flex flex-wrap w-[98vw] justify-center md:justify-between ">
        {Image.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </Box>

      {/*Discover your taste section */}
      <div className="h-80 bg-[#FE7700] mt-8 mb-8 pt-5 pb-10">
        <div id="container1" className="flex justify-center gap-52 px-16">
          <img
            src="https://s3-alpha-sig.figma.com/img/5f05/a814/156bb8a0ad586d99a95544d46b442929?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qwTpQ6yQFN~CarJXNoWsp9ZsLoFun6WeSRS4XYfDEbyXbhxzxhxTbn~Tp~E6yJyyn9EORozTKxPrjJwgawHarIdHC7diXHCs6tgQ5sJk7UMz7TpD~urqMrvngBg3CbR9yDPpHBjUGP2XwdfmVbLXnXjH~iVlvj6wdohbn7qprPUV4h3EJma~d2z9XahgKbIpbCklsJI0fAs6gm40ylv6ltu5p3bacY1G~hHUGOv5zG4TZ0EpSEcvb5tkgMxH0odEmHcCuub0aIxFSwwC-zEPoGo-WH9DcRBcLKewgKCGJz2Nod8oNJjE4zMbo5HumP1QKVBUKFMx9Sbc8V8K6GsvGw__"
            className="size-44 rounded-full"
            alt=""
          />
          <h1 className="font-holtwood text-white text-center font-normal text-4xl leading-[65.1px]">
            DISCOVER Your <br /> TASTE
          </h1>
          <img
            src="https://s3-alpha-sig.figma.com/img/a08e/7bbd/2f23fa736aa0c571032615463571172e?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dm-0kl5rcsv8SwD0O3H7-T3dK3Q9-LYRiW7MkUqMGvZTYdDj8zR2z97N6n1XDiMVJIFh7-3N5H8XmSw~6fuCsXi1lgoLoD51yhpJmBINeYCUH1x5SLOfU2Gz4ZbZavkfzUbaTIs12mrnfI-CT0Q0theI5ETRK1iywxrqNFK1tIepIUdOxwHXqS-RdAKdJJaFnnexnQhvcZMqcMc-w4Zmx799bF4yzkhKwuU1pCncB6-v7Ebsg4qX7ErXsBB3VE55HfPUWAYVd2PnOiPDmicgaqBFGcC4ysnPzx71mUrsGF1zUCwKb3oZlrI~46daf6-qvh3CL-d13-weOsUUHH5R9w__"
            className="size-36 rounded-full border-2 border-black"
            alt=""
          />
        </div>

        <div id="container2" className="flex justify-center gap-14 px-40">
          <img
            src="https://s3-alpha-sig.figma.com/img/cf74/8664/29e3719722bb2ff9ae70846b27275dbd?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NGfy1A2TRjiHrH3r3SJJOjyJ~LVPTAfmMq6fVK~R87jUpJXw4nbVyFR~rvIGeEqbY5yQDg~eFVN6nGWbs7soREbEL4St24bBuyZaiDWO6thisQ~jpCnSNv5xxcfflKgYn8UYmXtNJ7MeVjn6ETBMlq4WqmvJN6TyeCj1SzLR3MkEeSIZi0XZ73nJKFTS~85ryvfdxUTbKt0RaSTL~XfhX21otT6sq~LdzQvd4qGnhCcziuNNvCYdztC9BkCy76axpz6XJwO7pY49OWAQWJYFUT7WYMuyerhVLBCyth2bDA1646V7P75TP9-ThfK4S~FU91TKQJ2D8Ln-zCbZUrXIuQ__"
            className="size-28 rounded-full border-2 border-black"
            alt=""
          />
          <p className="font-cambay font-normal text-xl leading-8 text-center tracking-tighter">
            We help you to discover fabulous taste, amazing culinary, best
            quality &
            <br /> great service. By{" "}
            <span className="underline">Cafe Dekho</span> you can locate the
            cafe at your location <br /> with the categories you want to chill
            out...{" "}
          </p>
          <img
            src="https://s3-alpha-sig.figma.com/img/efda/7adc/9fbb6a9f63dde74e10361a0b674b2823?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=otsw8ikFZl~ffjm3NPx9KpEHCH8YwfEvKNpM0JEVShrvTRm1JDbgGCoelgjZbFK5qlfWTO0RIAa0dP80eq~Xxdo4WkT8QmQvQihLiqA804bu3sAu4LjL-3GeD1Jxurrj1l2nO6c4cMxujf7T14bWCNhyzX4cJGiYvkt69E8srbdo9d2N6WGF1xAjiEZ3ltTYGzxUirnZLCSPzRqz6Q-MaNimwGQmfdKxaBAIrRQgiyGvG95vSvDlgIq383FsxwLzb2qt6asKMzIntdl1Iiiit9vSG52-Jx9cfoCangDY~oVyPpL9BcTUSEnutosJBxBvsWA2URsd8MKPkIKvVkAhsQ__"
            className="size-28 rounded-full border-2 border-black"
            alt=""
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
