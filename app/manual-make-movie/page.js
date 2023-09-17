import LeftSideBar from "../component/common/LeftSideBar";
import RightSideBar from "../component/common/RightSideBar";
import FormInput from "../component/manual-make-movie/FormInput";

const Page = () => {
  return (
    <div className="flex min-h-screen">
      <LeftSideBar />
      <div className=" flex-1 py-10  px-5 sm:px-10 ">
        <FormInput />
      </div>
      <RightSideBar />
    </div>
  );
};

export default Page;