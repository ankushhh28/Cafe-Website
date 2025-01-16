import Layout from "../Layout/Layout";
import { Button, Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Card from "../components/Card";
import { Image, Image2 } from "../components/cardImages";

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
      <Box className="h-auto bg-[#FE7700] mt-8 mb-8 pt-5 pb-10 flex flex-col md:flex-row justify-between items-center px-6 md:px-16 gap-8">
        {/* Left Images Container */}
        <Box className="flex flex-col sm:flex-row gap-10 items-center">
          <img
            src="/src/assets/chef.png"
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 rounded-full"
            alt="Chef"
          />
          <img
            src="src/assets/ladychef.jpg"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-2 border-black"
            alt="Lady Chef"
          />
        </Box>

        {/* Text Container */}
        <Box
          id="text-container"
          className="flex flex-col justify-center items-center gap-6 text-center"
        >
          <Typography className="font-holtwood text-white font-normal text-2xl md:text-4xl leading-8 md:leading-[65.1px]">
            DISCOVER Your <br /> TASTE
          </Typography>
          <Typography className="font-cambay font-normal text-base md:text-xl leading-6 md:leading-8 tracking-tighter">
            We help you to discover fabulous taste, amazing culinary, best
            quality &
            <br className="hidden md:block" /> great service. By{" "}
            <span className="underline">Cafe Dekho</span>, you can locate the
            cafe at your location <br className="hidden md:block" /> with the
            categories you want to chill out...
          </Typography>
        </Box>

        {/* Right Images Container */}
        <Box className="flex flex-col sm:flex-row gap-10 items-center">
          <img
            src="/src/assets/salad.jpg"
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 rounded-full border-2 border-black"
            alt="Salad"
          />
          <img
            src="src/assets/waiter.jpg"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-2 border-black"
            alt="Waiter"
          />
        </Box>
      </Box>

      {/*Cafe Categories */}
      <Box className="flex flex-col items-center px-6 md:px-12 py-10 space-y-16">
        <Box className="text-center max-w-4xl">
          <Typography className="font-holtwood text-4xl md:text-5xl text-[#FE7700] mb-4">
            CAFE CATEGORIES
          </Typography>
          <Typography className="font-cambay text-xl md:text-2xl leading-8 tracking-tighter font-normal">
            Here you can check out the categories of Cafe by your choice. By{" "}
            <span className="underline">Cafe Dekho</span>, you can choose the
            cafe depending on your mood...
          </Typography>
        </Box>

        {/* Themed Cafes Section */}
        <Box className="w-full space-y-6">
          <Typography className="font-cambay font-bold text-3xl md:text-4xl text-[#FE7700]">
            Best Themed Cafe’s
          </Typography>
          <Typography className="font-cambay text-lg md:text-xl leading-8 tracking-tighter font-normal">
            These cafes offer a unique experience by focusing on a specific
            concept, such as a Bollywood theme, a comic book theme, or a nature
            theme.
          </Typography>
          <Box className="flex flex-wrap justify-center md:justify-between gap-6">
            {Image2.map((data, index) => (
              <Card key={index} data={data} />
            ))}
          </Box>
        </Box>

        {/* Brunch Cafes Section */}
        <Box className="w-full space-y-6">
          <Typography className="font-cambay font-bold text-3xl md:text-4xl text-[#FE7700]">
            Best Brunch Cafe’s
          </Typography>
          <Typography className="font-cambay text-lg md:text-xl leading-8 tracking-tighter font-normal">
            Brunch cafes are a popular choice, and a good brunch menu is
            essential for cafes that specialize in brunch.
          </Typography>
          <Box className="flex flex-wrap justify-center md:justify-between gap-6">
            {Image2.map((data, index) => (
              <Card key={index} data={data} />
            ))}
          </Box>
        </Box>

        {/* Pop-Up Cafes Section */}
        <Box className="w-full space-y-6">
          <Typography className="font-cambay font-bold text-3xl md:text-4xl text-[#FE7700]">
            Best Pop-Up Cafe’s
          </Typography>
          <Typography className="font-cambay text-lg md:text-xl leading-8 tracking-tighter font-normal">
            Pop-up cafes are limited-run cafes that often experiment with unique
            concepts and beverages.
          </Typography>
          <Box className="flex flex-wrap justify-center md:justify-between gap-6">
            {Image2.map((data, index) => (
              <Card key={index} data={data} />
            ))}
          </Box>
        </Box>

        {/* Explore More Button */}
        <button className="bg-[#FE7700] w-72 h-12 rounded-lg font-cambay font-bold text-xl text-white hover:bg-[#e86600] transition duration-300">
          Explore More Categories...
        </button>
      </Box>
    </Layout>
  );
};

export default Home;
