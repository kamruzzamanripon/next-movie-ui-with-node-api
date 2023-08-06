import LeftSideBar from "./component/common/LeftSideBar";
import RightSideBar from "./component/common/RightSideBar";
import CategoryWiseMovies from "./component/index/CategoryWiseMovies";
import HeroSection from "./component/index/HeroSection";
import TopMovies from "./component/index/TopMovies";

export default function Home() {
  return (
    <div className="flex min-h-screen">
    <LeftSideBar />
    <div className=" flex-1 py-10  px-5 sm:px-10 ">
      <HeroSection />
      <TopMovies />
      <CategoryWiseMovies />
    </div>
    <RightSideBar />
    </div>
  )
}
