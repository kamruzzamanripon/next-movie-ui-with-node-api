import LeftSideBar from "./component/common/LeftSideBar";
import RightSideBar from "./component/common/RightSideBar";
import CategoryWiseMovies from "./component/index/CategoryWiseMovies";
import HeroSection from "./component/index/HeroSection";
import TopMovies from "./component/index/TopMovies";

export default function Home() {
  return (
    <div class="flex min-h-screen">
    <LeftSideBar />
    <div class=" flex-1 py-10  px-5 sm:px-10 ">
      <HeroSection />
      <TopMovies />
      <CategoryWiseMovies />
    </div>
    <RightSideBar />
    </div>
  )
}
